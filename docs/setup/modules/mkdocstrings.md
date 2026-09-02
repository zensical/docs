---
icon: lucide/boxes
tags:
  - Modules
  - API reference
status: new
---

# mkdocstrings

This page documents Zensical's integration with [`mkdocstrings`][mkdocstrings],
a third-party plugin created by [Timothée Mazzucotelli].

## Objective

### How it works

As of [0.0.11], Zensical provides preliminary support for mkdocstrings, which
extracts documentation from source code and docstrings, then renders it directly
into Markdown pages through documentation directives. During the build,
Zensical resolves the referenced objects and formats their documentation using
the configured language handler. This keeps API reference documentation close
to the source code and avoids maintaining generated Markdown files by hand.

!!! warning "Preliminary support"

    The mkdocstrings integration is preliminary, which means some features are
    not yet supported, specifically backlinks. We're working on bringing these
    features into Zensical.

### When to use it

Use mkdocstrings when you want to publish API reference documentation that
stays synchronized with your source code and docstrings. It is especially useful
for software libraries, where manually maintaining reference pages would be
repetitive and prone to becoming outdated.

## Installation

[mkdocstrings] is not included with Zensical by default, so it needs to be
installed separately:

=== "with `pip`"

    ```
    pip install mkdocstrings-python
    ```

=== "with `uv`"

    ```
    uv add mkdocstrings-python
    ```

## Configuration

Configure mkdocstrings as a plugin:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.mkdocstrings.handlers.python]
    inventories = ["https://docs.python.org/3/objects.inv"]
    paths = ["src"]
    options.docstring_style = "google"
    options.inherited_members = true
    options.show_source = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - mkdocstrings:
          handlers:
            python:
              paths: [src]
              inventories:
                - https://docs.python.org/3/objects.inv
              options:
                docstring_style: google
                inherited_members: true
                show_source: false
    ```

The complete list of options can be found here:

- [mkdocstrings documentation]
- [mkdocstrings Python handler documentation].

!!! warning "Watching source files"

    While it is possible to configure search paths that are external to the
    docs project (outside of the parent directory containing the
    `zensical.toml` file) in the `paths` option of the Python handler, these
    external paths will not be watched for change, meaning that modifying
    files within them will not trigger a rebuild and reload. The reason is that
    the file agent will refuse to watch files that are outside the project folder
    for security reasons. We are working on lifting this limitation. You can
    follow progress on these backlog items:

    - [Proposal: Configuration](https://github.com/zensical/backlog/issues/47)
    - [Allow use of `..` in `docs_dir` and `site_dir`](https://github.com/zensical/backlog/issues/56)
    - [Symbolic links pointing outside of `docs_dir`](https://github.com/zensical/backlog/issues/55)

[0.0.11]: https://github.com/zensical/zensical/releases/tag/v0.0.11
[API reference documentation]: https://zensical.org/about/roadmap/#api-documentation
[mkdocstrings]: https://mkdocstrings.github.io
[Timothée Mazzucotelli]: https://github.com/pawamoy
[mkdocstrings documentation]: https://mkdocstrings.github.io/usage/
[mkdocstrings Python handler documentation]: https://mkdocstrings.github.io/python/usage/
