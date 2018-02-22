$(document).ready(function() {
	$('#fullpage').fullpage({
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
    });
});

$('body')
    .on('click', '.J_unOpen', function(){
        swal('技能,作品,联系我 暂未开放入口！');
    })