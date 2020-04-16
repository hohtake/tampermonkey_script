// ==UserScript==
// @name         cybozu-title
// @namespace    https://github.com/hohtake/tampermonkey_script
// @version      0.2
// @description  cybozu title easy!
// @author       hohtake@opendoor.co.jp
// @match        https://remote2.cybozu.co.jp/*
// @match        http://cybozu/*
// @grant        none
// ==/UserScript==

(function() {
    const titleAreaSubject = document.querySelector('.vr_viewTitleAreaSubject');
    const titlePrefix = 'Cybozu: ';
    if (location.search == '?page=AGIndex') {
        document.head.querySelector('title').text = titlePrefix + 'Top';
    } else if (titleAreaSubject) {
        const titleAreaSubjectText = titleAreaSubject.innerText;
        if (titleAreaSubjectText) {
          document.head.querySelector('title').text = titlePrefix + titleAreaSubjectText;
        }
    }
})();
