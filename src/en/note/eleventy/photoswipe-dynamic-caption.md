---
title: PhotoSwipe Dynamic Caption
templateEngineOverride: md
translationKey: "photoSwipeDynamicCaption"
eleventyNavigation:
  key: PhotoSwipe Dynamic Caption
  parent: Eleventy
  order: 14
---
## 1. Installation
```hmtl
npm i photoswipe-dynamic-caption-plugin --save
```
## 2. PhotoSwipe CSS and JS files
The following files need to be copied from `node_modules/photoswipe-dynamic-caption-plugin/` to the Eleventy project's `/src/assets/js/` and `/src/assets/css/` directories:
- photoswipe-dynamic-caption-plugin.css
- photoswipe-dynamic-caption-plugin.esm.js

## 3. Extend index.js with initialization
It is assumed that the file `/src/assets/js/index.js` exists and should be modified as follows:
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

## 4. Base layout
Adjust base layout `/src/_layouts/base.njk`:
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

## 3. Usage
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
Result:

<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
    <span class="pswp-caption-content">Caption content</span>
  </a>
</div>

## 4. Sources
- [Official documentation](https://github.com/dimsemenov/photoswipe-dynamic-caption-plugin?tab=readme-ov-file)