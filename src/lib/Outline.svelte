<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import OutlineItem from './OutlineItem.svelte'

	const dispatch = createEventDispatcher()
	export let components
	export let selectedComp

	const onSaveItem = (comp) => {
		console.log('onSaveItem: ', comp)
		const index = components.findIndex((item) => item.key === comp.detail.key)

		console.log('index: ', index)
		components.splice(index, 1, comp.detail)

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
