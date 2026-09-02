---
tags:
  - Compatibility
  - Markdown
---

# Markdown

Zensical currently uses [Python Markdown] and [Python Markdown Extensions] to
render Markdown. This is the same ecosystem used by MkDocs and Material for
MkDocs, so existing content and `markdown_extensions` configuration continue to
work without changes.

## Configuration

Keep the extension names and settings in your existing `mkdocs.yml`, e.g.:

``` yaml
markdown_extensions:
  - admonition
  - pymdownx.superfences
```

The references below document the extensions and settings available in
Zensical, while the authoring guide explains the Markdown dialect and general
writing conventions.

[Python Markdown]: python-markdown.md
[Python Markdown Extensions]: python-markdown-extensions.md
