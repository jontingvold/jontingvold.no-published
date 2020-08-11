# jontingvold.no

Personal website and blog set up with Jekyll, a static website and blog generator.

## Screenshot

![](screenshot.png)

## Install

```bundle install```

Hacks
-----

### Zoomable endret fra position: relative til absolute

Zoomable biblioteket setter bildene til position: relative, for å kunne bruke absolute positioning for å flytte og animere bildet. Dette fungerer dårlig når man lager responsive bildestørrelser med fast aspect-ratio med diver, pattern-top  percentage og absolute positioning på bildene inni diven.

Heldigvis var det bare å endre`zoomable.min.js:1:4769` fra `position: relative` til `position: absolute`. 

## Bugs and problems

### Zoomable image gets blurry on retina on Safari

Zooming of images uses `transform: scale(1.7)`. Here there are a bug in Safari which leads to images being rendered with non-retina resolution. Works quite good in Chrome, although still not as sharp as normal images.

### Table of content not scrollable if longer than screen height

The TOC does not have `overflow: scroll`, so long documents, with longer TOC than the screen height will not be visible.

The problem is that  `overflow: scroll` leads to Safari (and Chrome?) disables bfcache and scroll position restoration. 



