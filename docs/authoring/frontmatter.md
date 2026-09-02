---
icon: lucide/braces
tags:
  - Authoring
---

# Front matter

Zensical supports the inclusion of metadata in the front matter of a Markdown
file that is stripped from the file contents before the rest of the content is
handed over to the Markdown parser. It can be used in templates to customize
rendering per-page.

!!! tip "Centralize metadata"

    You can also provide metadata through the [meta plugin], which lets you
    define metadata in `meta.yml` files instead of repeating it in each page's
    front matter.

## Page title

This property overrides the page title in the navigation and in the `title` tag:

``` yaml
---
title: Lorem ipsum dolor sit amet
---

# Page title
...
```

## Page description

A Markdown file can include a description that is added to the HTML head `meta`
tags of a page:

``` yaml
---
description: Nullam urna elit, malesuada eget finibus ut, ac tortor.
---

# Page title
...
```

## Page icon

Each page can define an icon that is displayed in the navigation, which must
come from any of the [included icon sets]:

``` yaml
---
icon: lucide/braces
---

# Page title
...
```

## Page status

A status can be assigned to each page and displayed in the navigation sidebar.
First, associate a status identifier with a description by adding the following
to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.extra.status]
    <identifier>: "<description>"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      status:
        <identifier>: <description>
    ```

The identifier can only include alphanumeric characters, as well as dashes
and underscores. For example, if you have a status `Recently added`, you can
set `new` as an identifier:

=== "`zensical.toml`"

    ``` toml
    [project.extra.status]
    new = "Recently added"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      status:
        new: Recently added
    ```

The page status can now be set with the front matter `status` property. For
example, you can mark a page as `new` with the following lines at the top of a
Markdown file:

``` yaml
---
status: new
---

# Page title
...
```

The following status identifiers are already defined:

- :lucide-badge-alert: – `new`
- :lucide-trash: – `deprecated`

You can define a custom page status this way. To give it an icon other than the
default, also configure it in your [`extra.css`][extra_css].

## Page template

You can use the `template` metadata attribute to set a [custom template] for a
page, which will be used instead of the default `main.html`. Note that you need
to place the template you want to use in your [overrides directory], which needs
to be configured before you can use it.

For example, to apply the `my_homepage.html` template to the page:

``` yaml
---
template: my_homepage.html
---

# Page title
...
```

## Hide page elements

Use the `hide` front matter property to hide one or more elements of a page:

``` yaml
---
hide:
  - navigation
  - toc
---

# Page title
...
```

The following values are supported:

| Value | Element |
| --- | --- |
| `navigation` | [Navigation sidebar][hiding sidebars] |
| `toc` | [Table of contents][hiding sidebars] |
| `path` | [Navigation path] |
| `footer` | [Previous and next page links] |
| `feedback` | [Feedback widget] |
| `tags` | [Page tags] |

To exclude a page from search, see [Search exclusion].

## Customization

### Use in templates

You can add further custom data to the front matter and use it in your [template
overrides] or [custom templates]. A common use case is to add metadata to the
HTML `head`. Say you want to control whether a page is indexed by search engines
by adding a [meta robots `nofollow` tag][nofollow].

The first thing you would need to do is to copy `main.html` to your [overrides
directory] and add a [block override] for the `extrahead` block that adds a
robots meta tag:

``` html
{% extends "base.html" %}

{% block extrahead %}
  {% if page and page.meta and page.meta.robots %}
    <meta name="robots" content="{{ page.meta.robots }}" />
  {% else %}
    <meta name="robots" content="index, follow" />
  {% endif %}
{% endblock %}
```

Note that the block override uses an `else` branch to set a default when the
page metadata does not specify a value. Now, you can specify the robots meta
tag content from the page header:

``` yaml
---
robots: noindex, nofollow
---

# Page title
...
```

### Use in plugins

Plugins can make extensive use of page metadata. For example, the tags plugin
reads tags from page metadata, and the meta plugin can provide metadata for
multiple pages at once.

[block override]: ../customization.md#overriding-blocks
[custom template]: ../customization.md#custom-templates
[custom templates]: ../customization.md#custom-templates
[extra_css]: ../customization.md#additional-css
[hiding sidebars]: ../setup/navigation.md#hide-the-sidebars
[Navigation path]: ../setup/navigation.md#hide-the-navigation-path
[Previous and next page links]: ../setup/footer.md#hiding-prevnext-links
[Feedback widget]: ../setup/analytics.md#hide-the-feedback-widget
[Page tags]: ../compatibility/mkdocs/plugins.md#tags
[included icon sets]: icons-emojis.md#included-icon-sets
[meta plugin]: ../compatibility/mkdocs/plugins.md#meta
[nofollow]: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
[overrides directory]: ../customization.md#configuring-overrides
[Search exclusion]: ../setup/search.md#search-exclusion
[template overrides]: ../customization.md#template-overrides
