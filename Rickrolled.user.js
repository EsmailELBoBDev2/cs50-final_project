// ==UserScript==
// @name         Rickrolled: The Addon
// @namespace    https://esmailelbobdev2.github.io/
// @version      0.1
// @description  It's simple script that changes all of any webpage links to rick's video "never gonna give you up" (randomly)
// @author       EsmailELBoB
// @match        *://*/*
// @icon         https://upload.vaa.red/i/2oRzV4.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Declare our "true" and "false" list
    let randomdecide = [
        1,
        0
    ];

    // pick 0 or 1 randomly
    let randomItemDecide = Math.floor(Math.random() * randomdecide.length);

    // If it's 1 (true), let's exexute our code
    if (randomdecide[randomItemDecide]){

        // same concpet as our first true or false list - but this got our youtube videos
        let randomLink = [
            "https://www.youtube.com/watch?v=6n3pFFPSlW4",
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "https://www.youtube.com/watch?v=sAn7baRbhx4"
        ];

        // same as above too, pick randomly from our youtube videos list
        let randomItemLink = Math.floor(Math.random() * randomLink.length);

        // here let's search all <a> tags
        var anchors = document.getElementsByTagName("a");

        // loop all over our <a> tags
        for (var i = 0; i < anchors.length; i++) {

            // change each one with our "randomly" picked youtube link
            anchors[i].href = randomLink[randomItemLink];
        }

    // if it's 0, let's print you are lucky boy (for now)
    } else {
        console.log("Rickrolled Addon: You have been saved, lucky boy!");
    }})();
