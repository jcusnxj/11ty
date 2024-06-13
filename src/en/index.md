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
<h6><a href="{{ item.url }}">{{ item.data.title }}</a></h6> 
{{ item.data.date | postDate }}
<br>
<br>
{% endfor %}
