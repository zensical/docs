---
icon: lucide/milestone
tags:
  - Setup
  - Navigation
  - Information architecture
---

# Navigation

A clear and concise navigation structure is an important aspect of good project
documentation. Zensical provides several options to configure the behavior of
navigational elements, including [tabs] and [sections], as well as features
such as [instant navigation] and [instant previews].

  [tabs]: #navigation-tabs
  [sections]: #navigation-sections
  [instant navigation]: #instant-navigation
  [instant previews]: #instant-previews

Additional navigation can be configured [in the footer].

[in the footer]: footer.md#navigation

## Configuration

By default, Zensical creates the navigation sidebar on the basis of the folder
structure and content of the Markdown pages. Likewise, it uses a default layout
that can be overridden using various feature flags described on this page.

### Explicit navigation

If you want to exercise more control over the structure of your navigation, you
can create an explicit definition of the navigation structure in your
configuration file. In the simplest case, you simply list the paths to your
content files, leaving it to Zensical to extract a title for each of them from
the content itself. The paths need to be relative to the [`docs_dir`][docs_dir].

  [docs_dir]: basics.md#docs_dir

=== "`zensical.toml`"

    ``` toml
    [project]
    nav = [
      "index.md",
      "about.md"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    nav:
      - index.md
      - about.md
    ```

Instead of letting Zensical figure out the title to use for the navigation entry
for a page, you can also explicitly specify a title:

=== "`zensical.toml`"

    ``` toml
    [project]
    nav = [
      {"Home" = "index.md"},
      {"About" = "about.md"}
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    nav:
      - Home: index.md
      - About: about.md
    ```

#### Navigation sections

You can define navigation sections to create a navigation hierarchy that guides
your users to the information they require.

=== "`zensical.toml`"

      ``` toml
      [project]
      nav = [
        {"Home" = "index.md"},
        {"About" = [
           "about/index.md",
           "about/vision.md",
           "about/team.md"
        ]}
      ]
      ```

=== "`mkdocs.yml`"

      ``` yaml
      nav:
        - Home: index.md
        - About:
          - about/index.md
          - about/vision.md
          - about/team.md
      ```

#### External links

Navigation items typically provide a path to a Markdown page. However, any
string that cannot be resolved to a Markdown page is treated as a URL.

=== "`zensical.toml`"

      ``` toml
      [project]
      nav = [
        {"GitHub Repo" = "https://github.com/zensical/docs"}
      ]
      ```

=== "`mkdocs.yml`"

      ``` yaml
      nav:
        - GitHub Repo: https://github.com/zensical/docs
      ```

The "GitHub Repo" navigation entry takes the user to the repository for the
Zensical Documentation.

### Instant navigation

When instant navigation is enabled, clicks on all internal links will be
intercepted and dispatched via [XHR] without fully reloading the page. Add
the following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.instant"
    ]
    ```
=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.instant
    ```

The resulting page is parsed and injected and all event handlers and components
are rebound automatically, i.e., __Zensical now behaves like a Single
Page Application__. Also, the search index is persisted through navigation,
which is especially useful for large documentation sites.

!!! info "The [`site_url`][site_url] setting must be set"

    Note that you must set [`site_url`][site_url] when using instant
    navigation, as instant navigation relies on the generated `sitemap.xml`
    which will be empty if this setting is omitted.

  [XHR]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  [site_url]: basics.md#site_url

#### Instant prefetching

Instant prefetching is a new experimental feature that will start to fetch a
page once the user hovers over a link. This reduces the perceived loading time
for the user, especially on slow connections, as the page will be available
immediately upon navigation. Enable it with:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.instant",
        "navigation.instant.prefetch"
    ]
    ```
=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.instant
        - navigation.instant.prefetch
    ```

#### Progress indicator

In order to provide a better user experience on slow connections when using
instant navigation, a progress indicator can be enabled. It will be shown at
the top of the page and will be hidden once the page has fully loaded. You can
enable it in your configuration with:

=== "`zensical.toml`"
    ``` toml
    [project.theme]
    features = [
        "navigation.instant",
        "navigation.instant.progress"
    ]
    ```

