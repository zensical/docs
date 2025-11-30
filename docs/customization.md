---
icon: lucide/drill
tags:
  - Get started
  - Customization
---

# Customization

Zensical makes it easy to get started with a modern documentation site. However,
sometimes you may want to adjust the look and feel of your documentation to
better match your project's branding or to add custom functionality. This guide
explains how you can customize Zensical.

## Adding assets

Zensical offers several options for theme customization. To change the appearance
of your pages, you can add your own CSS files located within your documentation
directory. For more advanced modifications, you can include custom JavaScript
code.

### Additional CSS

To customize the appearance of your site, you can add a custom style sheet that
overrides or extends Zensical’s default styles. Whether you want to adjust the
design or apply specific branding, simply place your style sheet file within the
`docs` directory:

=== "`zensical.toml`"

    ``` .sh
    .
    ├─ docs/
    │  └─ stylesheets/
    │     └─ extra.css
    └─ zensical.toml
    ```

    Then, add the following lines to `zensical.toml`:

    ``` toml
    [project]
    extra_css = ["stylesheets/extra.css"]
    ```

=== "`mkdocs.yml`"

    ``` { .sh .no-copy }
    .
    ├─ docs/
    │  └─ stylesheets/
    │     └─ extra.css
    └─ mkdocs.yml
    ```

    Then, add the following lines to `mkdocs.yml`:

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

### Additional JavaScript

To enhance your documentation with custom functionality or interactive features,
you can add JavaScript files to your project. Place your custom scripts within
the `docs` directory:

=== "`zensical.toml`"

    ``` .sh
    .
    ├─ docs/
    │  └─ javascripts/
    │     └─ extra.js
    └─ zensical.toml
    ```

    Then, add the following lines to `zensical.toml`:

    ``` toml
    [project]
    extra_javascript = ["javascripts/extra.js"]
    ```

=== "`mkdocs.yml`"

    ``` .sh
    .
    ├─ docs/
    │  └─ javascripts/
    │     └─ extra.js
    └─ mkdocs.yml
    ```

    Then, add the following lines to `mkdocs.yml`:

    ``` yaml
    extra_javascript:
      - javascripts/extra.js
    ```

???+ tip "Making sure your JavaScript code runs at the right time"

    It is likely that you will want to run some initialization code in your
    JavaScript once the page has been fully loaded by the browser. This means
    installing a callback function subscribing to events on the `document$`
    observable exported by Zensical.

    Using the `document$` observable is particularly important if you are using [instant navigation] since it will not result in a page refresh in the
    browser, but subscribers on the observable will be notified.

    ``` javascript
    document$.subscribe(function() {
      console.log("Initialize third-party libraries here")
    })
    ```

  [instant navigation]: setup/navigation.md#instant-navigation
  [RxJS Observable]: https://rxjs.dev/api/index/class/Observable

## Extending the theme

!!! info "Template caching"

    Zensical caches theme templates for performance reasons. If you make changes to your templates or partials, you need to clear the cache in order to see your changes reflected when running the preview server:

    ```
    zensical build --clean
    ```

    This is a temporary limitation that will be fixed in a future release. Subscribe to #103 to get notified.

Zensical uses [MiniJinja], a Rust-based template engine inspired by Python’s
popular [Jinja] system, to render the HTML structure of your site – including
the header, footer, and navigation sidebars. It rendered the entire scaffold
of your documentation site, while the main content is generated from your
Markdown files.

Templates are HTML files enhanced with MiniJinja instructions for dynamic
rendering. The default page template is `main.html`, which inherits from
`base.html` and includes additional templates found in the `partials` directory.
The [`template`][template] can be customized per page.

[MiniJinja]: https://docs.rs/minijinja/latest/minijinja/
[Jinja]: https://jinja.palletsprojects.com
[template]: authoring/frontmatter.md#page-template

### Configuring overrides

