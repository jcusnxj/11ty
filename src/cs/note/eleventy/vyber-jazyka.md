---
title: Výběr jazyka
translationKey: "languageSwitcher"
templateEngineOverride: md
eleventyNavigation:
  key: Výběr jazyka
  parent: Eleventy
  order: 4
---
## 1. Předpoklady
Existence `json` souboru, který definuje parametr `lang` (viz [Eleventy i18n](/cs/note/eleventy/eleventy-i18n), bod 4).

## 2. Globální data
Založení souboru `/src/_data/site.js`:

```js
module.exports = {
  title: "jcusnxj",                
  url: "https://jcusnxj.xyz",      
  baseUrl: "/",
  author: "Frank Müller",          
  buildTime: new Date(),
  languages: [
    {
      label: "EN",
      code: "en",
    },
    {
      label: "CZ",
      code: "cs",
    },
  ],
};
```

## 3. translationKey
Anglická verze stránky "About" (`/src/en/pages/about.md`): 
```yaml
---
translationKey: "aboutPage"
---
```

Česká verze stránky "About" (`/src/cs/pages/about.md`):
```yaml
---
translationKey: "aboutPage"
---
```

## 4. Výběr jazyka
```html
{# loop though site.languages #}
{% for lgg in site.languages %}

    {# set translatedUrl to the homepage of that language by default #}
    {% set translatedUrl = "/" + lgg.code + "/" %}

    {# loop through all the content of the site #}
    {% for item in collections.all %}

        {# for each item in the loop, check if
        - its translationKey matches the current item translationKey
        - its lang matches the code of the language we are looping through #}
        {% if item.data.translationKey == translationKey and item.data.lang == lgg.code %}
        {% set translatedUrl = item.url %}
        {% endif %}
        
    {% endfor %}

<a href="{{ translatedUrl }}">{{ lgg.label }}</a>

{% endfor %}
```

## 5. Zdroje
- [Language switcher for multilingual JAMstack sites](https://www.webstoemp.com/blog/language-switcher-multilingual-jamstack-sites/)