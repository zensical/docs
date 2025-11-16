---
icon: lucide/package
---

# Python Markdown

Zensical supports a large number of [Python Markdown] extensions, which is part
of what makes it so attractive for technical writing. Following is a list of all
supported extensions, linking to the relevant sections of the authoring guide for
which features they need to be enabled.

  [Python Markdown]: https://python-markdown.github.io/

!!! tip "Defaults"
    Zensical has [sensible defaults] for the Markdown extensions settings. Make
    sure to check these out before you begin to configure things manually.

[sensible defaults]: index.md#default-configuration

## Supported extensions

### Abbreviations

The [Abbreviations] extension adds the ability to add a small tooltip to an
element, by wrapping it with an `abbr` tag. Only plain text (no markup) is
supported. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.abbr]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - abbr
    ```

No configuration options are available. See the following authoring guides for
usage:

- [Adding abbreviations]
- [Adding a glossary]

  [Abbreviations]: https://python-markdown.github.io/extensions/abbreviations/
  [Adding abbreviations]: ../../authoring/tooltips.md#add-abbreviations
  [Adding a glossary]: ../../authoring/tooltips.md#add-a-glossary

### Admonition

The [Admonition] extension adds support for admonitions, more commonly known as
_call-outs_, which can be defined in Markdown by using a simple syntax. Enable
it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.admonition]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - admonition
    ```

No configuration options are available. See the following authoring guides for
usage:

- [Adding admonitions]
- [Changing the title]
- [Removing the title]
- [Supported types]

  [Admonition]: https://python-markdown.github.io/extensions/admonition/
  [Adding admonitions]: ../../authoring/admonitions.md#usage
  [Changing the title]: ../../authoring/admonitions.md#change-the-title
  [Removing the title]: ../../authoring/admonitions.md#remove-the-title
  [Supported types]: ../../authoring/admonitions.md#supported-types

### Attribute Lists

The [Attribute Lists] extension allows to add HTML attributes and CSS classes
to [almost every][Attribute Lists limitations] Markdown inline- and block-level
element with a special syntax. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.attr_list]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - attr_list
    ```

No configuration options are available. See the following authoring guides for
usage:

- [Using grids]
- [Adding buttons]
- [Adding tooltips]
- [Using icons with colors]
- [Using icons with animations]
- [Image alignment]
- [Image lazy-loading]

  [Attribute Lists]: https://python-markdown.github.io/extensions/attr_list/
  [Attribute Lists limitations]: https://python-markdown.github.io/extensions/attr_list/#limitations
  [Using grids]: ../../authoring/grids.md#usage
  [Adding buttons]: ../../authoring/buttons.md#add-a-button
  [Adding tooltips]: ../../authoring/tooltips.md#add-a-tooltip
  [Using icons with colors]: ../../authoring/icons-emojis.md#with-colors
  [Using icons with animations]: ../../authoring/icons-emojis.md#with-animations
  [Image alignment]: ../../authoring/images.md#image-alignment
  [Image lazy-loading]: ../../authoring/images.md#image-lazy-loading

### Definition Lists

The [Definition Lists] extension adds the ability to add definition lists (more
commonly known as [description lists] – `dl` in HTML) via Markdown to a
document. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.def_list]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - def_list
    ```

No configuration options are available. See the following authoring guides for
usage:

- [Using definition lists]

  [Using definition lists]: https://python-markdown.github.io/extensions/definition_lists/
  [description lists]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
  [Using definition lists]: ../../authoring/lists.md#use-definition-lists

### Footnotes

The [Footnotes] extension allows to define inline footnotes, which are then
rendered below all Markdown content of a document. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.footnotes]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - footnotes
    ```

No configuration options are supported. See the following authoring guides for
usage:

- [Adding footnote references]
- [Adding footnote content]

  [Footnotes]: https://python-markdown.github.io/extensions/footnotes/
  [Adding footnote references]: ../../authoring/footnotes.md#adding-footnote-references
  [Adding footnote content]: ../../authoring/footnotes.md#add-footnote-content

### Markdown in HTML

The [Markdown in HTML] extension allows for writing Markdown inside of HTML,
which is useful for wrapping Markdown content with custom elements. Enable it
via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.md_in_html]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - md_in_html
    ```

> By default, Markdown ignores any content within a raw HTML block-level
> element. With the `md_in_html` extension enabled, the content of a raw HTML
> block-level element can be parsed as Markdown by including a `markdown`
> attribute on the opening tag. The `markdown` attribute will be stripped from
> the output, while all other attributes will be preserved.

No configuration options are available. See these examples for how `md_in_html`
can be used:

- [Using grids]
- [Image captions]

  [Markdown in HTML]: https://python-markdown.github.io/extensions/md_in_html/
  [Using grids]: ../../authoring/grids.md#usage
  [Image captions]: ../../authoring/images.md#image-captions

### Table of Contents

The [Table of Contents] extension automatically generates a table of contents
from a document, which Zensical will render as part of the resulting
page. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.toc]
    permalink =  true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - toc:
          permalink: true
    ```

The following configuration options are supported:

#### `toc.title`

This option sets the title of the table of contents in the right navigation
sidebar, which is normally automatically sourced from the translations for
the [site language]. Set the title explicitly via::

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.toc]
    title = "On this page"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - toc:
          title: On this page
    ```

#### `toc.permalink`

This option adds an anchor link containing the paragraph symbol `¶` or
another custom symbol at the end of each headline, exactly like on the page
you're currently viewing. The symbol is hidden by default to keep the page
free from clutter but Zensical will make it appear on hover.

If you do not like the default symbol `¶`, you can configure another symbol
or string like so:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.toc]
    permalink = "⚓︎"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - toc:
          permalink: ⚓︎
    ```

#### `toc.permalink_title`
This option sets the title of the anchor link which is shown on hover and
read by screen readers.  For accessibility reasons, it might be beneficial to
change it to a more discernable name, stating that the anchor links to the
section itself:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.toc]
    permalink_title = "Anchor link to this section"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - toc:
          permalink_title: Anchor link to this section
    ```

#### `toc.slugify`
This option allows for customization of the slug function. For some
languages, the default may not produce good and readable identifiers –
consider using another slug function like for example [those from
Python Markdown Extensions][Slugs]:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.toc.slugify]
    function = "pymdownx.slugs.slugify"
    kwds = { case = "lower" }
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - toc:
          slugify: !!python/object/apply:pymdownx.slugs.slugify
            kwds:
              case: lower
    ```

#### `toc.toc_depth`
Define the range of levels to be included in the table of contents (default:
6). This may be useful for project documentation with deeply structured
headings to decrease the length of the table of contents:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.toc]
    toc_depth = 3
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - toc:
          toc_depth: 3
    ```

To remove the table of contents altogether:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.toc]
    toc_depth = 0
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - toc:
          toc_depth: 0
    ```

!!! warn "Other options"
    The other configuration options of this extension are not officially
    supported by Zensical, which is why they may yield unexpected results.
    Use them at your own risk.

  [Table of Contents]: https://python-markdown.github.io/extensions/toc/
  [site language]: ../language.md#site-language
  [Slugs]: https://facelessuser.github.io/pymdown-extensions/extras/slugs/

### Tables

The [Tables] extension adds the ability to create tables in Markdown by using a
simple syntax. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.tables]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - tables
    ```

No configuration options are available. See the following authoring guides for
usage:

- [Using data tables]
- [Column alignment]

  [Tables]: https://python-markdown.github.io/extensions/tables/
  [Using data tables]: ../../authoring/data-tables.md#usage
  [Column alignment]: ../../authoring/data-tables.md#column-alignment

