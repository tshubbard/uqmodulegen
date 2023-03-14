<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { withPrevious } from 'svelte-previous'
  import Button, { Label } from '@smui/button'
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import Checkbox from '@smui/checkbox'
  import FormField from '@smui/form-field'
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'

  import { compCountStore } from '../stores/stores.js'

  export let selectedComp = undefined

  const [currComp, prevComp] = withPrevious({})
  const dispatch = createEventDispatcher()

  let selectedCompLabel = selectedComp.label || ''
  let defaultValues = {}
  let defaultValuesText = ''
  let defaultValuesPropCt = 4

  let noLabelChecked = true
  let compWithLabelChecked = true
  let disabledChecked = true
  let requiredChecked = true
  let readOnlyChecked = true
  let addAllChecked = true
  let showAddAll = false
  let compSelected = false
  let numCompsToCreate = 0
  let numCompStates = 0
  let visibleStatesLabel = ''
  let numComponentsToCreate = 0

  $: {
    if (Object.keys(selectedComp).length) {
      compSelected = true
      defaultValues = selectedComp.defaultValues
      defaultValuesText = JSON.stringify(defaultValues, null, ' ') || ''
      defaultValuesPropCt = defaultValues ? 24 : 4

      showAddAll = Object.values(selectedComp.hasOptions).reduce((totalTrue, currentValue) => {
        return currentValue ? totalTrue + 1 : totalTrue
      }, 0) > 1

      numCompsToCreate = 0
      numCompStates = 0
      if (compWithLabelChecked) {
        numCompsToCreate++
      }
      if (noLabelChecked) {
        numCompsToCreate++
      }
      if (disabledChecked && selectedComp.hasOptions.disabled) {
        numCompsToCreate++
        numCompStates++
      }
      if (requiredChecked && selectedComp.hasOptions.required) {
        numCompsToCreate++
        numCompStates++
      }
      if (readOnlyChecked && selectedComp.hasOptions.readOnlyView) {
        numCompsToCreate++
        numCompStates++
      }

      if (numCompStates <= 1) {
        // if there are no "Add All" components to add, turn this off
        addAllChecked = false
      } else if (addAllChecked) {
        // else if there are "Add All" items checked, and they've checked addAll then increment
        numCompsToCreate++
      }

      visibleStatesLabel = getNumVisibleStatesLabel()
    }

    if (!Object.keys($currComp).length && selectedComp) {
      $currComp = selectedComp
      selectedCompLabel = selectedComp.label || ''
    } else if ($currComp.type !== selectedComp.type) {
      $currComp = selectedComp
      selectedCompLabel = selectedComp.label || ''
    }
  }

  const genComponents = () => {
    console.log('genComponents: ', selectedComp)
    const newComponents = []
    const compType = selectedComp.type
    let ct = $compCountStore[compType]

    const getKey = (comp) => {
      const key = comp.key || comp.defaultValues.key || 'uhoh'
      const count = $compCountStore[compType] + ct
      return `${key}-${count}`
    }
    const getLabel = (comp, appendText) => {
      const label = selectedCompLabel || comp.label || comp.defaultValues.label || 'uhoh'
      const addText = appendText ? ` ${appendText} ` : ' '
      const count = $compCountStore[compType] + ct

      return `${label}${addText}- ${count}`
    }

    const {
      required: hasRequired,
      disabled: hasDisabled,
      readOnlyView: hasReadonly,
      hideComponentLabel: hasHideLabel
    } = selectedComp.hasOptions

    if (noLabelChecked) {
      newComponents.push({
        ...selectedComp.defaultValues,
        type: compType,
        key: getKey(selectedComp),
        label: '',
        ...(hasRequired && { validate: { required: false } }),
        ...(hasReadonly && { readOnlyView: false }),
        ...(hasDisabled && { disabled: false })
      })
      ct++
    }

    if (compWithLabelChecked) {
      newComponents.push({
        ...selectedComp.defaultValues,
        type: compType,
        key: getKey(selectedComp),
        label: getLabel(selectedComp),
        ...(hasRequired && { validate: { required: false } }),
        ...(hasReadonly && { readOnlyView: false }),
        ...(hasDisabled && { disabled: false })
      })
      ct++
    }

    if (hasReadonly && readOnlyChecked) {
      newComponents.push({
        ...selectedComp.defaultValues,
        type: compType,
        key: getKey(selectedComp),
        label: getLabel(selectedComp, '(readonly)'),
        ...(hasRequired && { validate: { required: false } }),
        ...(hasReadonly && { readOnlyView: true }),
        ...(hasDisabled && { disabled: false })
      })
      ct++
    }

    if (hasRequired && requiredChecked) {
      newComponents.push({
        ...selectedComp.defaultValues,
        type: compType,
        key: getKey(selectedComp),
        label: getLabel(selectedComp, '(required)'),
        ...(hasRequired && { validate: { required: true } }),
        ...(hasReadonly && { readOnlyView: false }),
        ...(hasDisabled && { disabled: false })
      })
      ct++
    }

    if (hasDisabled && disabledChecked) {
      newComponents.push({
        ...selectedComp.defaultValues,
        type: compType,
        key: getKey(selectedComp),
        label: getLabel(selectedComp, '(disabled)'),
        ...(hasRequired && { validate: { required: false } }),
        ...(hasReadonly && { readOnlyView: false }),
        ...(hasDisabled && { disabled: true })
      })
      ct++
    }

    if (addAllChecked) {
      newComponents.push({
        ...selectedComp.defaultValues,
        type: compType,
        key: getKey(selectedComp),
        label: getLabel(selectedComp, getNumVisibleStatesLabel()),
        ...(hasRequired && { validate: { required: true } }),
        ...(hasReadonly && { readOnlyView: true }),
        ...(hasDisabled && { disabled: true })
      })
      ct++
    }

    $compCountStore[compType] = $compCountStore[compType] + ct

    dispatch('addComponents', newComponents)
  }

  const getNumVisibleStatesLabel = () => {
    const opts = [
      selectedComp.hasOptions.readOnlyView && readOnlyChecked ? 'readonly' : '',
      selectedComp.hasOptions.required && requiredChecked ? 'required' : '',
      selectedComp.hasOptions.disabled && disabledChecked ? 'disabled' : ''
    ].filter((item) => item.length)
    return opts.length ? `(${opts.join(' ')})` : ''
  }
