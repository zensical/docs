---
icon: lucide/triangle-alert
tags:
  - Authoring
---

# Admonitions

Admonitions, also known as _call-outs_, are an excellent choice for including
side content without significantly interrupting the document flow. Zensical
provides several different types of admonitions and allows for the inclusion and nesting of arbitrary content.

## Configuration

This configuration enables admonitions, allows to make them collapsible and to
nest arbitrary content inside admonitions. Add the following lines to your
configuration:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    admonition = {}
    pymdownx.details = {}
    pymdownx.superfences = {}
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - admonition
      - pymdownx.details
      - pymdownx.superfences
    ```

See additional configuration options:

- [Admonition]
- [Details]
- [SuperFences]

### Admonition icons

Each of the supported admonition types has a distinct icon, which can be changed
to any icon bundled with the theme, or even a [custom icon]. Add the following
lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme.icon.admonition]
    <type> = "<icon>"
    ```

    ??? example "Expand to show alternate icon sets"

        === ":octicons-mark-github-16: Octicons"

            ``` toml
            [project.theme.icon.admonition]
            note = "octicons/tag-16"
            abstract = "octicons/checklist-16"
            info = "octicons/info-16"
            tip = "octicons/squirrel-16"
            success = "octicons/check-16"
            question = "octicons/question-16"
            warning = "octicons/alert-16"
            failure = "octicons/x-circle-16"
            danger = "octicons/zap-16"
            bug = "octicons/bug-16"
            example = "octicons/beaker-16"
            quote = "octicons/quote-16"
            ```

        === ":fontawesome-brands-font-awesome: FontAwesome"

            ``` toml
            [project.theme.icon.admonition]
            note = "fontawesome/solid/note-sticky"
            abstract = "fontawesome/solid/book"
            info = "fontawesome/solid/circle-info"
            tip = "fontawesome/solid/bullhorn"
            success = "fontawesome/solid/check"
            question = "fontawesome/solid/circle-question"
            warning = "fontawesome/solid/triangle-exclamation"
            failure = "fontawesome/solid/bomb"
            danger = "fontawesome/solid/skull"
            bug = "fontawesome/solid/robot"
            example = "fontawesome/solid/flask"
            quote = "fontawesome/solid/quote-left"
            ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      icon:
        admonition:
          <type>: <icon>
    ```

    ??? example "Expand to show alternate icon sets"

        === ":octicons-mark-github-16: Octicons"

            ``` yaml
            theme:
              icon:
                admonition:
                  note: octicons/tag-16
                  abstract: octicons/checklist-16
                  info: octicons/info-16
                  tip: octicons/squirrel-16
                  success: octicons/check-16
                  question: octicons/question-16
                  warning: octicons/alert-16
                  failure: octicons/x-circle-16
                  danger: octicons/zap-16
                  bug: octicons/bug-16
                  example: octicons/beaker-16
                  quote: octicons/quote-16
            ```

        === ":fontawesome-brands-font-awesome: FontAwesome"

            ``` yaml
            theme:
              icon:
                admonition:
                  note: fontawesome/solid/note-sticky
                  abstract: fontawesome/solid/book
                  info: fontawesome/solid/circle-info
                  tip: fontawesome/solid/bullhorn
                  success: fontawesome/solid/check
                  question: fontawesome/solid/circle-question
                  warning: fontawesome/solid/triangle-exclamation
                  failure: fontawesome/solid/bomb
                  danger: fontawesome/solid/skull
                  bug: fontawesome/solid/robot
                  example: fontawesome/solid/flask
                  quote: fontawesome/solid/quote-left
            ```

## Usage

Admonitions follow a simple syntax: a block starts with `!!!`, followed by a
single keyword used as a [type qualifier]. The content of the block follows on
the next line, indented by four spaces:

``` markdown title="Admonition"
!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

### Change the title

By default, the title will equal the type qualifier in titlecase. However, it
can be changed by adding a quoted string containing valid Markdown (including
links, formatting, ...) after the type qualifier:

``` markdown title="Admonition with custom title"
!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

### Nested admonitions

You can also include nested admonitions in your documentation. To do this, you
can use your existing admonitions and indent the desired ones:

