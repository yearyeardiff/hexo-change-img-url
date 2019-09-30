const imageRegex = /(<img\s[^>]*?src(\s+)?=[\s"'])[\.]?[/]?(.+)/gi
hexo.extend.filter.register('after_post_render', function(data) {
	if(data.layout=='post'||data.layout=='page'||data.layout=='about'){
		data.content=data.content.replace(imageRegex, '$1' + '/' + '$3"');
	}
    return data;
});
