// ==UserScript==
// @name         cybozu-permalink
// @namespace    https://github.com/hohtake/tampermonkey_script
// @version      0.1
// @description  permalink-ag.exe!
// @author       hohtake@opendoor.co.jp
// @match        https://remote2.cybozu.co.jp/*
// @match        http://cybozu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const permalink_container = document.getElementById('permalink-container');
    if (permalink_container != null) {
        const commentUrl = permalink_container.getElementsByClassName('vr_commentUrl')[0];
        const addInputHtml = '<br><br><input class="vr_commentUrl" type="text" readonly="" value="" name="commentUrl2">';
        commentUrl.parentNode.insertAdjacentHTML('beforeend', addInputHtml);
        const commentUrl2 = permalink_container.getElementsByClassName('vr_commentUrl')[1];
        commentUrl2.addEventListener('focus', function() {
            this.select();
        });

        document.addEventListener('click', function() {
            if (permalink_container.style.display == 'block') {
            const ag_exe_index = commentUrl.value.indexOf('ag.exe');
            commentUrl2.value = commentUrl.value.substring(ag_exe_index);
            }
        });
    }
})();
