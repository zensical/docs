---
icon: lucide/search
tags:
  - Setup
  - Search
---

# Search

Zensical offers seamless client-side search functionality, eliminating the need
to integrate third-party services that may not comply with privacy regulations.
Additionally, the search works [offline], enabling you to distribute
documentation as a download.

!!! info "We're interested in your feedback"

    Zensical ships a completely new search engine that we've written from
    scratch and we're eager to hear your feedback! We're continuously working
    on it, and will release it as a [standalone Open Source project] in 2026.

!!! warning "Search is currently only available in English"

    At the moment, the search interface is not localized, since it's an entirely
    new implementation. Thus, it does not make sense for us to carry over the
    search localization from Material for MkDocs, as it's tightly coupled to
    the old search implementation, and we're still changing too much.

    This does not impact multi-lingual search.

## Configuration

The built-in search module is seamlessly integrated with Zensical, adding
multilingual client-side search. It is enabled by default, so no additional
configuration is needed.

Zensical doesn't load the search implementation provided by MkDocs or Material
for MkDocs. Existing `search` and `material/search` plugin entries both
configure Zensical's built-in module.

The following plugin settings are available:

`config.enabled`
: Use this setting to enable or disable search when building your project.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.search]
    enabled = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - search:
          enabled: false
    ```

`config.separator`
: Set the JavaScript regular expression used to split text into search terms.

### Search language

The search language is derived from the configured [site language]. Set
`theme.language` instead of the MkDocs search plugin's `lang` option:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    language = "en"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      language: en
    ```

Options specific to the MkDocs and Material for MkDocs search implementations
aren't supported. In particular, Material for MkDocs' `pipeline` option has no
equivalent, because Zensical's search engine doesn't use the Lunr pipeline. See
the [MkDocs plugin compatibility entry] for the complete compatibility notes.

### Search highlighting

When search highlighting is enabled and a user clicks on a search result,
Zensical will highlight all occurrences after following the link.
Add the following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
      "search.highlight",
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - search.highlight
    ```

## Usage

### Search exclusion

#### Exclude a page

Pages can be excluded from search with the front matter `search.exclude`
property, removing them from the index. Add the following lines at the top of a
Markdown file:

``` yaml
---
search:
  exclude: true
---

# Page title
...
```

#### Exclude a section

When [Attribute Lists] is enabled, specific sections of pages can be excluded
from search by adding the `data-search-exclude` pragma after a Markdown
heading:

``` markdown
# Page title

## Section 1

The content of this section is included

## Section 2 { data-search-exclude }

The content of this section is excluded
```

#### Exclude a block

When [Attribute Lists] is enabled, specific sections of pages can be excluded
from search by adding the `data-search-exclude` pragma after a Markdown
inline- or block-level element:

``` markdown
# Page title

The content of this block is included

The content of this block is excluded
{ data-search-exclude }
```

[Attribute Lists]: ../compatibility/markdown/python-markdown.md#attribute-lists
[offline]: offline.md
[MkDocs plugin compatibility entry]: ../compatibility/mkdocs/plugins.md#search
[site language]: language.md#site-language
[standalone Open Source project]: https://zensical.org/about/roadmap/#search-and-discovery
