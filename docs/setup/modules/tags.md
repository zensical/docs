---
icon: lucide/tags
tags:
  - Modules
  - Tags
status: material
---

# Tags

The tags plugin assigns tags to pages and generates tag listings. It replaces
the built-in tags plugin in Material for MkDocs and supports hierarchical tags,
filtered listings, tag references, and listing entries in the table of
contents.

## Objective

### How it works

The plugin reads the `tags` property from each page's metadata and turns its
values into tag references. The property can be set in a page's front matter or
provided by the [meta plugin]. If `tags_name_property` is configured, the
tags plugin reads that property instead. It uses the references to render tags
on the page and to build listings wherever a tags listing directive appears on
a page.

Listings can include pages from the whole documentation site or be limited to
the directory containing the listing. You can also filter pages by tag, exclude
tags, and represent hierarchical tags as nested parent and child nodes.

### When to use it

Use the tags plugin when you want to organize related pages and make them
easier to discover. It works especially well with the [meta plugin], which can
apply tags to every page in a section without repeating them in each page's
front matter:

<div class="grid cards" markdown>

-   :lucide-file-cog: &nbsp; **[Meta plugin][meta plugin]**

    ---

    Apply a tag to every page below a directory, including pages added later,
    so that the section remains consistently categorized.
    This avoids repeating the same tag in every page's front matter.

-   :lucide-search: &nbsp; **Filter search results**

    ---

    Use tags as filters in [site search](../search.md) so readers can narrow
    results by topic or category. Assigning tags to pages enables this
    automatically, without additional search configuration.

</div>

## Configuration

Enable tags with the default settings:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags
    ```

Use `tags` as the plugin name in both configuration formats. For compatibility,
Zensical also accepts `material/tags` as an alias.

### General

#### `enabled`

The plugin is enabled when it is configured. The default value of `enabled` is
`true`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    enabled = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          enabled: true
    ```

Set `enabled` to `false` to disable an instance.

### Multiple instances

You can configure multiple instances of the tags plugin when different parts
of a site need separate source filters, metadata properties, or listing
directives. Add a name after `tags/` to distinguish each instance. Each
instance keeps its settings isolated.

=== "`zensical.toml`"

    ``` toml
    [project.plugins."tags/public"]
    listings_directive = "public/tags"

    [project.plugins."tags/public".filters]
    exclude = ["private/**"]

    [project.plugins."tags/private"]
    listings_directive = "private/tags"
    tags_name_property = "labels"

    [project.plugins."tags/private".filters]
    include = ["private/**"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags/public:
          listings_directive: public/tags
          filters:
            exclude: [private/**]
      - tags/private:
          listings_directive: private/tags
          filters:
            include: [private/**]
          tags_name_property: labels
    ```

Use the configured listing directives in the corresponding sections of your
documentation:

``` html
<!-- public/tags -->
<!-- private/tags -->
```

### Source filters

#### `filters`

Use `filters` to limit which Markdown sources an instance processes. Patterns
are relative to `docs_dir`. `include` admits matching
sources, and `exclude` removes matching sources after inclusion.

=== "`zensical.toml`"

    ``` toml
    [project.plugins."tags/public".filters]
    exclude = ["private/**"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags/public:
          filters:
            exclude:
              - private/**
    ```

If `include` is omitted or empty, all sources are eligible. The `exclude`
patterns are then applied to remove matching sources. A source that an
instance does not accept does not contribute tags or consume listing directives
for that instance.

### Tags

#### `tags`

The `tags` option controls whether the plugin renders tags on pages and exposes
page tag references to the configured `tags_name_variable` template variable.
It defaults to `true`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags: true
    ```

Set `tags` to `false` to keep extracting tags and building listings without
rendering page tags or exposing page tag references.

#### `tags_hierarchy`

Set `tags_hierarchy = true` to treat a separator in a tag name as a hierarchy.
The default separator is `/`.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_hierarchy = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_hierarchy: true
    ```

`Guide/Rust` then has `Guide` as its parent and `Guide/Rust` as its leaf tag.
Each tag keeps its full name, and listings represent hierarchical tags as
nested parent and child nodes.

#### `tags_hierarchy_separator`

Use `tags_hierarchy_separator` to change the default `/` separator:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_hierarchy_separator = "."
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_hierarchy_separator: .
    ```

#### `tags_allowed`

Use `tags_allowed` to reject tag names that are not in a predefined list. This
helps catch spelling errors in page front matter and in metadata files managed
by the [meta plugin]:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_allowed = ["Guide/Rust", "Guide/Python", "Public"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_allowed:
            - Guide/Rust
            - Guide/Python
            - Public
    ```

The comparison is exact. Tag values that are not strings are converted to
their scalar string representation before validation.

#### `tags_slugify`

