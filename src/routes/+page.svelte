<script lang="ts">
	import ComponentsList from '../lib/ComponentsList.svelte'
</script>

<h1>Module Data JSON Generator <span class="tinyText">({APP_VERSION})</span></h1>

<section>
	<ComponentsList />
</section>


<style>
	.tinyText {
		font-size: 0.85rem;
		vertical-align: super;
	}
</style>