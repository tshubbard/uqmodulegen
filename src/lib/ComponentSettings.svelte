<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { withPrevious } from 'svelte-previous'
  import Button, { Label } from '@smui/button'
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import Checkbox from '@smui/checkbox'
  import FormField from '@smui/form-field'
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import Select, { Option } from '@smui/select'

  import { compCountStore } from '../stores/stores.js'

  export let selectedComp = undefined

  const [currComp, prevComp] = withPrevious({})
  const dispatch = createEventDispatcher()

  let selectedCompLabel = selectedComp.label || ''
  let defaultValues = {}
  let hasOptions = {}
  let isLayout = false
  let defaultValuesText = ''
  let hasOptionsText = ''
  let defaultValuesPropCt = 4

  let noLabelChecked = true
  let compWithLabelChecked = true
  let disabledChecked = true
  let requiredChecked = true
  let readOnlyChecked = true
  let hideLabelChecked = true
  let addAllChecked = true
  let showAddAll = false
  let compSelected = false
  let numCompsToCreate = 0
  let numCompStates = 0
  let visibleStatesLabel = ''
  let numComponentsToCreate = 0

  let hasRequiredOption = false
  let hasDisabledOption = false
  let hasReadOnlyOption = false
  let hasHideLabelOption = false

  let selectedLayoutOption = ''
  let layoutOptionColNum = 2
  let layoutColumns = ''

  $: {
    if (Object.keys(selectedComp).length) {
      compSelected = true
      defaultValues = selectedComp.defaultValues
      hasOptions = selectedComp.hasOptions
      isLayout = selectedComp.isLayout

      if (selectedComp.type === 'columns') {
        layoutColumns = getColumnsFromLayout()
        if (selectedLayoutOption === '') {
          selectedLayoutOption = selectedComp.defaultValues.selectedColumnLayout
        }
      }
      
      hasRequiredOption = hasOptions.required
      hasDisabledOption = hasOptions.disabled
      hasReadOnlyOption = hasOptions.readOnlyView
      hasHideLabelOption = hasOptions.hideComponentLabel

      defaultValuesText = JSON.stringify(defaultValues, null, ' ') || ''
      defaultValuesPropCt = defaultValues ? 24 : 4

      showAddAll =
        Object.values(selectedComp.hasOptions).reduce((totalTrue, currentValue) => {
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
      if (hasDisabledOption && disabledChecked) {
        numCompsToCreate++
        numCompStates++
      }
      if (hasRequiredOption && requiredChecked) {
        numCompsToCreate++
        numCompStates++
      }
      if (hasReadOnlyOption && readOnlyChecked) {
        numCompsToCreate++
        numCompStates++
      }
      if (hasHideLabelOption && hideLabelChecked) {
        numCompsToCreate++
        numCompStates++
      }

      if (numCompStates <= 1) {
        // if there are no "Add All" components to add, turn this off
        addAllChecked = false
        showAddAll = false
      } else {
        showAddAll = true
      }

      if (addAllChecked) {
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

  const getColumnsFromLayout = () => {
    return selectedLayoutOption.split('-').slice(2)
  }

  const getKey = (comp) => {
    const key = comp.key || comp.defaultValues.key || 'uhoh'

    return `${key}-${$compCountStore[comp.type]}`
  }

  const getLabel = (comp, appendText) => {
    const label = selectedCompLabel || comp.label || comp.defaultValues.label || ''
    const addText = appendText ? ` ${appendText} ` : ' '

    return `${label}${addText}- ${$compCountStore[comp.type]}`
  }

  const getComponent = ({
    label = '',
    required = false,
    readOnlyView = false,
    disabled = false,
    hideComponentLabel = false
  }) => {
    const comp = {
      ...selectedComp.defaultValues,
      type: selectedComp.type,
      key: getKey(selectedComp),
      label,
      ...(hasRequiredOption && { validate: { required } }),
      ...(hasReadOnlyOption && { readOnlyView }),
      ...(hasDisabledOption && { disabled }),
      ...(hasHideLabelOption && { hideComponentLabel })
    }

    if (selectedComp.isLayout && selectedComp.type === 'columns') {
      const cols = getColumnsFromLayout()
      const columns = []
      cols.forEach(item => {
        columns.push({
          components: [],
          width: item,
          offset: 0,
          pull: 0,
          push: 0
        })
      })
      comp.columns = columns
    }
    return comp
  }

  const genComponents = () => {
    const newComponents = []
    const compType = selectedComp.type
    let ct = $compCountStore[compType]


    if (noLabelChecked) {
      newComponents.push(getComponent({
        label: ''
      }))

      $compCountStore[compType]++
    }

    if (compWithLabelChecked) {
      newComponents.push(getComponent({
        label: getLabel(selectedComp)
      }))

      $compCountStore[compType]++
    }

    if (hasReadOnlyOption && readOnlyChecked) {
      newComponents.push(getComponent({
        label: getLabel(selectedComp, '(readonly)'),
        readOnlyView: true
      }))

      $compCountStore[compType]++
    }

    if (hasRequiredOption && requiredChecked) {
      newComponents.push(getComponent({
        label: getLabel(selectedComp, '(required)'),
        required: true
      }))

      $compCountStore[compType]++
    }

    if (hasDisabledOption && disabledChecked) {
      newComponents.push(getComponent({
        label: getLabel(selectedComp, '(disabled)'),
        disabled: true
      }))

      $compCountStore[compType]++
    }

    if (hasHideLabelOption && hideLabelChecked) {
      newComponents.push(getComponent({
        label: getLabel(selectedComp, '(hidelabel)'),
        hideComponentLabel: true
      }))

      $compCountStore[compType]++
    }

    if (addAllChecked) {
      newComponents.push(getComponent({
        label: getLabel(selectedComp, getNumVisibleStatesLabel()),
        required: true,
        readOnlyView: true,
        disabled: true,
        hideComponentLabel: true
      }))

      $compCountStore[compType]++
    }

    dispatch('addComponents', newComponents)
  }

  const getNumVisibleStatesLabel = () => {
    const opts = [
      hasReadOnlyOption && readOnlyChecked ? 'readonly' : '',
      hasRequiredOption && requiredChecked ? 'required' : '',
      hasDisabledOption && disabledChecked ? 'disabled' : '',
      hasHideLabelOption && hideLabelChecked ? 'hidelabel' : ''
    ].filter((item) => item.length)
    return opts.length ? `(${opts.join(' ')})` : ''
  }
</script>

<section class="componentsConfigSectionWrapper">
  <div class="configSectionWrapper">
    <div class="configSection">
      <h3>{selectedComp?.constName ? selectedComp.constName : ''} Config - UI States</h3>

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
          <span class="labelHelperText" slot="helper">Label prefix for any created components</span>
        </Textfield>

        {#if hasReadOnlyOption}
          <FormField>
            <Checkbox bind:checked={readOnlyChecked} />
            <span slot="label">Add ReadOnly State</span>
          </FormField>
        {/if}

        {#if hasRequiredOption}
          <FormField>
            <Checkbox bind:checked={requiredChecked} />
            <span slot="label">Add Required State</span>
          </FormField>
        {/if}

        {#if hasDisabledOption}
          <FormField>
            <Checkbox bind:checked={disabledChecked} />
            <span slot="label">Add Disabled State</span>
          </FormField>
        {/if}

        {#if hasHideLabelOption}
          <FormField>
            <Checkbox bind:checked={hideLabelChecked} />
            <span slot="label">Add Hide Label State</span>
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

        {#if selectedComp.isLayout && selectedComp.type === 'columns'}
          <h4>Layout Options</h4>

          <ul class="optionsList">
            <li>
              <FormField class="fullWidth">
                <Select bind:value={selectedLayoutOption} class="fullWidth" label="Number of Columns?">
                  {#each selectedComp.options as opt}
                    <Option value={opt.id}  >{opt.label}</Option>
                  {/each}
                </Select>
              </FormField>
            </li>
            <li>
              <div>&nbsp;</div>
            </li>
            {#if selectedLayoutOption === 'col-layout-custom'}
            <li>
              <FormField>
                <Textfield 
                  variant="outlined"
                  bind:value={layoutOptionColNum}
                  type="number"
                  label="Up to 12 columns"
                  on:change={() => {
                    if (layoutOptionColNum < 1) {
                      layoutOptionColNum = 1
                    } else if (layoutOptionColNum > 12) {
                      layoutOptionColNum = 12
                    }
                  }}
                  >
                </Textfield>
              </FormField>              
            </li>
            {/if}
            <li>
              <div>{selectedLayoutOption}</div>
              <div>{layoutColumns}</div>
            </li>
            
          </ul>
        {/if}

        <h4>Component Has Options</h4>
        <ul class="optionsList">
          <li>Read Only: {hasReadOnlyOption}</li>
          <li>Required: {hasRequiredOption}</li>
          <li>Disabled: {hasDisabledOption}</li>
          <li>Hide Label: {hasHideLabelOption}</li>
        </ul>
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

  .optionsList {
    margin: 0;
    padding: 0 1rem;
    list-style: none;
  }
</style>
