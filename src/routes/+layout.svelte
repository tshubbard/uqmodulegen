<script>
  import './styles.css'

	const commit = '8f25535'
	const projectUrl = 'https://github.com/tshubbard/uqmodulegen'
	const commitLink = '/commit/'
	const commitUrl = `${projectUrl}${commitLink}${commit}`
	const lastBuilt = 'Mar 17, 2023, 8:23 AM EDT'
</script>

<div class="app">
  <main>
    <slot />
  </main>
  <footer>
		
		<div>Last built: {lastBuilt}</div>
		<div>Commit: <a href={commitUrl}>{commit}</a></div>
		<div>Repo: <a href={projectUrl}>{projectUrl}</a></div>
		
	</footer>
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
  footer {
    height: 64px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
