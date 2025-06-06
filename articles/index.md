---
layout: base.njk
permalink: /articles/
---
<div style="max-width: 520px; margin: 2em auto;">
    <ul style="list-style: none; padding: 0;">
    {% for article in collections.articles %}
        <li style="margin: 1.5em 0;">
            <a href="{{ article.url }}" style="text-decoration: none; color: #333; font-size: 1.4em; font-weight: 500; letter-spacing: -0.02em;">{{ article.data.title }}</a>
        </li>
    {% endfor %}
    </ul>
</div>
