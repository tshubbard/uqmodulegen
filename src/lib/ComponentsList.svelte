<script lang="ts">
  import debounce from 'lodash/debounce'
  import List, { Item, Text, PrimaryText } from '@smui/list'
  import Button, { Label } from '@smui/button'
  import Textfield from '@smui/textfield'
  import Icon from '@smui/textfield/icon'
  import Snackbar, { Actions } from '@smui/snackbar'
  import IconButton from '@smui/icon-button'

  import { componentsData } from '../data/components'
  import ComponentSettings from './ComponentSettings.svelte'
  import Outline from './Outline.svelte'
  import { compCountStore } from '../stores/stores.js'

  let componentsArr = []
  let componentsJSON = ''
  let searchTerm = ''
  let selectedType = ''
  let selectedComp = {}
  let selectionIndex: number | undefined = undefined
  let filteredComponents = componentsData
  let compCt = {}
  let snackbarSuccess: Snackbar

  const resetCompStore = () => {
    compCt = {}
    componentsData.forEach((item) => {
      compCt[item.type] = 0
    })
    compCountStore.set(compCt)
  }

  const onSelectItem = (item) => {
    selectedType = item.type
    selectedComp = item
  }

  const onSearchTermChange = debounce((e) => {
    const term = searchTerm.toLowerCase()
    filteredComponents = componentsData.filter((item) => {
      return (
        item.type.toLowerCase().indexOf(term) !== -1 ||
        item.key.toLowerCase().indexOf(term) !== -1 ||
        item.constName.toLowerCase().indexOf(term) !== -1
      )
    })
  }, 200)

  const onAddComponents = (event) => {
    componentsArr = [...componentsArr, ...event.detail]

    componentsJSON = JSON.stringify(componentsArr)
    copyToClipboard()
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(componentsJSON).then(
      () => {
        snackbarSuccess.open()
      },
      (err) => {
        console.error('Could not copy text: ', err)
      }
    )
  }

  const clearData = () => {
    componentsJSON = ''
    componentsArr = []
    resetCompStore()
  }

  const onUpdateComponents = (event) => {
    componentsArr = event.detail
    componentsJSON = JSON.stringify(componentsArr)
  }

  resetCompStore()
</script>

<section class="componentsListSectionWrapper">
  <div class="componentsListWrapper">
    <h3>Components</h3>

    <div class="searchInput">
      <Textfield
        variant="outlined"
        bind:value={searchTerm}
        label="Search Components"
        on:keyup={onSearchTermChange}
        class="searchTermInput fullWidth"
      >
        <Icon class="material-icons" slot="trailingIcon">search</Icon>
      </Textfield>
    </div>

    <List
      class="componentsList"
      singleSelection
      bind:selectedIndex={selectionIndex}
      dense
    >
      {#each filteredComponents as item}
        <Item on:SMUI:action={() => onSelectItem(item)} selected={selectedType === item.key}>
          <Text>
            <PrimaryText>{item.type} ({item.constName})</PrimaryText>
          </Text>
        </Item>
      {/each}
    </List>
  </div>
  <div class="componentsConfigWrapper">
    <ComponentSettings on:addComponents={onAddComponents} {selectedComp} />
  </div>
  <div class="componentsJsonWrapper">
    <div class="componentsJsonHeader">
      <h3>JSON Data</h3>
      <div>
        <Button on:click={clearData} variant="raised" disabled={componentsJSON.length === 0}>
          <Label>Clear</Label>
        </Button>
      </div>
      <div>
        <Button on:click={copyToClipboard} variant="raised" disabled={componentsJSON.length === 0}>
          <Label>Copy to Clipboard</Label>
        </Button>
      </div>
    </div>
    <div class="componentsJson">
      <textarea bind:value={componentsJSON} />
    </div>
  </div>
  <div class="componentsOutlineWrapper">
    <Outline components={componentsArr} {selectedComp} on:updateComponents={onUpdateComponents} />
  </div>
  <Snackbar bind:this={snackbarSuccess} class="successToast">
    <Label
      >Copied Module Def to Clipboard</Label
    >
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
  </Snackbar>
</section>

<style lang="scss">
  .componentsListSectionWrapper {
    display: grid;
    height: calc(100vh - 13rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr);
    grid-template-rows: minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 1rem;
  }

  .componentsListWrapper,
  .componentsConfigWrapper,
  .componentsJsonWrapper,
  .componentsOutlineWrapper {
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 1rem;
    height: 100%;
  }

  .componentsListWrapper {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: span 3;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
  }

  :global(.componentsList) {
    border: 1px solid black;
    border-radius: 4px;
  }

  :global(.mdc-deprecated-list-item__text) {
    padding-bottom: 0.25rem;
  }

  :global(.mdc-snackbar.successToast .mdc-snackbar__surface) {
    background-color: #4BB543;
  }

  :global(.mdc-snackbar.successToast .mdc-snackbar__label) {
    color: #000000;
    font-weight: 600;
  }

  :global(.mdc-snackbar.successToast .mdc-snackbar__dismiss) {
    color: #000000;
    font-weight: 600;
  }

  .componentsConfigWrapper {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: span 3;
  }

  .componentsJsonWrapper {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .componentsJson {
      height: 100%;
    }
    & textarea {
      height: 80%;
      width: 99%;
    }
  }

  .componentsJsonHeader {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 0.5rem;

    & h3 {
      margin: 1rem 0 0.5rem;
    }
  }

  .componentsOutlineWrapper {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    overflow-y: auto;
  }
</style>