To add new templates or to override parts of existing one, you first need to
configure the `custom_dir` setting to point to a directory in which you store
your template overrides:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    custom_dir = "overrides"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      custom_dir: overrides
    ```

The `custom_dir` path is resolved relative to your configuration file.

### Theme structure

In order to override theme templates, it's important to understand the file
system structure, since any files you store in `custom_dir` override the
templates and partials of the same name as they are provided by Zensical.
Likewise, it's important to know what files exist if you want to *add* your
new templates or partials:

``` .sh
.
├─ .icons/                             # Icon sets
├─ assets/
│  ├─ images/                          # Images and icons
│  ├─ javascripts/                     # JavaScript files
│  └─ stylesheets/                     # Style sheets
├─ partials/
│  ├─ integrations/                    # Third-party integrations
│  │  ├─ analytics/                    # Analytics integrations
│  │  └─ analytics.html                # Analytics setup
│  ├─ languages/                       # Translation languages
│  ├─ actions.html                     # Actions
│  ├─ alternate.html                   # Site language selector
│  ├─ comments.html                    # Comment system (empty by default)
│  ├─ consent.html                     # Consent
│  ├─ content.html                     # Page content
│  ├─ copyright.html                   # Copyright and theme information
│  ├─ feedback.html                    # Was this page helpful?
│  ├─ footer.html                      # Footer bar
│  ├─ header.html                      # Header bar
│  ├─ icons.html                       # Custom icons
│  ├─ language.html                    # Translation setup
│  ├─ logo.html                        # Logo in header and sidebar
│  ├─ nav.html                         # Main navigation
│  ├─ nav-item.html                    # Main navigation item
│  ├─ palette.html                     # Color palette toggle
│  ├─ progress.html                    # Progress indicator
│  ├─ search.html                      # Search interface
│  ├─ social.html                      # Social links
│  ├─ source.html                      # Repository information
│  ├─ source-file.html                 # Source file information
│  ├─ tabs.html                        # Tabs navigation
│  ├─ tabs-item.html                   # Tabs navigation item
│  ├─ tags.html                        # Tags
│  ├─ toc.html                         # Table of contents
│  ├─ toc-item.html                    # Table of contents item
│  └─ top.html                         # Back-to-top button
├─ 404.html                            # 404 error page
├─ base.html                           # Base template
└─ main.html                           # Default page
```

### Custom templates

Some of your pages may need a different structure. Say, you want to have a
custom layout for the homepage of your documentation site, for reference pages or
your blog posts. You can use the [template language provided by MiniJinja] to
produce any HTML structure you like. Use the templates provided by Zensical as
a starter or start from a clean slate.

[template language provided by MiniJinja]: https://docs.rs/minijinja/latest/minijinja/syntax/index.html

Add a new template to the overrides directory you configured. Make sure its name
is not the same as one of the files provided by Zensical (such as `main.html`
and `base.html`). Now you can specify which template should be used for a page
by adding the [template option] to the page header:

[template option]: authoring/frontmatter.md#page-template

``` yaml
---
template: "my_template.html"
---

# Page title

...
```

### Custom error pages

The `overrides` directory is also the place for adding a 404 error page, which
can be configured as a fallback in your web server. If you set `custom_dir` to
`overrides`, use the following layout:

```
├─ overrides/
│  └─ 404.html
└─ zensical.toml
```

Note that Zensical provides a default `404.html` template.

### Template overrides

There are two methods to override templates: You can either override entire
templates or partials, or you can override specific blocks within templates,
which is the recommended approach.

For more information, refer to the [Jinja Template Designer Documentation].

[Jinja Template Designer Documentation]: https://jinja.palletsprojects.com/en/stable/templates/

#### Overriding blocks <small>recommended</small> { #overriding-blocks data-toc-label="Overriding blocks" }

Zensical templates contain _blocks_ that wrap specific features and that can be
re-defined or extended by an override. Zensical defines a `main.html` template
that inherits all its functionality from `base.html`. The most robust way of
making changes via overrides is therefore to override `main.html` instead of
`base.html`, which is more likely to change in future versions of Zensical.

In order to set up block overrides, create a `main.html` file inside the
`overrides` directory:

``` { .sh .no-copy }
.
└─ overrides/
   └─ main.html
```

Then, e.g. to override the site title, add the following lines to `main.html`:

``` html
{% extends "base.html" %}

{% block htmltitle %}
  <title>Lorem ipsum dolor sit amet</title>
{% endblock %}
```

If you intend to __add__ something to a block rather than to replace it
altogether with new content, use `{{ super() }}` inside the block to include the
original block content. This is particularly useful when adding third-party
scripts to your docs, e.g.

``` html
{% extends "base.html" %}

{% block scripts %}
  <!-- Add scripts that need to run before here -->
  {{ super() }}
  <!-- Add scripts that need to run afterwards here -->
{% endblock %}
```

The following template blocks are provided by the theme:

| Block name        | Purpose                                         |
| :---------------- | :---------------------------------------------- |
| `analytics`       | Wraps the Google Analytics integration          |
| `announce`        | Wraps the announcement bar                      |
| `config`          | Wraps the JavaScript application config         |
| `container`       | Wraps the main content container                |
| `content`         | Wraps the main content                          |
| `extrahead`       | Empty block to add custom meta tags             |
| `fonts`           | Wraps the font definitions                      |
| `footer`          | Wraps the footer with navigation and copyright  |
| `header`          | Wraps the fixed header bar                      |
| `hero`            | Wraps the hero teaser (if available)            |
| `htmltitle`       | Wraps the `<title>` tag                         |
| `libs`            | Wraps the JavaScript libraries (header)         |
| `outdated`        | Wraps the version warning                       |
| `scripts`         | Wraps the JavaScript application (footer)       |
| `site_meta`       | Wraps the meta tags in the document head        |
| `site_nav`        | Wraps the site navigation and table of contents |
| `styles`          | Wraps the style sheets (also extra sources)     |
| `tabs`            | Wraps the tabs navigation (if available)        |


#### Overriding partials

In order to override a partial, you can replace it with a file of the same name
and location in the `overrides` directory. For example, to replace the original
`footer.html` partial, create a new `footer.html` partial in the `overrides`
directory:

``` .sh
.
└─ overrides/
   └─ partials/
      └─ footer.html
```

Zensical will now use the new partial when rendering the theme.
