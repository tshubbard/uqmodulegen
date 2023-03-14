<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Checkbox from '@smui/checkbox'
	import FormField from '@smui/form-field'
	import Textfield from '@smui/textfield'

	const dispatch = createEventDispatcher()
	export let comp
	export let options
	let isEditMode = false

	console.log('comp: ', comp)
	const onItemClicked = (evt) => {
		console.log('onItemClicked evt: ', evt)
		isEditMode = true
	}

	const onKeypress = (event) => {
		console.log('onKeypress: ', event.key)

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
		console.log('onToggleRequired : ', evt)
	}

	console.log('comp.disabled: ', comp.readOnlyView, comp.disabled)
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
	{:else}
		<div class="key">{comp.key}</div>
		<div class="label">{comp.label}</div>
	{/if}
</li>

<style lang="scss">
	.outlineItem {
		border: 1px solid black;
		border-radius: 4px;
		margin: 0.5rem 0;
		padding: 0.75rem;
		font-size: 0.75rem;

		&:hover {
			background: #eeeeee;
		}

		& .key {
			font-weight: 600;
			margin-bottom: 0.5rem;
		}
	}
</style>