=== "`mkdocs.yml`"
    ``` yaml
    theme:
      features:
        - navigation.instant
        - navigation.instant.progress
    ```

The progress indicator will only show if the page hasn't finished loading after
400ms, so that fast connections will never show it for a better instant
experience.

### Instant previews

Instant previews allow the user to preview another site of your documentation
without navigating to it. They can be very helpful to keep the user in context.
Instant previews can be enabled on any header link with the `data-preview`
attribute:

```` markdown title="Link with instant preview"
``` markdown
[Attribute Lists](#){ data-preview }
```
````

<div class="result" markdown>

[Attribute Lists](extensions/python-markdown.md#attribute-lists){ data-preview }

</div>

!!! info "Limitations"

    Instant previews are still an experimental feature and currently limited to
    headerlinks. This means, you can use them on any internal link that points
    to a header on another page, but not other elements with `id` attributes.

#### Automatic previews

The recommended way to work with instant previews is to use the Markdown
extension that is included with Zensical, as it allows you to enable
instant previews on a per-page or per-section level for your documentation:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.preview]
    configurations = [
        { targets.include = [
            "customization.md",
            "setup/extensions/*"
        ]}
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - material.extensions.preview:
          configurations:
            - targets:
                include:
                  - customization.md
                  - setup/extensions/*
    ```

The above configuration is what we use for our documentation. We've enabled
instant previews for our changelogs, customization guide and for all Markdown
extensions in the setup guide.

??? example "Full configuration example"

    === "`zensical.toml`"
        ``` toml
        [[project.markdown_extensions.zensical.extensions.preview.configurations]]
        sources.include = [...]
        sources.exclude = [...]
        targets.include = [...]
        targets.exclude = [...]
        ```

    === "`mkdocs.yml`"
        ``` yaml
        markdown_extensions:
          - material.extensions.preview:
              configurations:
                - sources: # (1)!
                    include:
                      - ...
                    exclude:
                      - ...
                  targets: # (2)!
                    include:
                      - ...
                    exclude:
                      - ...
        ```

        1.  Sources specify the pages _on_ which instant previews should be enabled.
            If this setting is omitted, instant previews will be enabled on all
            pages. You can use patterns to include or exclude pages. Exclusion is
            evaluated on top of inclusion, so if a page is matched by both, it will
            be excluded.

            Note that you can define multiple items under the `configurations`
            setting, which allows to precisely control where instant previews are
            shown.

        2.  Targets specify the pages _to_ which instant previews should be enabled.
            This is the recommended way to enable instant previews.
---

!!! info "The [`site_url`][site_url] setting must be set"

    Note that you must set [`site_url`][site_url] when using instant
    previews, as instant previews rely on the generated `sitemap.xml`
    which will be empty if this setting is omitted.

### Anchor tracking

When anchor tracking is enabled, the URL in the address bar is automatically
updated with the active anchor as highlighted in the table of contents. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.tracking"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.tracking
    ```

### Navigation tabs

When tabs are enabled, top-level sections are rendered in a menu layer below
the header for viewports above `1220px`, but remain as-is on mobile. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.tabs"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.tabs
    ```

===! "With tabs"

    [![Navigation tabs enabled]][Navigation tabs enabled]
    [![Navigation tabs enabled dark]][Navigation tabs enabled dark]

=== "Without"

    [![Navigation tabs disabled]][Navigation tabs disabled]
    [![Navigation tabs disabled dark]][Navigation tabs disabled dark]

  [Navigation tabs enabled]: ../assets/screenshots/navigation-tabs.png#gh-light-mode-only
  [Navigation tabs enabled dark]: ../assets/screenshots/navigation-tabs-dark.png#gh-dark-mode-only
  [Navigation tabs disabled]: ../assets/screenshots/navigation.png#gh-light-mode-only
  [Navigation tabs disabled dark]: ../assets/screenshots/navigation-dark.png#gh-dark-mode-only

#### Sticky navigation tabs

When sticky tabs are enabled, navigation tabs will lock below the header and
always remain visible when scrolling down. Just add the following two feature
flags to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.tabs",
        "navigation.tabs.sticky"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.tabs
        - navigation.tabs.sticky
    ```

### Navigation sections

When sections are enabled, top-level sections are rendered as groups in the
sidebar for viewports above `1220px`, but remain as-is on mobile. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.sections"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.sections
    ```

===! "With sections"

    [![Navigation sections enabled]][Navigation sections enabled]
    [![Navigation sections enabled dark]][Navigation sections enabled dark]

=== "Without"

    [![Navigation sections disabled]][Navigation sections disabled]
    [![Navigation sections disabled dark]][Navigation sections disabled dark]

  [Navigation sections enabled]: ../assets/screenshots/navigation-sections.png#gh-light-mode-only
  [Navigation sections enabled dark]: ../assets/screenshots/navigation-sections-dark.png#gh-dark-mode-only
  [Navigation sections disabled]: ../assets/screenshots/navigation.png#gh-light-mode-only
  [Navigation sections disabled dark]: ../assets/screenshots/navigation-dark.png#gh-dark-mode-only

Both feature flags, [`navigation.tabs`][tabs] and
[`navigation.sections`][sections], can be combined with each other. If both
feature flags are enabled, sections are rendered for level 2 navigation items.

### Navigation expansion

When expansion is enabled, the left sidebar will expand all collapsible
subsections by default, so the user doesn't have to open subsections manually.
Add the following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.expand"
    ]
    ```
=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.expand
    ```

===! "With expansion"

    [![Navigation expansion enabled]][Navigation expansion enabled]
    [![Navigation expansion enabled dark]][Navigation expansion enabled dark]

=== "Without"

    [![Navigation expansion disabled]][Navigation expansion disabled]
    [![Navigation expansion disabled dark]][Navigation expansion disabled dark]

  [Navigation expansion enabled]: ../assets/screenshots/navigation-expand.png#gh-light-mode-only
  [Navigation expansion enabled dark]: ../assets/screenshots/navigation-expand-dark.png#gh-dark-mode-only
  [Navigation expansion disabled]: ../assets/screenshots/navigation.png#gh-light-mode-only
  [Navigation expansion disabled dark]: ../assets/screenshots/navigation-dark.png#gh-dark-mode-only

### Navigation path <small>Breadcrumbs</small> { #navigation-path data-toc-label="Navigation path" }

When navigation paths are activated, a breadcrumb navigation is rendered above
the title of each page, which might make orientation easier for users visiting your
documentation on devices with smaller screens. Add the following lines to
your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.path"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.path
    ```

===! "With breadcrumbs"

    [![Navigation path enabled]][Navigation path enabled]
    [![Navigation path enabled dark]][Navigation path enabled dark]

=== "Without"

    [![Navigation path disabled]][Navigation path disabled]
    [![Navigation path disabled dark]][Navigation path disabled dark]

  [Navigation path enabled]: ../assets/screenshots/navigation.png#gh-light-mode-only
  [Navigation path enabled dark]: ../assets/screenshots/navigation-dark.png#gh-dark-mode-only
  [Navigation path disabled]: ../assets/screenshots/navigation-path.png#gh-light-mode-only
  [Navigation path disabled dark]: ../assets/screenshots/navigation-path-dark.png#gh-dark-mode-only

### Navigation pruning

When pruning is enabled, only the visible navigation items are included in the
rendered HTML, __reducing the size of the built site by 33% or more__. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.prune" # (1)!
    ]
    ```

    1.  This feature flag is not compatible with
        [`navigation.expand`][navigation.expand], as navigation expansion requires
        the complete navigation structure.

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.prune # (1)!
    ```

    1.  This feature flag is not compatible with
        [`navigation.expand`][navigation.expand], as navigation expansion requires
        the complete navigation structure.

This feature flag is especially useful for documentation sites with thousands of
pages, as the navigation makes up a significant fraction of the HTML. Navigation
pruning will replace all expandable sections with links to the first page in
that section (or the section index page).

  [navigation.expand]: #navigation-expansion

### Section index pages

When section index pages are enabled, documents can be directly attached to
sections, which is particularly useful for providing overview pages. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.indexes" # (1)!
    ]
    ```

    1.  This feature flag is not compatible with [`toc.integrate`][toc.integrate],
        as sections cannot host the table of contents due to missing space.

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.indexes # (1)!
    ```

    1.  This feature flag is not compatible with [`toc.integrate`][toc.integrate],
        as sections cannot host the table of contents due to missing space.

In order to link a page to a section, create a new document with the name
`index.md` in the respective folder, and add it to the beginning of your
navigation section:

=== "`zensical.toml`"

    ``` toml
    [project]
    nav = [
        {"Section" = [
            "section/index.md", # (1)!
            {"Page 1" = "section/page-1.md"},
            ...
            {"Page n" = "section/page-n.md"}

        ]}
    ]
    ```

    1.  `README.md` is also considered an index page.

=== "`mkdocs.yml`"

    ``` yaml
    nav:
      - Section:
        - section/index.md # (1)!
        - Page 1: section/page-1.md
        ...
        - Page n: section/page-n.md
    ```

    1.  `README.md` is also considered an index page.

  [toc.integrate]: #navigation-integration

### Table of contents

#### Anchor following

When anchor following for the [table of contents] is enabled, the sidebar is
automatically scrolled so that the active anchor is always visible. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "toc.follow"
    ]
    ```
=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - toc.follow
    ```

#### Navigation integration

When navigation integration for the [table of contents] is enabled, it is always
rendered as part of the navigation sidebar on the left. Add the following lines
to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "toc.integrate" # (1)!
    ]
    ```

    1.  This feature flag is not compatible with
        [`navigation.indexes`][navigation.indexes], as sections cannot host the
        table of contents due to missing space.

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - toc.integrate # (1)!
    ```

    1.  This feature flag is not compatible with
        [`navigation.indexes`][navigation.indexes], as sections cannot host the
        table of contents due to missing space.


===! "With navigation integration"

    [![Navigation integration enabled]][Navigation integration enabled]
    [![Navigation integration enabled dark]][Navigation integration enabled dark]

=== "Without"

    [![Navigation integration disabled]][Navigation integration disabled]
    [![Navigation integration disabled dark]][Navigation integration disabled dark]

  [table of contents]: extensions/python-markdown.md#table-of-contents
  [Navigation integration enabled]: ../assets/screenshots/toc-integrate.png#gh-light-mode-only
  [Navigation integration enabled dark]: ../assets/screenshots/toc-integrate-dark.png#gh-dark-mode-only
  [Navigation integration disabled]: ../assets/screenshots/navigation-tabs.png#gh-light-mode-only
  [Navigation integration disabled dark]: ../assets/screenshots/navigation-tabs-dark.png#gh-dark-mode-only
  [navigation.indexes]: #section-index-pages

### Back-to-top button

A back-to-top button can be shown when the user, after scrolling down, starts
to scroll up again. It's rendered centered and at the bottom of the page. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.top"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.top
    ```

## Usage

### Hide the sidebars

The navigation and/or table of contents sidebars can be hidden for a document
with the front matter `hide` property. Add the following lines at the top of a
Markdown file:

``` yaml
---
hide:
  - navigation
  - toc
---

# Page title
...
```

### Hide the navigation path

While the [navigation path] is rendered above the main headline, sometimes, it
might be desirable to hide it for a specific page, which can be achieved with
the front matter `hide` property:

``` yaml
---
hide:
  - path
---

# Page title
...
```

  [navigation path]: #navigation-path

## Customization

### Content area width

The width of the content area is set so the length of each line doesn't exceed
80-100 characters, depending on the width of the characters. While this
is a reasonable default, as longer lines tend to be harder to read, it may be
desirable to increase the overall width of the content area, or even make it
stretch to the entire available space.

This can easily be achieved with an [additional style sheet] and a few lines
of CSS:

=== "`docs/stylesheets/extra.css`"

    ``` css
    .md-grid {
      max-width: 1440px; /* (1)! */
    }
    ```

    1.  If you want the content area to always stretch to the available screen
        space, reset `max-width` with the following CSS:

        ``` css
        .md-grid {
          max-width: initial;
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

  [additional style sheet]: ../customization.md#additional-css
