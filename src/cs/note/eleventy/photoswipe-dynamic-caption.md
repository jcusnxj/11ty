---
title: PhotoSwipe Dynamic Caption
templateEngineOverride: md
translationKey: "photoSwipeDynamicCaption"
eleventyNavigation:
  key: PhotoSwipe Dynamic Caption
  parent: Eleventy
  order: 14
---
## 1. Instalace
```hmtl
npm i photoswipe-dynamic-caption-plugin --save
```
## 2. PhotoSwipe CSS a JS soubory
Následující soubory je potřeba zkopírovat z `node_modules/photoswipe-dynamic-caption-plugin/` do Eleventy projektu `/src/assests/js/` a `/src/assests/css/`:
- photoswipe-dynamic-caption-plugin.css
- photoswipe-dynamic-caption-plugin.esm.js

## 3. Rozšířit index.js s inicializací
Předpokládá se existence souboru `/src/assets/js/index.js` a jeho následující úprava:
```js
import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; // adjust path to your own
import PhotoSwipeDynamicCaption from '/assets/js/photoswipe-dynamic-caption-plugin.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/assets/js/photoswipe.esm.js'), // adjust path to your own

});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  // Plugins options, for example:
  type: 'auto', // the plugin will try to automatically determine the best position (depending on available space)
  captionContent: '.pswp-caption-content', // Will be used to retrieve caption content instead of alt.
});

lightbox.init();
```

## 4. Základní layout
Upravit základní layout `/src/_layouts/base.njk`:
```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    ...
    <link href="/assets/css/photoswipe-dynamic-caption-plugin.css" rel="stylesheet">
    ...
  </head>
  <body>
    <main>
       ...
    </main>
    <script type="module" src="/assets/js/index.js"></script> 
  </body>
</html>
```

## 3. Použití
```html
<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
    <span class="pswp-caption-content">Caption content</span>
  </a>
</div>
```
Výsledek:

<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
    <span class="pswp-caption-content">Caption content</span>
  </a>
</div>

## 4. Zdroje
- [Oficiální dokumentace](https://github.com/dimsemenov/photoswipe-dynamic-caption-plugin?tab=readme-ov-file)