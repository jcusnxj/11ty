---
title: Blog
layout: base
permalink: "/{{ lang }}/index.html"
translationKey: "homePage"
eleventyNavigation:
    key: Blog
    order: 1
---
{% for item in collections["post_" + lang ] | reverse %}
<a href="{{ item.url }}">{{ item.data.title }}</a> - {{ item.data.summary}} 
<div style="color:grey;"><i>{{ item.data.date | postDate }}</i></div>
{% endfor %}


