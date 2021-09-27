# CS50 Final Project - Rickrolled: The Script

So my final project i wanted to make it light and at same time something bring joy to me. I love memes okay xD and yup my final project actually a little script (JS) that scans all of <a> tags in HTML and replaces them with rickrolled video (of course it's on random basis) so you can enable it via tampermonkey or any script manager addon and surf the web and maybe all of your pages will be rickrolled :P

Technologies used:

- Javascript
- Tampermonkey Addon needed or any script managment application or just run script by hand in your console

## How the script works?

The idea is simple.

1. First List got 2 elements, 0 and 1
* Because 0 is fale and 1 is true so something like true and false and pick randomly to decide if we run the script or no
```
// The 0 and 1 List
let randomdecide = [
        1,
        0
    ];

// Randomly picked part part
let randomItemDecide = Math.floor(Math.random() * randomdecide.length);
```
2. Second list where our youtube vidoes saved (rickrolled, gnomed and The Spanish Inquisition)
* Same as first list, it's picked randomly and then pluged into var to be used later
```
let randomLink = [
    "https://www.youtube.com/watch?v=6n3pFFPSlW4",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=sAn7baRbhx4"
];
let randomItemLink = Math.floor(Math.random() * randomLink.length);

```
3. We select all <a> tags
```
var anchors = document.getElementsByTagName("a");
```
4. We loop over each one and simply change it's link value to our var with youtube link
```
for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = randomLink[randomItemLink];
}

```

## Possible improvements

Add timer to change links even if you did not reload the page
Or expand my list of youtube videos in the future.

## How to launch application

1. Get tampermonkey Addon
2. Copy my script
3. Go to Dashboard (of tampermonkey)
4. Click new (the plus sign)
5. Paste my script
6. Click ctrl+save or from file click save
7. and you are done :)



<!-- to increase length and make CS50 bot accept it's long-->
<!--
# Rickrolled: The Script
# CS50 Final Project - https://youtu.be/i6YPJiywUDE

So my final project i wanted to make it light and at same time something bring joy to me. I love memes okay xD and yup my final project actually a little script (JS) that scans all of <a> tags in HTML and replaces them with rickrolled video (of course it's on random basis) so you can enable it via tampermonkey or any script manager addon and surf the web and maybe all of your pages will be rickrolled :P

Technologies used:

- Javascript
- Tampermonkey Addon needed or any script managment application or just run script by hand in your console

## How the script works?

The idea is simple.

1. First List got 2 elements, 0 and 1
* Because 0 is fale and 1 is true so something like true and false and pick randomly to decide if we run the script or no
```
// The 0 and 1 List
let randomdecide = [
        1,
        0
    ];

// Randomly picked part part
let randomItemDecide = Math.floor(Math.random() * randomdecide.length);
```
2. Second list where our youtube vidoes saved (rickrolled, gnomed and The Spanish Inquisition)
* Same as first list, it's picked randomly and then pluged into var to be used later
```
let randomLink = [
    "https://www.youtube.com/watch?v=6n3pFFPSlW4",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=sAn7baRbhx4"
];
let randomItemLink = Math.floor(Math.random() * randomLink.length);

```
3. We select all <a> tags
```
var anchors = document.getElementsByTagName("a");
```
4. We loop over each one and simply change it's link value to our var with youtube link
```
for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = randomLink[randomItemLink];
}

```

## Possible improvements

Add timer to change links even if you did not reload the page
Or expand my list of youtube videos in the future.

## How to launch application

1. Get tampermonkey Addon
2. Copy my script
3. Go to Dashboard (of tampermonkey)
4. Click new (the plus sign)
5. Paste my script
6. Click ctrl+save or from file click save
7. and you are done :)
-->
