// ==UserScript==
// @name         github-cybozu-to-remote2
// @namespace    https://github.com/hohtake/tampermonkey_script
// @version      0.1
// @description  cybozu url to remote2 url!
// @author       hohtake@opendoor.co.jp
// @homepage     https://github.com/hohtake/tampermonkey_script/
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const checkStartString = 'http://cybozu/';
    const modifyString = 'https://remote2.cybozu.co.jp/';

    const targetLinks = document.getElementsByTagName('a');
    for (let item of targetLinks) {
        const hrefString = item.getAttribute('href');
        if (hrefString != null && hrefString.startsWith(checkStartString)) {
            item.setAttribute('href', hrefString.replace(checkStartString, modifyString));
        }
    }

})();
