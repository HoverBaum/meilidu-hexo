/*
	A little script to make sure that the node version is high enough as we
	had multiple issues of people running a not high enough version.

 */

if(parseInt(process.versions.node) < 6) {
	console.log('Your Node version is too old to use MeiliDu.')
	console.log(`MeiliDu needs at least version 6 you are running ${process.versions.node}`)
	console.log('\nUse "npm install -g n" to update your Node version.')
	console.log('\nYou might find the following link informative:\nhttps://github.com/HoverBaum/meilidu-hexo/issues/3')
	process.exit(1)
}
