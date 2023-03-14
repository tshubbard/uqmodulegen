<script>
  import './styles.css'

	const commit = '191339e0'
	const projectUrl = 'https://github.com/tshubbard/uqmodulegen'
	const commitLink = '/commit/'
	const commitUrl = `${projectUrl}${commitLink}${commit}`
</script>

<div class="app">
  <main>
    <slot />
  </main>
  <footer>
		
		<div>Last built: Mar 14, 2023, 12:01 PM EDT</div>
		<div>Commit: <a href={commitUrl}>{commit}</a></div>
		<div>Project Link: <a href={projectUrl}>{projectUrl}</a></div>
		
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
