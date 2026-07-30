---
icon: lucide/type
tags:
  - Setup
  - Customization
---

# Fonts

Zensical makes it easy to change the typeface of your project documentation,
since it directly integrates with [Google Fonts]. Alternatively, fonts can be
custom-loaded if self-hosting is preferred for data privacy reasons or if
another destination should be used.

## Configuration

### Regular font

The regular font is used for all body copy, headlines, and essentially
everything that does not need to be monospaced. It can be set to any
valid [Google Font][Google Fonts] via your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    font.text = "Inter"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      font:
        text: Inter
    ```

### Monospaced font

The _monospaced font_ is used for code blocks and can be configured separately.
Just like the regular font, it can be set to any valid [Google Font]
[Google Fonts] via your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    font.code = "JetBrains Mono"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      font:
        code: JetBrains Mono
    ```

### Autoloading

If you want to prevent typefaces from being loaded from [Google Fonts], e.g.
to adhere to [data privacy] regulations, and fall back to system fonts, add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    font = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      font: false
    ```

## Customization

### Additional fonts

If you want to load an (additional) font from another destination or override
the system font, you can use an [additional style sheet] to add the
corresponding `@font-face` definition:

=== "`docs/stylesheets/extra.css`"

    ``` css
    @font-face {
      font-family: "<font>";
      src: "...";
    }
    ```

=== "`zensical.toml`"

    ``` toml
    [project]
    extra_css = ["stylesheets/extra.css"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

The font can then be applied to specific elements, e.g. only headlines, or
globally to be used as the site-wide regular or monospaced font:

=== "Regular font"

    ``` css
    :root {
      --md-text-font: "<font>"; /* (1)! */
    }
    ```

    1. Always define fonts through CSS variables and not `font-family`, as
       this would disable the system font fallback.

=== "Monospaced font"

    ``` css
    :root {
      --md-code-font: "<font>";
    }
    ```

[additional style sheet]: ../customization.md#additional-css
[data privacy]: https://developers.google.com/fonts/faq/privacy
[Google Fonts]: https://fonts.google.com
