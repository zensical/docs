---
icon: lucide/layers-plus
---

# Versioning

Zensical allows to deploy and connect multiple versions of your project
documentation on [GitHub Pages] by integrating with our fork of [mike], a tool
that was originally designed for MkDocs which we adapted for Zensical – a bridge
solution until we introduce [native versioning support].

  [GitHub Pages]: ../publish-your-site.md#github-pages
  [mike]: https://github.com/squidfunk/mike
  [native versioning support]: https://zensical.org/about/roadmap/#versioning

## Installation

We provide a fork of [mike] that you can install with `pip`:

``` sh
pip install git+https://github.com/squidfunk/mike.git
```

This will make the `mike` executable available in your environment.

!!! warning "This package is not published on PyPI"

    Note that installation requires `git`. Since we consider this a temporary solution, we do not plan to publish this package on PyPI, so you need to install it directly from GitHub.

## Configuration

### Versioning

[mike] makes it easy to deploy multiple versions of your project documentation.
The version selector can be enabled by setting the `provider` option to `mike`:

=== "`zensical.toml`"

    ``` toml
    [project.extra.version]
    provider = "mike"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      version:
        provider: mike
    ```

### Version warning

If you're using versioning, you might want to display a warning when the user
visits any other version than the latest version. Using [theme extension],
you can [override the `outdated` block][overriding blocks]:

``` html
{% extends "base.html" %}

{% block outdated %}
  You're not viewing the latest version.
  <a href="{{ '../' ~ base_url }}"> <!-- (1)! -->
    <strong>Click here to go to latest.</strong>
  </a>
{% endblock %}
```

1.  Given this value for the `href` attribute, the link will always redirect to
    the root of your site, which will then redirect to the latest version. This
    ensures that older versions of your site do not depend on a specific alias,
    e.g. `latest`, to allow for changing the alias later on without breaking
    earlier versions.

This will render a version warning above the header.

The default version is identified by the `latest` alias. If you wish to set
another alias as the latest version, e.g. `stable`, add the following lines
to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.extra.version]
    default = "stable" # (1)!
    ```

    1.  You can also define multiple aliases as the default version, e.g. `stable`
        and `development`.

        ``` toml
        [project.extra.version]
        default = ["stable", "development"]
        ```

        Now every version that has the `stable` and `development` aliases will not
        display the version warning.

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      version:
        default: stable # (1)!
    ```

    1.  You can also define multiple aliases as the default version, e.g. `stable`
        and `development`.

        ``` yaml
        extra:
          version:
            default:
              - stable
              - development
        ```

        Now every version that has the `stable` and `development` aliases will not
        display the version warning.

Make sure one alias matches the [default version], as this is where users are
redirected to.

  [theme extension]: ../customization.md#extending-the-theme
  [overriding blocks]: ../customization.md#overriding-blocks
  [default version]: #setting-a-default-version

### Version alias

If you're using aliases for versioning, and want to show the version alias
besides the version number, you can enable this feature by setting the `alias`
option to `true`:

=== "`zensical.toml`"

    ``` toml
    [project.extra.version]
    alias = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      version:
        alias: true
    ```

## Usage

While this section outlines the basic workflow for publishing new versions,
it's best to check out [mike's documentation] to make yourself familiar
with its mechanics.

  [mike's documentation]: https://github.com/jimporter/mike

### Publishing a new version

If you want to publish a new version of your project documentation, choose a
version identifier and update the alias set as the default version with:

```
mike deploy --push --update-aliases 0.1 latest
```

Note that every version will be deployed as a subdirectory of your `site_url`,
which you should set explicitly. For example, if your configuration contains:

=== "`zensical.toml`"

    ``` toml
    [project]
    site_url = "https://docs.example.com/"  # Trailing slash is recommended
    ```

=== "`mkdocs.yml`"

    ``` yaml
    site_url: 'https://docs.example.com/'  # Trailing slash is recommended
    ```

the documentation will be published to URLs such as:

- _docs.example.com/0.1/_
- _docs.example.com/0.2/_
- ...

### Setting a default version

When starting with [mike], a good idea is to set an alias as a default version,
e.g. `latest`, and when publishing a new version, always update the alias to
point to the latest version:

```
mike set-default --push latest
```

When publishing a new version, [mike] will create a redirect in the root of
your project documentation to the version associated with the alias:

_docs.example.com_ :octicons-arrow-right-24: _docs.example.com/0.1_
