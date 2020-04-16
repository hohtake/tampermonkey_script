// ==UserScript==
// @name         github-remote2-to-cybozu
// @namespace    https://github.com/hohtake/tampermonkey_script
// @version      0.1
// @description  remote2 url to cybozu url!
// @author       hohtake@opendoor.co.jp
// @homepage     https://github.com/hohtake/tampermonkey_script/
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const checkStartString = 'https://remote2.cybozu.co.jp/';
    const modifyString = 'http://cybozu/';

    const targetLinks = document.getElementsByTagName('a');
    for (let item of targetLinks) {
        const hrefString = item.getAttribute('href');
        if (hrefString != null && hrefString.startsWith(checkStartString)) {
            item.setAttribute('href', hrefString.replace(checkStartString, modifyString));
        }
    }

})();
