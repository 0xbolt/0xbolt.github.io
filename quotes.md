---
layout: base.njk
permalink: /quotes/
selected_quotes:
  - brucelee0
  - brucelee1
  - brucelee2
  - edwin0
  - edwin1
---
{% for id in selected_quotes %}
<blockquote>
    &ldquo;{{ quotes.quotes[id].text }}&rdquo;
    <footer>— {{ quotes.quotes[id].author }}{% if quotes.quotes[id].source %}, {{ quotes.quotes[id].source }}{% endif %}{% if quotes.quotes[id].note %} <span style="font-style: italic; font-size: 0.9em;">({{ quotes.quotes[id].note }})</span>{% endif %}</footer>
</blockquote>
{% endfor %}