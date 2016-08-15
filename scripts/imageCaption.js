/*
	Big thanks to https://github.com/wayou/hexo-image-caption
 */

hexo.extend.filter.register('after_post_render', function(data) {

    if (data.layout == 'post' || data.layout == 'page' || data.layout == 'about') {
		data.content = data.content.replace(/(<img [^>]*>)/g, '<figure class="figure">$1</figure>')
        data.content = data.content.replace(/(<img [^>]*alt="([^"]+)"[^>]*>)/g, '$1' + '<figcaption class="figure__caption">$2</figcaption>')
    }
    return data

})