``` markdown title="Nested Admonition"
!!! note "Outer Note"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

    !!! note "Inner Note"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! note "Outer Note"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

    !!! note "Inner Note"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

</div>

### Remove the title

Similar to [changing the title], the icon and title can be omitted entirely by
adding an empty string directly after the type qualifier. Note that this will
not work for [collapsible blocks]:

``` markdown title="Admonition without title"
!!! note ""

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! note ""

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

### Collapsible blocks

When [Details] is enabled and an admonition block is started with `???` instead
of `!!!`, the admonition is rendered as an expandable block with a small toggle
on the right side:

``` markdown title="Admonition, collapsible"
??? note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

??? note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

Adding a `+` after the `???` token renders the block expanded:

``` markdown title="Admonition, collapsible and initially expanded"
???+ note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

???+ note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

### Inline blocks

Admonitions can also be rendered as inline blocks (e.g., for sidebars), placing
them to the right using the `inline` + `end` modifiers, or to the left using
only the `inline` modifier:

=== ":octicons-arrow-right-16: inline end"

    !!! info inline end "Lorem ipsum"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

    ``` markdown
    !!! info inline end "Lorem ipsum"

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.
    ```

    Use `inline end` to align to the right (left for rtl languages).

=== ":octicons-arrow-left-16: inline"

    !!! info inline "Lorem ipsum"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

    ``` markdown
    !!! info inline "Lorem ipsum"

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.
    ```

    Use `inline` to align to the left (right for rtl languages).

**Important**: admonitions that use the `inline` modifiers _must_ be declared
prior to the content block you want to place them beside. If there's
insufficient space to render the admonition next to the block, the admonition
will stretch to the full width of the viewport, e.g., on mobile viewports.

### Supported types

The following admonition types are available in Zensical. The default is `note`.

`note`
:   !!! note

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`abstract`
:   !!! abstract

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`info`
:   !!! info

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`tip`
:   !!! tip

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`success`
:   !!! success

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`question`
:   !!! question

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`warning`
:   !!! warning

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`failure`
:   !!! failure

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`danger`
:   !!! danger

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`bug`
:   !!! bug

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`example`
:   !!! example

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`quote`
:   !!! quote

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

## GitHub callouts

In addition to the [admonition syntax], [GitHub callouts], also known as
_alerts_, can be used. They are defined as blockquotes with a special marker.
This syntax is portable to GitHub, GitLab, and other tools that recognize it.

### Configuration

GitHub callouts are enabled with the [Quotes] extension, which is bundled with
[Python Markdown Extensions]. The `callouts` option must be turned on in the
configuration:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.quotes]
    callouts = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.quotes:
          callouts: true
    ```

### Usage

A callout is started with a blockquote marker `>` followed by `[!<type>]`. The
content of the callout follows on subsequent lines, each prefixed with `>`:

``` markdown title="GitHub callout"
> [!NOTE]
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
> nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
> massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

The callout marker must be all uppercase. Lowercase markers, e.g. `[!note]`,
are not recognized by GitHub, so they are not rendered as callouts there.

### Supported callout types

Five callout types are supported by GitHub. A direct mapping exists to the
admonition types listed in the [supported types] section for three of them:

`[!NOTE]`
: `note`

`[!TIP]`
: `tip`

`[!WARNING]`
: `warning`

`[!IMPORTANT]`
: `important` – not a built-in admonition type, so the default admonition
  styling is used unless a [custom style] is added.

`[!CAUTION]`
: `caution` – not a built-in admonition type, so the default admonition
  styling is used unless a [custom style] is added.

With the [Quotes] extension, any admonition type supported by Zensical can be
used, not only these five.

Callouts are not part of the [GitHub Flavored Markdown specification][GFM], so
they are not supported by all GitHub Flavored Markdown parsers.

[Admonition]: ../compatibility/markdown/python-markdown.md#admonition
[admonition syntax]: #usage
[changing the title]: #change-the-title
[collapsible blocks]: #collapsible-blocks
[custom icon]: ../setup/logo-and-icons.md#additional-icons
[custom style]: ../customization.md#additional-css
[Details]: ../compatibility/markdown/python-markdown-extensions.md#details
[GFM]: https://github.github.com/gfm/
[GitHub callouts]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
[Python Markdown Extensions]: ../compatibility/markdown/python-markdown-extensions.md
[Quotes]: https://facelessuser.github.io/pymdown-extensions/extensions/quotes/
[SuperFences]: ../compatibility/markdown/python-markdown-extensions.md#superfences
[supported types]: #supported-types
[type qualifier]: #supported-types
