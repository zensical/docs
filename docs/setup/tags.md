---
icon: lucide/tags
tags:
  - Setup
  - Information architecture
---

# Tags

Zensical adds first-class support for categorizing pages with tags, which allows
users to discover related pages via [search]. If your documentation is large,
tags can help users find relevant information faster.

## Configuration

Zensical provides a native implementation of the `tags` plugin, adapted from
the configuration and behavior of the Material for MkDocs [tags plugin]. Enable
it in your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags
    ```

The implementation supports the existing plugin configuration, including tag
listings and advanced tag settings. Refer to the original [plugin documentation]
for all available options and listing syntax, and check the [compatibility
entry] for Zensical-specific information.

### Tag icons and identifiers

Each tag can be associated with an icon, which is rendered inside the tag.
Before assigning icons to tags, associate each tag with a unique identifier by
adding the following to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.extra.tags]
    <tag> = "<identifier>"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      tags:
        <tag>: <identifier>
    ```

The identifier can only include alphanumeric characters, as well as dashes and
underscores. For example, if you have a tag `Compatibility`, you can set
`compat` as an identifier:

=== "`zensical.toml`"

    ``` toml
    [project.extra.tags]
    Compatibility = "compat"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      tags:
        Compatibility: compat
    ```

Identifiers can be reused between tags to assign groups of tags the same icon.
Tags that are not explicitly associated with an identifier will use the default
tag icon.

Next, each identifier can be associated with an icon, including a [custom icon],
under the `theme.icon` configuration setting:

=== "`zensical.toml`"

    ``` toml
    [project.theme.icon.tag]
    default = "<icon>"
    <identifier> = "<icon>"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      icon:
        tag:
          default: <icon>
          <identifier>: <icon>
    ```

??? example "Expand to see an example"

    === "`zensical.toml`"

        ``` toml
        [project.theme.icon.tag]
        default = "lucide/hash"
        html = "fontawesome/brands/html5"
        js = "fontawesome/brands/js"
        css = "fontawesome/brands/css3"

        [project.extra.tags]
        HTML5 = "html"
        JavaScript = "js"
        CSS = "css"
        ```

    === "`mkdocs.yml`"

        ``` yaml
        theme:
          icon:
            tag:
              default: lucide/hash
              html: fontawesome/brands/html5
              js: fontawesome/brands/js
              css: fontawesome/brands/css3
        extra:
          tags:
            HTML5: html
            JavaScript: js
            CSS: css
        ```

## Usage

### Add tags

Tags can be added to a document with the front matter `tags` property. They can
also be used in search without any further configuration. Add the following
lines at the top of a Markdown file:

``` yaml
---
tags:
  - HTML5
  - JavaScript
  - CSS
---

# Page title
...
```

The page will now render with those tags at the bottom, and users will be able
to filter by them in search.

### Hide tags on a page

While tags are rendered at the bottom of each page, you can hide them for a
specific page with the front matter `hide` property:

``` yaml
---
hide:
  - tags
---

# Page title
...
```

[compatibility entry]: ../compatibility/mkdocs/plugins.md#tags
[custom icon]: logo-and-icons.md#additional-icons
[plugin documentation]: https://squidfunk.github.io/mkdocs-material/plugins/tags/
[search]: search.md
[tags plugin]: https://squidfunk.github.io/mkdocs-material/plugins/tags/
