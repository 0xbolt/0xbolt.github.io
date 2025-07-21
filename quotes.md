---
layout: base.njk
permalink: /quotes/
selected_quotes:
  - sutskever0
  - edwin0
  - disney1
  - disney0
  - senna0
  - herbert0
  - churchill1
  - churchill9
  - churchill10
  - roosevelt0
  - aeschylus0
  - catmull0
  - carmack0
  - munger1
---
<style>
    blockquote {
        max-width: 540px;
        margin: 2em auto;
        padding: 1em;
        line-height: 1.6;
        text-align: justify;
        text-indent: 2em;
    }
    blockquote footer {
        text-align: right;
        margin-top: 0.5em;
    }
    @media (max-width: 540px) {
        blockquote {
            margin: 1em;
            padding: 0.8em;
        }
    }
</style>

{% for id in selected_quotes %}
<blockquote>
    &ldquo;{{ quotes.quotes[id].text }}&rdquo;
    <footer>— {{ quotes.quotes[id].author }}{% if quotes.quotes[id].source %}, {{ quotes.quotes[id].source }}{% endif %}{% if quotes.quotes[id].note %} <span style="font-style: italic; font-size: 0.9em;">({{ quotes.quotes[id].note }})</span>{% endif %}</footer>
</blockquote>
{% endfor %}