// ==UserScript==
// @name           AddHostnameInTitlebar.uc.js
// @description    閲覧ページのホスト名をタイトルバーの先頭に表示
// @namespace    http://u6.getuploader.com/script/  
// @author         Anonymous
// @include        main
// @compatibility  Firefox 22
// @charset        UTF-8
// @version        3
// @note           http://mimizun.com/log/2ch/software/1280677666/62
// @note           http://mimizun.com/log/2ch/software/1362227410/785
// @note           http://mimizun.com/log/2ch/software/1362227410/788
// ==/UserScript==

eval('gBrowser.getWindowTitleForBrowser = ' + gBrowser.getWindowTitleForBrowser.toString().replace('aBrowser.contentTitle.replace("\\0", "", "g");', 'this.contentDocument.location.hostname + " | " + aBrowser.contentTitle;'));
