<script>
  import { AppVersion } from './constants'
	const projectUrl = 'https://github.com/tshubbard/uqmodulegen'
  const changelogUrl = 'https://github.com/tshubbard/uqmodulegen/commits/main'
	const commitLink = '/commit/'
	const lastBuilt = new Date().toLocaleString()
</script>

<footer class="footer">
  <div>Version: {AppVersion} | Last built: {lastBuilt}</div>
  <div><a href={changelogUrl}>Changelog</a></div>
  <div>Repo: <a href={projectUrl}>{projectUrl}</a></div>
</footer>

<style lang="scss">
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
