<script>
  import './styles.css'
  import Footer from '$lib/Footer.svelte'
</script>

<div class="app">
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style lang="scss">
  .app {
    min-height: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    height: 95%;
  }
</style>
