// ==UserScript==
// @name         github-milestone-easy2see
// @namespace    https://github.com/hohtake/tampermonkey_script
// @version      0.1
// @description  github milestore description easy to see!
// @author       hohtake@opendoor.co.jp
// @homepage     https://github.com/hohtake/tampermonkey_script/
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const class_m_d_plaintext = 'milestone-description-plaintext';
    const class_m_d_html = 'milestone-description-html';
    const targetPlainText = document.getElementsByClassName(class_m_d_plaintext);
    const targetHtml = document.getElementsByClassName(class_m_d_html);
    for (let item of targetPlainText) {
        item.style.display = 'none';
    }
    for (let item of targetHtml) {
        item.style.display = 'block';
        let p = item.getElementsByTagName('p');
        for (let p_item of p) {
            p_item.style.whiteSpace = 'pre';
        }
    }

})();
