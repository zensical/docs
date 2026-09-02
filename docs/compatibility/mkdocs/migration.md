---
icon: lucide/route
tags:
  - Compatibility
  - Migration
  - MkDocs
  - Material for MkDocs
---

# Migrate from MkDocs

You do not need to change your configuration or replace your current workflow
to adopt Zensical. Zensical reads the existing `mkdocs.yml`, so the same project
can be built with either command:

``` sh
mkdocs build
zensical build
```

We are committed to making adoption gradual and reversible. Zensical continues
to support your existing `mkdocs.yml`, so your MkDocs build is a working safety
net while you migrate to Zensical.

## Adopt Zensical gradually

1. Keep your existing MkDocs production deployment unchanged.
2. Build the same project with Zensical using its existing `mkdocs.yml`.
3. Compare representative pages, navigation, search, and customizations.
4. Ensure that every [MkDocs plugin][MkDocs plugins] you depend on is supported.
5. Switch local and CI commands only when you are confident in the result.

## Try Zensical Studio

[Zensical Studio] works with both MkDocs and Zensical projects, giving you
the same authoring environment throughout the transition. **Try it on
your MkDocs project today**, then gradually switch to Zensical without
changing your workflow or losing access to Studio's workspace intelligence.

In the coming months, Zensical Studio will become the central place for
assessing compatibility and guiding a complete migration to Zensical, including
the final move to `zensical.toml`.

![Editor]
![Editor dark]

You can keep `mkdocs.yml` for as long as you want. Both MkDocs and Zensical
can read it, so moving to `zensical.toml` is not required as part of adopting
Zensical.

## Configuration

When adding settings during this period, use the `mkdocs.yml` examples in the
[configuration reference] so the project remains compatible with both builders.

Zensical preserves the standard MkDocs project structure: configuration lives
at the project root, Markdown content lives in [`docs_dir`][docs_dir], and
generated output is written to [`site_dir`][site_dir]. Existing page paths,
directory URLs, and navigation configuration remain unchanged.

### Unsupported settings

The following `mkdocs.yml` settings are not yet supported in Zensical:

- `remote_branch`
- `remote_name`
- [`exclude_docs`][draft_exclude_docs]
- [`draft_docs`][draft_exclude_docs]
- [`not_in_nav`][not_in_nav]
- `hooks`

## Build and preview

During evaluation, run Zensical alongside the existing MkDocs commands. When
you are ready to switch, replace `mkdocs` with `zensical` in local and CI
commands. The common `build` and `serve` workflows remain available, with the
following differences:

- `--theme` – not supported – Use theme [`variant`][variant].
- `--use-directory-urls` – not supported. Use [`use_directory_urls`][use_directory_urls].
- `--site-dir` – not supported. Use [`site_dir`][site_dir].
- `gh-deploy` – not provided. Use the appropriate [publishing method].
- `get-deps` – not provided. Declare dependencies explicitly in
  `pyproject.toml`.

See the [command-line reference] for the commands and options that Zensical
provides.

## Theme variant

Zensical provides two theme variants – `modern` and `classic`.

The `classic` variant preserves the appearance of Material for MkDocs, while
both variants retain the same HTML structure. We recommend using `classic`
when moving an existing Material for MkDocs project or when custom CSS and
JavaScript depend on its established appearance:

=== "`classic`"

    ``` yaml
    theme:
      variant: classic
    ```

    ![Classic theme]
    ![Classic theme dark]

=== "`modern`"

    ``` yaml
    theme:
      variant: modern
    ```

    ![Modern theme]
    ![Modern theme dark]

## Templates and overrides

Zensical uses [MiniJinja] rather than Jinja to render templates. MiniJinja is
largely compatible with Jinja, but it does not include a Python interpreter and
cannot call arbitrary Python functions. Use the available [filters] and [tests]
instead.

Material for MkDocs adapted its standard templates for MiniJinja compatibility.
The last required changes were released in Material for MkDocs 9.6.18. Overrides
based on that version or a later one should generally work without changes.

When moving older or extensively customized overrides:

1. Compare them with the current Material for MkDocs templates.
2. Replace calls to arbitrary Python functions with supported filters or tests.
3. Build a representative set of pages and check each overridden block.

[Classic theme]: ../../assets/screenshots/theme-classic.png#gh-light-mode-only
[Classic theme dark]: ../../assets/screenshots/theme-classic-dark.png#gh-dark-mode-only
[command-line reference]: ../../usage/cli.md
[configuration reference]: ../../setup/basics.md
[docs_dir]: ../../setup/basics.md#docs_dir
[draft_exclude_docs]: https://github.com/zensical/backlog/issues/65
[Editor]: ../../assets/screenshots/editor.png#gh-light-mode-only
[Editor dark]: ../../assets/screenshots/editor-dark.png#gh-dark-mode-only
[filters]: https://docs.rs/minijinja/latest/minijinja/filters/index.html#functions
[MiniJinja]: https://docs.rs/minijinja/latest/minijinja/
[MkDocs plugins]: plugins.md
[Modern theme]: ../../assets/screenshots/theme-modern.png#gh-light-mode-only
[Modern theme dark]: ../../assets/screenshots/theme-modern-dark.png#gh-dark-mode-only
[not_in_nav]: https://github.com/zensical/backlog/issues/63
[publishing method]: ../../publish-your-site.md
[site_dir]: ../../setup/basics.md#site_dir
[tests]: https://docs.rs/minijinja/latest/minijinja/tests/index.html#functions
[use_directory_urls]: ../../setup/basics.md#use_directory_urls
[variant]: #theme-variant
[Zensical Studio]: https://zensical.org/studio