</script>

<section class="componentsConfigSectionWrapper">
  <div class="configSectionWrapper">
    <div class="configSection">
      <h3>{selectedComp?.constName ? selectedComp.constName : ''} Config</h3>

      {#if compSelected}
        <Wrapper>
          <FormField>
            <Checkbox bind:checked={noLabelChecked} />
            <span slot="label">Add No Label State</span>
            <Tooltip yPos="above">Component will be generated with an empty label value.</Tooltip>
          </FormField>
        </Wrapper>

        <FormField>
          <Checkbox bind:checked={compWithLabelChecked} />
          <span slot="label">Add Component With Below Label</span>
        </FormField>

        <Textfield variant="outlined" bind:value={selectedCompLabel} class="fullWidth">
          <span class="labelHelperText" slot="helper">Label for any created components</span>
        </Textfield>

        {#if selectedComp?.hasOptions?.readOnlyView}
          <FormField>
            <Checkbox bind:checked={readOnlyChecked} />
            <span slot="label">Add ReadOnly State</span>
          </FormField>
        {/if}

        {#if selectedComp?.hasOptions?.required}
          <FormField>
            <Checkbox bind:checked={requiredChecked} />
            <span slot="label">Add Required State</span>
          </FormField>
        {/if}

        {#if selectedComp?.hasOptions?.disabled}
          <FormField>
            <Checkbox bind:checked={disabledChecked} />
            <span slot="label">Add Disabled State</span>
          </FormField>
        {/if}

        {#if showAddAll}
          <FormField>
            <Checkbox bind:checked={addAllChecked} disabled={numCompStates === 0} />
            <span slot="label">
              Add All Previously-Selected States
              <br />
              ({numCompStates} items)
              <br />
              {#if visibleStatesLabel.length}
                Added to Label:
              {/if}
              {visibleStatesLabel}
            </span>
          </FormField>
        {/if}
      {/if}
    </div>

    <div class="defaultValuesSection">
      <h3>Default Values</h3>
      <Textfield
        class="fullWidth smallerText"
        textarea
        variant="filled"
        label=""
        bind:value={defaultValuesText}
        input$rows={defaultValuesPropCt}
      />
      {#if compSelected}
        <div class="floatRight">
          <Button on:click={genComponents} variant="raised">
            <Label>Generate {numCompsToCreate} Components >></Label>
          </Button>
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  .configSectionWrapper {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    width: 100%;
    justify-content: space-around;
    gap: 1rem;
  }

  .configSection,
  .defaultValuesSection {
    flex: 1 0 auto;
  }

  .configSection {
    display: flex;
    flex-direction: column;
  }

  .defaultValuesSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .labelHelperText {
    font-size: 0.8rem;
    padding: 4px;
    color: #616161;
  }
</style>
