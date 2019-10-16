window.onload = function() {
    function setBg(){
        var bgImgPath = '/app/public/img/p' + parseInt(Math.random() * 5) + '.jpg';
        document.getElementById('app').setAttributeNS('', 'style', 'background-image: url(' + bgImgPath + ')');
    }

    function init(){
        setBg();
    }

    init();
}