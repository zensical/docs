---
icon: lucide/tags
tags:
  - Setup
  - Information architecture
---

# Tags

Zensical adds first-class support for categorizing pages with tags, which allows
users to discover related pages via the [search]. If your documentation is
large, tags can help to discover relevant information faster.

## Configuration

The built-in tags functionality lets you categorize any page with tags
as part of the [metadata] of the page. Tags are supported by default, no
configuration needed.

!!! info "Tag listings are currently not supported"

    As we are working towards [feature parity] with Material for MkDocs, we
    will be adding features such as tag indexes that are implemented as part of
    the tags plugin in Material for MkDocs.

### Tag icons and identifiers

Each tag can be associated with an icon, which is rendered inside the tag.
Before assigning icons to tags, associate each tag with a unique identifier,
by adding the following to your configuration:

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

The identifier can only include alphanumeric characters, as well as dashes
and underscores. For example, if you have a tag `Compatibility`, you can
set `compat` as an identifier:

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

Next, each identifier can be associated with an icon, even a [custom icon], by
adding the following lines to you configuration under the `theme.icon` configuration
setting:

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
        CSS = "cs"
        ```

    === "`mkdocs.yml`"

        ``` yaml
        theme:
          icon:
            tag:
              default: lucide/hash
              html: fontawesome/brands/html5
              js: fontawesome/brands/js
              css:  fontawesome/brands/css3
        extra:
          tags:
            HTML5: html
            JavaScript: js
            CSS: css
        ```

## Usage

### Add tags

Tags can be added for a document with the front matter `tags` property. They can
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

The page will now render with those tags at the bottom of the page and your
users will be able to filter by these tags in the search.

### Hide tags on a page

While the tags are rendered at the bottom of each page, sometimes, it might be
desirable to hide them for a specific page, which can be achieved with the
front matter `hide` property:

``` yaml
---
hide:
  - tags
---

# Page title
...
```

[custom icon]: logo-and-icons.md#additional-icons
[feature parity]: https://zensical.org/compatibility/features
[metadata]: ../authoring/frontmatter.md
[search]: search.md
