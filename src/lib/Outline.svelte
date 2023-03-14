<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import OutlineItem from './OutlineItem.svelte'

  const dispatch = createEventDispatcher()
  export let components
  export let selectedComp

  const onSaveItem = (event) => {
    const { component } = event.detail
    const index = components.findIndex((item) => item.key === component.key)

    components.splice(index, 1, component)

    dispatch('updateComponents', components)
  }
</script>

<h3>Outline</h3>

<ul class="outlineList">
  {#each components as comp}
    <OutlineItem {comp} on:onSaveItem={onSaveItem} options={selectedComp.hasOptions} />
  {/each}
</ul>

<style lang="scss">
  .outlineList {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
