---
icon: lucide/box
tags:
  - Modules
---

# GLightbox

This page documents Zensical's native replacement for
[`mkdocs-glightbox`][mkdocs-glightbox], created by [Yi-Wei Liu].

## Objective

### How it works

During Markdown rendering, GLightbox wraps images in links that open the image
in a full-screen lightbox. By default, it processes all images except those
excluded by their CSS classes. You can switch to opt-in behavior with
`auto: false`, mark individual images with `on-glb`, or exclude images with
`off-glb` and other configured CSS classes.

Images can be grouped into galleries with `data-gallery`. Additional image
attributes control the lightbox source, caption, description, dimensions, and
caption position. When `auto_themed` is enabled, light and dark variants can be
grouped into separate galleries.

### When to use it

Use GLightbox when readers may need to inspect screenshots, diagrams, or other
images in more detail than the page layout allows. It is also useful for pages
with related images that readers may want to browse as a gallery while keeping
the inline content compact.

## Configuration

Enable the extension with its default settings:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    zensical.extensions.glightbox = {}
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.glightbox
    ```

The following additional configuration options are supported:

#### `auto`

When `true`, images are wrapped automatically, unless they have the `off-glb` CSS class or additional classes specified with the [`skip_classes`](#skip_classes) option. When `false`, only images with the `on-glb` CSS class are wrapped. The default value is `true`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    zensical.extensions.glightbox.auto = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.glightbox:
          auto: false
    ```

#### `auto_themed`

When set to `true`, images for light and dark modes are grouped into separate galleries. Supports image URLs with `#only-light`/`#only-dark` or `#gh-light-mode-only`/`#gh-dark-mode-only` appended to their URLs (see [light and dark mode images]). The default value is `false`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    zensical.extensions.glightbox.auto_themed = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.glightbox:
          auto_themed: true
    ```

#### `width`

Width of the lightbox overlay (default: `auto`). Accepts CSS units (`px`, `%`, `vw`, `vh`) or `auto`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    zensical.extensions.glightbox.width = "800px"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.glightbox:
          width: "800px"
    ```

#### `height`

Height of the lightbox overlay (default: `auto`). Accepts CSS units (`px`, `%`, `vw`, `vh`) or `auto`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    zensical.extensions.glightbox.height = "600px"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.glightbox:
          height: "600px"
    ```

#### `skip_classes`

List of image CSS classes to exclude from automatic wrapping. The default value is `[]`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    zensical.extensions.glightbox.skip_classes = [
      "extra-class-to-exclude",
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.glightbox:
          skip_classes:
            - extra-class-to-exclude
    ```

#### `auto_caption`

When set to `true`, the image `alt` attribute is used as a caption when no explicit `data-title` attribute is present. To set captions manually, add `data-title` to your images (e.g. `![Alt](image.jpg){ data-title="My Caption" }`), which takes precedence over the `alt` attribute when `auto_caption` is `true`. The default value is `false`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    zensical.extensions.glightbox.auto_caption = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.glightbox:
          auto_caption: true
    ```

#### `caption_position`

Default caption position for images (default: `bottom`). Valid values: `bottom`, `top`, `left`, or `right`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    zensical.extensions.glightbox.caption_position = "right"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.glightbox:
          caption_position: right
    ```

## Adding attributes to images

-   [Attribute Lists] — Enables adding data attributes to images for customizing lightbox behavior:
    - `data-src` — Alternative image source for the lightbox
    - `data-title` — Custom caption text
    - `data-description` — Additional description text
    - `data-caption-position` — Override global caption position
    - `data-gallery` — Manual gallery grouping

[Attribute Lists]: python-markdown.md#attribute-lists
[light and dark mode images]: ../../authoring/images.md#light-and-dark-mode
[mkdocs-glightbox]: https://github.com/blueswen/mkdocs-glightbox
[Yi-Wei Liu]: https://github.com/blueswen
