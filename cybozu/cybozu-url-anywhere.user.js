// ==UserScript==
// @name         cybozu-url-anywhere
// @namespace    https://github.com/hohtake/tampermonkey_script
// @version      0.2
// @description  cybozu url to start ag.exe!
// @author       hohtake@opendoor.co.jp
// @homepage     https://github.com/hohtake/tampermonkey_script/
// @match        https://remote2.cybozu.co.jp/*
// @match        http://cybozu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const checkStartString = 'http://cybozu/';
    const deleteString = 'http://cybozu/cgi-bin/cbag/';
    const checkStartString2 = 'https://remote2.cybozu.co.jp/';
    const deleteString2 = 'https://remote2.cybozu.co.jp/cgi-bin/cbag/';

    const targetLinks = document.getElementsByTagName('a');
    for (let item of targetLinks) {
        const hrefString = item.getAttribute('href');
        if (hrefString != null && hrefString.startsWith(checkStartString)) {
            item.setAttribute('href', hrefString.replace(deleteString, ''));
        } else if (hrefString != null && hrefString.startsWith(checkStartString2)) {
            item.setAttribute('href', hrefString.replace(deleteString2, ''));
        }
    }

})();