Tag slugs are used for listing anchors and tag reference URLs. The default
configuration is:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_slugify = "pymdownx:lower"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_slugify: pymdownx:lower
    ```

`tags_slugify_format` must contain the `{slug}` placeholder. The
`tags_slugify_separator` value is passed to the selected strategy. Choose
one of the following strategies.

`pymdownx:lower` is the default strategy. It preserves Unicode characters,
converts text to lowercase, removes unsupported characters, and replaces
spaces with the configured separator.

For compatibility with Material for MkDocs, `pymdownx.slugs.uslugify` is an
alias for this strategy.

`pymdownx:fold` uses [Unicode case folding] instead of lowercasing. Use it when
tag slugs should handle Unicode case variants consistently.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_slugify = "pymdownx:fold"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_slugify: pymdownx:fold
    ```

`markdown:slugify` follows Python Markdown's ASCII-oriented slug behavior. It
is useful when compatibility with Python Markdown is important.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_slugify = "markdown:slugify"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_slugify: markdown:slugify
    ```

#### `tags_slugify_separator`

Use this option to replace spaces in a slug with a different separator:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_slugify_separator = "_"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_slugify_separator: _
    ```

#### `tags_slugify_format`

Use this option to change the format of a tag slug. The default format is
`tag:{slug}`. The value must contain the `{slug}` placeholder:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_slugify_format = "tag:{slug}"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_slugify_format: "tag:{slug}"
    ```

#### `tags_sort_by`

Use `tags_sort_by` to control the order of page tags. The default strategy is
`tag_name`, and the other supported strategy is `tag_name_casefold`.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_sort_by = "tag_name_casefold"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_sort_by: tag_name_casefold
    ```

#### `tags_sort_reverse`

Use `tags_sort_reverse` to reverse the order of page tags. Its default value is
`false`.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_sort_reverse = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_sort_reverse: true
    ```

#### `tags_name_property`

The default metadata property is `tags`. Set `tags_name_property` when pages
use another property for their tags:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_name_property = "labels"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_name_property: labels
    ```

#### `tags_name_variable`

The default template variable is `tags`. Set `tags_name_variable` to change the
variable name used for page tag references in templates:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    tags_name_variable = "labels"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          tags_name_variable: labels
    ```

### Listings

#### `listings`

The `listings` option controls whether listing directives are processed. It
defaults to `true`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    listings = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings: true
    ```

Set `listings` to `false` to keep extracting page tags without rendering
listings.

#### `listings_directive`

The default value of `listings_directive` is `material/tags`. Use this option to
change the name of the directive that the plugin processes.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    listings_directive = "material/tags"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_directive: material/tags
    ```

#### `listings_map`

Use `listings_map` to define reusable listing configurations. The available
per-listing options are documented under [Listing configuration](#listing-configuration).

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags.listings_map.cards]
    include = ["Public"]
    layout = "cards"
    toc = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_map:
            cards:
              include: [Public]
              layout: cards
              toc: false
    ```

#### `listings_sort_by`

Use `listings_sort_by` to control the order of pages in listings. The default
strategy is `item_title`; `item_url` is also supported.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    listings_sort_by = "item_url"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_sort_by: item_url
    ```

#### `listings_sort_reverse`

Use `listings_sort_reverse` to reverse the order of pages in listings. Its
default value is `false`.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    listings_sort_reverse = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_sort_reverse: true
    ```

#### `listings_tags_sort_by`

Use `listings_tags_sort_by` to control the order of tags in listings. The
default strategy is `tag_name`; `tag_name_casefold` is also supported.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    listings_tags_sort_by = "tag_name_casefold"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_tags_sort_by: tag_name_casefold
    ```

#### `listings_tags_sort_reverse`

Use `listings_tags_sort_reverse` to reverse the order of tags in listings. Its
default value is `false`.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    listings_tags_sort_reverse = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_tags_sort_reverse: true
    ```

#### `listings_layout`

Use `listings_layout` to choose the default layout for listings. The default
uses the built-in listing and tag fragments. The setting accepts a layout name
rather than a fixed list of values. To use a custom name, make the
corresponding `listing.html` and `tag.html` fragments available in
`fragments/tags/<name>/` in your [overrides directory] or [custom theme]. A
listing can override this global setting with its `layout` option.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    listings_layout = "default"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_layout: default
    ```

#### `listings_toc`

Use `listings_toc` to control whether listing tag nodes are added to the table
of contents. The default is `true`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    listings_toc = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_toc: true
    ```

### Shadow tags

Shadow tags are useful for tags that should be available in deploy previews but
not in a normal build. For example, you can mark work-in-progress pages with a
`Draft` tag and hide that tag from production listings while showing it during
`serve`. Shadow tags do not exclude the tagged pages from the site; they control
how the tags are rendered and included in listings.

#### `shadow`

Set `shadow` to `true` to include shadow tags in listings. The default is
`false` for builds and `true` for `serve`.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    shadow = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          shadow: true
    ```

#### `shadow_on_serve`

Use `shadow_on_serve` to change the `serve` default. Its default value is
`true`.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    shadow_on_serve = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          shadow_on_serve: false
    ```

