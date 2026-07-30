---
icon: lucide/panel-top
tags:
  - Setup
  - Information architecture
---

# Header

The header can be customized to show an announcement bar that disappears upon scrolling, and provides some options for further configuration. It also includes
the [search bar] and a place to display your project's [git repository], as
explained in those dedicated guides.

## Configuration

### Automatic hiding

When autohiding is enabled, the header is automatically hidden when the
user scrolls past a certain threshold, leaving more space for content. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "header.autohide"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - header.autohide
    ```

### Announcement bar

Zensical includes an announcement bar, which is the perfect place to
display project news or other important information to the user. When the user
scrolls past the header, the bar will automatically disappear. In order to add
an announcement bar, [extend the theme] and [override the `announce`
block][overriding blocks], which is empty by default:

``` html
{% extends "base.html" %}

{% block announce %}
  <!-- Add announcement here, including arbitrary HTML -->
{% endblock %}
```

#### Mark as read

For temporary announcements that can be marked as read by the user, a button to
dismiss the current announcement can be included. Add the following lines to
your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "announce.dismiss"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - announce.dismiss
    ```

When the user clicks the button, the current announcement is dismissed and not
displayed again until the content of the announcement changes.

[extend the theme]: ../customization.md#extending-the-theme
[git repository]: repository.md
[overriding blocks]: ../customization.md#overriding-blocks
[search bar]: search.md
