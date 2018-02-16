var setbodyHeight = function(){
    $('.container').css('height', document.documentElement.clientHeight + 'px');
}

window.onload = setbodyHeight;
window.onresize = setbodyHeight;

$('body')
    .on('click', '.J_unOpen', function(){
        swal('技能,作品,联系我 暂未开放入口！');
    })