---
icon: lucide/grid-2x2-plus
tags:
  - Authoring
---

# Grids

Zensical supports arranging sections into grids, grouping blocks that convey
similar meaning or are of equal importance. Grids are just perfect for building
index pages that show a brief overview of a large section of your documentation.

## Configuration

This configuration enables the use of grids, allowing to bring blocks of
identical or different types into a rectangular shape. Add the following lines
to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    attr_list = {}
    md_in_html = {}
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - attr_list
      - md_in_html
    ```

!!! note "Icons and Emojis"

    Note that some of the examples listed below use [icons and emojis], which
    have to be [configured separately].

See additional configuration options:

- [Attribute Lists]
- [Markdown in HTML]

## Usage

Grids come in two flavors: [card grids], which wrap each element in a card that
levitates on hover, and [generic grids], which allow to arrange arbitrary block
elements in a rectangular shape.

### Use card grids

Card grids wrap each grid item with a beautiful hover card that levitates on
hover. They come in two slightly different syntaxes: [list] and [block syntax],
adding support for distinct use cases.

#### List syntax

The list syntax is essentially a shortcut for [card grids], and consists of an
unordered (or ordered) list wrapped by a `div` with both the `grid` and `cards`
classes:

``` html title="Card grid"
<div class="grid cards" markdown>

- :fontawesome-brands-html5: __HTML__ for content and structure
- :fontawesome-brands-js: __JavaScript__ for interactivity
- :fontawesome-brands-css3: __CSS__ for text running out of boxes
- :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>
```

<div class="result" markdown>

  <div class="grid cards" markdown>

- :fontawesome-brands-html5: **HTML** for content and structure
- :fontawesome-brands-js: **JavaScript** for interactivity
- :fontawesome-brands-css3: **CSS** for text running out of boxes
- :fontawesome-brands-internet-explorer: **Internet Explorer** ... huh?

  </div>

</div>

List elements can contain arbitrary Markdown, as long as the surrounding `div`
defines the `markdown` attribute. Following is a more complex example, which
includes icons and links:

``` html title="Card grid, complex example"
<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } __Set up in 5 minutes__

    ---

    Install [`zensical`](#) with [`pip`](#) and get up
    and running in minutes

    [:octicons-arrow-right-24: Getting started](#)

-   :fontawesome-brands-markdown:{ .lg .middle } __It's just Markdown__

    ---

    Focus on your content and generate a responsive and searchable static site

    [:octicons-arrow-right-24: Reference](#)

-   :material-format-font:{ .lg .middle } __Made to measure__

    ---

    Change the colors, fonts, language, icons, logo and more with a few lines

    [:octicons-arrow-right-24: Customization](#)

-   :material-scale-balance:{ .lg .middle } __Open Source, MIT__

    ---

    Zensical is licensed under MIT and available on [GitHub]

    [:octicons-arrow-right-24: License](#)

</div>
```

<div class="result" markdown>

  <div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } **Set up in 5 minutes**

    ---

    Install [`zensical`][zensical] with [`pip`][pip] and get up
    and running in minutes

    [:octicons-arrow-right-24: Getting started][getting started]

-   :fontawesome-brands-markdown:{ .lg .middle } **It's just Markdown**

    ---

    Focus on your content and generate a responsive and searchable static site

    [:octicons-arrow-right-24: Authoring][authoring]

-   :material-format-font:{ .lg .middle } **Made to measure**

    ---

    Change the colors, fonts, language, icons, logo, and more with a few lines

    [:octicons-arrow-right-24: Customization][customization]

-   :material-scale-balance:{ .lg .middle } **Open Source, MIT**

    ---

    Zensical is licensed under MIT and available on [GitHub]

    [:octicons-arrow-right-24: License][license]

  </div>

</div>

If there's insufficient space to render grid items next to each other, the items
will stretch to the full width of the viewport, e.g. on mobile viewports. If
there's more space available, grids will render in items of 3 and more, e.g.
when [hiding both sidebars].

#### Block syntax

The block syntax allows for arranging cards in grids **together with other
elements**, as explained in the section on [generic grids]. Just add the `card`
class to any block element inside a `grid`:

``` html title="Card grid, blocks"
<div class="grid" markdown>

:fontawesome-brands-html5: __HTML__ for content and structure
{ .card }

:fontawesome-brands-js: __JavaScript__ for interactivity
{ .card }

:fontawesome-brands-css3: __CSS__ for text running out of boxes
{ .card }

> :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>
```

<div class="result" markdown>

  <div class="grid" markdown>

:fontawesome-brands-html5: **HTML** for content and structure
{ .card }

:fontawesome-brands-js: **JavaScript** for interactivity
{ .card }

:fontawesome-brands-css3: **CSS** for text running out of boxes
{ .card }

> :fontawesome-brands-internet-explorer: **Internet Explorer** ... huh?

  </div>

</div>

While this syntax may seem unnecessarily verbose at first, the previous example
shows how card grids can now be mixed with other elements that will also stretch
to the grid.

### Use generic grids

Generic grids allow for arranging arbitrary block elements in a grid, including
[admonitions], [code blocks], [content tabs] and more. Just wrap a set of blocks
by using a `div` with the `grid` class:

```` html title="Generic grid"
<div class="grid" markdown>

=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

``` title="Content tabs"
=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci
```

</div>
````

<div class="result" markdown>

  <div class="grid" markdown>

=== "Unordered list"

    - Sed sagittis eleifend rutrum
    - Donec vitae suscipit est
    - Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

``` title="Content tabs"
=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci
```

  </div>

</div>

[admonitions]: admonitions.md
[Attribute Lists]: ../compatibility/markdown/python-markdown.md#attribute-lists
[authoring]: markdown.md
[block syntax]: #block-syntax
[card grids]: #use-card-grids
[code blocks]: code-blocks.md
[configured separately]: icons-emojis.md#configuration
[content tabs]: content-tabs.md
[customization]: ../customization.md
[generic grids]: #use-generic-grids
[getting started]: ../get-started.md
[GitHub]: https://github.com/zensical/zensical
[hiding both sidebars]: ../setup/navigation.md#hide-the-sidebars
[icons and emojis]: icons-emojis.md
[license]: ../license.md
[list]: #list-syntax
[Markdown in HTML]: ../compatibility/markdown/python-markdown.md#markdown-in-html
[pip]: ../get-started.md#install-with-pip
[zensical]: https://zensical.org
