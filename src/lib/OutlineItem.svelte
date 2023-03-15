<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { withPrevious } from 'svelte-previous'
  import Button, { Label } from '@smui/button'
  import Checkbox from '@smui/checkbox'
  import Dialog, { Title, Content, Actions } from '@smui/dialog'
  import FormField from '@smui/form-field'
  import Icon from '@smui/textfield/icon'
  import IconButton from '@smui/icon-button'
  import Textfield from '@smui/textfield'

  export let comp
  export let options

  const dispatch = createEventDispatcher()
  const [currValues, prevValues] = withPrevious(comp)
  let isEditMode = false
  let showDeleteDialog = false

  const onItemClicked = (evt) => {
    if ((isEditMode && (evt.target.tagName !== 'INPUT' && evt.target.tagName !== 'SPAN')) || !isEditMode) {
      isEditMode = !isEditMode
      evt.target.focus()
    }
  }

  const onKeypress = (event) => {
    if (event.key === 'Enter') {
      isEditMode = false
      dispatch('onSaveItem', comp)
    }
  }

  let reqChecked = comp.validate?.required
  const onToggleRequired = (evt) => {
    reqChecked = evt.target.checked
    comp.validate = {
      ...comp.validate,
      required: reqChecked
    }
  }

  const onDeleteClicked = (event) => {
    console.log('onDeleteClicked: ', event.target)
    showDeleteDialog = true
  }

  const onDeleteClickedCancel = (event) => {
    showDeleteDialog = false
  }

  const onDeleteClickedConfirm = (event) => {
    console.log('onDeleteClicked: ', event.target)
    showDeleteDialog = false

    dispatch('onDeleteItem', comp)
  }
</script>

<li
  class="outlineItem {isEditMode ? 'editing' : ''}"
  on:click={onItemClicked}
  on:keypress={onKeypress}
>
  {#if isEditMode}
    <div class="key">{comp.key}</div>

    <Textfield variant="outlined" bind:value={comp.label} label="Label" class="fullWidth" />

    {#if options.readOnlyView}
      <FormField>
        <Checkbox bind:checked={comp.readOnlyView} />
        <span slot="label">Toggle ReadOnly State</span>
      </FormField>
    {/if}

    {#if options.required}
      <FormField>
        <Checkbox bind:checked={reqChecked} on:change={onToggleRequired} />
        <span slot="label">Toggle Required State</span>
      </FormField>
    {/if}

    {#if options.disabled}
      <FormField>
        <Checkbox bind:checked={comp.disabled} />
        <span slot="label">Toggle Disabled State</span>
      </FormField>
    {/if}

    {#if options.hideComponentLabel}
      <FormField>
        <Checkbox bind:checked={comp.hideComponentLabel} />
        <span slot="label">Toggle Hide Label</span>
      </FormField>
    {/if}
    <div class="helperText">Press Enter to Save/Update</div>
  {:else}
    <div class="editIcon">
      <Icon class="material-icons">edit</Icon>
      <i class="material-icons deleteBtn"
        on:click|capture|stopImmediatePropagation={onDeleteClicked}>delete</i>
    </div>
    <div class="key">{comp.key}</div>
    <div class="label">{comp.label}</div>
  {/if}
</li>

<Dialog
  bind:open={showDeleteDialog}
  aria-labelledby="delete-item-title"
  aria-describedby="delete-item-content"
>
  <Title id="delete-item-title">Delete {comp.key}</Title>
  <Content id="delete-item-content">Do you want to delete this component?</Content>
  <Actions>
    <Button on:click={onDeleteClickedCancel}>
      <Label>No</Label>
    </Button>
    <Button on:click={onDeleteClickedConfirm}>
      <Label>Yes</Label>
    </Button>
  </Actions>
</Dialog>

<style lang="scss">
  .outlineItem {
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    margin: 0.5rem 0;
    padding: 0.75rem;
    font-size: 0.75rem;

    & .editIcon {
      display: none;
      position: absolute;
      top: 0;
      right: 16px;

      & :global(.material-icons) {
        font-size: 1rem;
        padding: 0.75rem 0.5rem;
        width: 1rem;
      }
    }

    & .deleteBtn:hover {
      cursor: pointer;
    }

    &:hover {
      background: #f4fbf7;

      & .editIcon {
        display: inline;
      }
    }

    & .key {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    & .helperText {
      text-align: center;
      margin-top: 0.5rem;
    }
  }
</style>
