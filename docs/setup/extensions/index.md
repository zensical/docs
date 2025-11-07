---
title: Extensions
---

# Extensions

Markdown is a very small language with a kind-of reference implementation called
[John Gruber's Markdown]. [Python Markdown] and [Python Markdown Extensions]
are two packages that enhance the Markdown writing experience, adding useful
syntax extensions for technical writing.


!!! info "We'll be moving to CommonMark soon"

    Zensical is being actively developed, and we're working towards a more
    comprehensive module system that will allow us to support CommonMark in
    the future. Of course, we will provide tools to automatically migrate your
    existing content when the time comes.

  [John Gruber's Markdown]: https://daringfireball.net/projects/markdown/
  [Python Markdown]: python-markdown.md
  [Python Markdown Extensions]: python-markdown-extensions.md

## Supported extensions

The following extensions are all supported by Zensical and therefore strongly
recommended. Click on each extension to learn about its purpose and
configuration:

<div class="mdx-columns" markdown>

- [Abbreviations]
- [Admonition]
- [Arithmatex]
- [Attribute Lists]
- [Caret, Mark & Tilde]
- [Definition Lists]
- [Details]
- [Emoji]
- [Footnotes]
- [Highlight]
- [Keys]
- [Markdown in HTML]
- [SmartSymbols]
- [Snippets]
- [SuperFences]
- [Tabbed]
- [Table of Contents]
- [Tables]
- [Tasklist]

</div>

  [Abbreviations]: python-markdown.md#abbreviations
  [Admonition]: python-markdown.md#admonition
  [Arithmatex]: python-markdown-extensions.md#arithmatex
  [Attribute Lists]: python-markdown.md#attribute-lists
  [Caret, Mark & Tilde]: python-markdown-extensions.md#caret-mark-tilde
  [Definition Lists]: python-markdown.md#definition-lists
  [Details]: python-markdown-extensions.md#details
  [Emoji]: python-markdown-extensions.md#emoji
  [Footnotes]: python-markdown.md#footnotes
  [Highlight]: python-markdown-extensions.md#highlight
  [Keys]: python-markdown-extensions.md#keys
  [Markdown in HTML]: python-markdown.md#markdown-in-html
  [SmartSymbols]: python-markdown-extensions.md#smartsymbols
  [Snippets]: python-markdown-extensions.md#snippets
  [SuperFences]: python-markdown-extensions.md#superfences
  [Tabbed]: python-markdown-extensions.md#tabbed
  [Table of Contents]: python-markdown.md#table-of-contents
  [Tables]: python-markdown.md#tables
  [Tasklist]: python-markdown-extensions.md#tasklist

## Configuration

### Default configuration

If your configuration file contains no definitions for the extensions then
Zensical will use a default configuration that enables the extensions that are
commonly used and are unlikely to cause any issues. We recommend that you use
the default configuration until you find a reason to change it. This will enable
most of the features listed in the [Authoring] part of this documentation.

[Authoring]: ../../authoring/markdown.md

The following is the full expansion of the default configuration that you
can use as a starting point if you want to explicitly control what Markdown
extensions are active in your project:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.abbr]
    [project.markdown_extensions.admonition]
    [project.markdown_extensions.attr_list]
    [project.markdown_extensions.def_list]
    [project.markdown_extensions.footnotes]
    [project.markdown_extensions.md_in_html]
    [project.markdown_extensions.toc]
    permalink = true
    [project.markdown_extensions.pymdownx.arithmatex]
    generic = true
    [project.markdown_extensions.pymdownx.betterem]
    smart_enable = "all"
    [project.markdown_extensions.pymdownx.caret]
    [project.markdown_extensions.pymdownx.details]
    [project.markdown_extensions.pymdownx.emoji]
    emoji_generator = "zensical.extensions.emoji.to_svg"
    emoji_index = "zensical.extensions.emoji.twemoji"
    [project.markdown_extensions.pymdownx.highlight]
    [project.markdown_extensions.pymdownx.inlinehilite]
    [project.markdown_extensions.pymdownx.keys]
    [project.markdown_extensions.pymdownx.mark]
    [project.markdown_extensions.pymdownx.smartsymbols]
    [project.markdown_extensions.pymdownx.superfences]
    [project.markdown_extensions.pymdownx.tabbed]
    alternate_style = true
    [project.markdown_extensions.pymdownx.tasklist]
    custom_checkbox = true
    [project.markdown_extensions.tilde]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - abbr
      - admonition
      - attr_list
      - def_list
      - footnotes
      - md_in_html
      - toc:
          permalink: true
      - pymdownx.arithmatex:
          generic: true
      - pymdownx.betterem:
          smart_enable: all
      - pymdownx.caret
      - pymdownx.details
      - pymdownx.emoji:
          emoji_index: !!python/name:material.extensions.emoji.twemoji
          emoji_generator: !!python/name:material.extensions.emoji.to_svg
      - pymdownx.highlight
      - pymdownx.inlinehilite
      - pymdownx.keys
      - pymdownx.mark
      - pymdownx.smartsymbols
      - pymdownx.superfences
      - pymdownx.tabbed:
          alternate_style: true
      - pymdownx.tasklist:
          custom_checkbox: true
      - pymdownx.tilde
    ```

!!! note "Compatibility"

    The default set of extensions activated by Zensical is different from
    MkDocs, which only activates `meta`, `toc`, `tables`, and `fenced_code`
    from Python Markdown itself. If you experience problems building your
    project, turn off the defaults, as shown below.

### Disable the defaults

If you want to reset the behavior to the default behavior of MkDocs, create a
configuration with an empty list of extensions:

=== "`zensical.toml`"

    ``` toml
    [project]
    markdown_extensions = {}
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions: {}
    ```
