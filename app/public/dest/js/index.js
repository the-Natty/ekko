(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.onload = function () {
    function setBg() {
        var bgImgPath = '/app/public/img/p' + parseInt(Math.random() * 6) + '.jpg';
        document.getElementById('app').setAttributeNS('', 'style', 'background-image: url(' + bgImgPath + ')');
    }

    function init() {
        setBg();
    }

    init();
};

},{}]},{},[1]);