The two settings interact as follows. This table describes the global plugin
settings; a listing can override the resulting value with its own [`shadow`
option](#listing-configuration).

| `shadow` | `shadow_on_serve` | Build | Serve |
| --- | --- | --- | --- |
| `false` | `false` | Hidden | Hidden |
| `false` | `true` | Hidden | Shown |
| `true` | `false` | Shown | Shown |
| `true` | `true` | Shown | Shown |

When hierarchical tags are enabled, a shadowed parent also hides its child tags.

#### `shadow_tags`

Define shadow tags by exact name:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    shadow_tags = ["Draft", "Internal"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          shadow_tags: [Draft, Internal]
    ```

#### `shadow_tags_prefix`

Use `shadow_tags_prefix` to mark tags with a matching prefix as shadow tags:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    shadow_tags_prefix = "_"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          shadow_tags_prefix: "_"
    ```

#### `shadow_tags_suffix`

Use `shadow_tags_suffix` to mark tags with a matching suffix as shadow tags:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags]
    shadow_tags_suffix = "Internal"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          shadow_tags_suffix: Internal
    ```

## Usage

To assign tags to a page, add a `tags` list to its front matter:

``` yaml
---
tags:
  - Guide/Rust
  - Public
---
```

With the default configuration, the plugin reads tags from the `tags` property,
renders them at the bottom of each page, makes them available to [tag
listings](#tag-listings), and uses them to filter search results. No additional
configuration is required.

### Hide tags

To hide tags on an individual page, add `tags` to the page's [hide property]:

``` yaml
---
hide:
  - tags
---
```

### Tag icons and identifiers

To assign an icon to a tag, associate it with an identifier by adding the
following to your configuration:

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

The identifier can only include alphanumeric characters, dashes, and
underscores. For example, associate the `Compatibility` tag with the
`compat` identifier:

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
Tags without an explicitly associated identifier use the default tag icon.

Associate each identifier with an icon, including a [custom icon], by adding
the following to the `theme.icon.tag` configuration setting:

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

For example:

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

### Tag listings

A tag listing is a generated list of tags and the pages associated with them.
For example, a page tagged `Public` appears under the `Public` entry in a tag
listing. Listings are inserted where a listing directive appears and can be
filtered or customized as described below.

The following is a tag listing generated from the tags defined in this
documentation. It selects the pages tagged `Plugins`:

``` html
<!-- material/tags { include: [Plugins] } -->
```

<div class="result mdx-columns" markdown>

<!-- material/tags { include: [Plugins] } -->

</div>

#### Add a listing

Insert the default `material/tags` HTML comment where the listing should
appear:

``` html
<!-- material/tags -->
```

The listing can appear on any page. It selects matching pages from the whole
documentation by default. A page is not included in its own listing.

### Listing configuration

Inline listing configuration is written as YAML in the comment. The following
settings control which pages and tags a listing includes and how it is
rendered.

#### `scope`

Set `scope` to `true` to include only pages below the directory containing the
listing:

``` html
<!-- material/tags { scope: true } -->
```

#### `include`

Use `include` to select pages with the named tags. An empty value includes all
tags and pages:

``` html
<!-- material/tags { include: [Public] } -->
```

#### `exclude`

Use `exclude` to omit a page when one of its tags or tag parents matches a
named tag:

``` html
<!-- material/tags { exclude: [Internal] } -->
```

#### `shadow`

Use `shadow` to override the global [`shadow`](#shadow) setting for this
listing:

``` html
<!-- material/tags { shadow: false } -->
```

#### `toc`

Use `toc` to override the global [`listings_toc`](#listings_toc) setting for
this listing:

``` html
<!-- material/tags { toc: false } -->
```

#### `layout`

Use `layout` to override the global [`listings_layout`](#listings_layout)
setting for this listing:

``` html
<!-- material/tags { layout: cards } -->
```

#### Reuse listing configurations

Define named configurations in `listings_map`, then refer to one by name in
the directive:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.tags.listings_map.cards]
    include = ["Public"]
    layout = "cards"
    toc = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - tags:
          listings_map:
            cards:
              include:
                - Public
              layout: cards
              toc: false
    ```

Use the name after the directive:

``` html
<!-- material/tags cards -->
```

Named configurations support `scope`, `shadow`, `layout`, `toc`, `include`,
and `exclude`. Inline settings can also override the selected listing
configuration.

[custom icon]: ../logo-and-icons.md#additional-icons
[hide property]: ../../authoring/frontmatter.md#hide-page-elements
[meta plugin]: meta.md
[custom theme]: ../../customization.md#packaging-themes
[overrides directory]: ../../customization.md#configuring-overrides
[Unicode case folding]: https://www.unicode.org/faq/casemap_charprop.html
