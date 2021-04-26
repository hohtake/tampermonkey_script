// ==UserScript==
// @name         github-cybozu-to-remote2
// @namespace    https://github.com/hohtake/tampermonkey_script
// @version      0.2
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

    const modifyLink = function() {
        const targetLinks = document.getElementsByTagName('a');
        for (let item of targetLinks) {
            const hrefString = item.getAttribute('href');
            if (hrefString != null && hrefString.startsWith(checkStartString)) {
                item.setAttribute('href', hrefString.replace(checkStartString, modifyString));
            }
        }
    };

    const checkTarget = document.getElementById('js-repo-pjax-container');
    if (checkTarget) {
    　　const observer = new MutationObserver((mutations) => {
            modifyLink();
        });

　　    const observeOptions = {childList: true};
    　　observer.observe(checkTarget, observeOptions);
    }
})();
