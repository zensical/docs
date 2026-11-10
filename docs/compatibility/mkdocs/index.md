---
tags:
  - Compatibility
  - MkDocs
  - Material for MkDocs
---

# MkDocs

Zensical is built by the team behind [Material for MkDocs]. Compatibility is a
core priority.

Zensical can build existing MkDocs projects without requiring changes: It
supports `mkdocs.yml`, preserves the standard project layout, renders Python
Markdown content, and recognizes the configuration of supported MkDocs plugins.

!!! info "Planning your organization’s transition"

    Zensical Spark gives your organization a closer working relationship with
    our team, with membership options for migration planning, ongoing support,
    and collaboration. [Learn more about Zensical Spark.](https://zensical.org/spark/)

## Compatibility

- [x] **Configuration and structure:** your existing `mkdocs.yml` configuration
  and [almost all settings], including `nav`, `theme`, `extra`, `plugins`, are
  supported without changes.
- [x] **Markdown:** [Python Markdown], [Python Markdown Extensions], and the most
  popular third-party Markdown extensions can be used without changes.
- [x] **Material for MkDocs:** Zensical supports the complete settings surface and
  provides a [`classic` theme][classic theme] variant that preserves the look
  of Material for MkDocs.
- [x] **Customization:** [additional CSS] and [JavaScript] work without changes when using the `classic` theme. Template overrides [rarely need changes].
- [x] **MkDocs plugins:** The Zensical team works on providing a growing list of
  [plugin replacements] for the most popular MkDocs and Material for MkDocs plugins.
- [x] **Commands:** Zensical uses the same shape as MkDocs with its
  [`build`][build] and [`serve`][serve] commands, with a small number of differences.

## Differences from MkDocs

### Validation

Only part of MkDocs' [`validation` configuration][MkDocs validation] is supported. The differences below are based on MkDocs 1.6.1.

#### MkDocs settings

The nested `validation.links` settings and their top-level shorthand forms are accepted. For example, `validation.links.anchors` and `validation.anchors` are mapped to the same Zensical setting.

| MkDocs setting | Behavior in Zensical |
| --- | --- |
| `validation.links.not_found` | Mapped to `validation.invalid_links`: `warn` and `info` become `true`; `ignore` becomes `false`. |
| `validation.links.anchors` | Mapped to `validation.invalid_link_anchors`: `warn` and `info` become `true`; `ignore` becomes `false`. |
| `validation.links.absolute_links` | With `relative_to_docs`, links starting with `/` are resolved relative to `docs_dir`. With `warn`, `info`, or `ignore`, this resolution is disabled; the requested diagnostic level is not applied. |
| `validation.links.unrecognized_links` | Ignored. No equivalent configurable diagnostic is provided. |
| `validation.nav.omitted_files` | Ignored. Pages omitted from an explicit `nav` are not reported by this check. |
| `validation.nav.not_found` | Ignored. Missing or excluded targets in `nav` are not reported by this check. |
| `validation.nav.absolute_links` | Ignored, including `relative_to_docs`. Neither diagnostics nor documentation-root resolution are enabled for navigation entries by this setting. |

The top-level `validation.omitted_files` shorthand is also ignored. Other shorthand settings affect only the supported link checks; navigation validation is not enabled by them.

**Diagnostic levels are not preserved.** All enabled Zensical validation checks are reported as warnings. In MkDocs, `info` messages are permitted in strict mode. In Zensical, these messages are converted to warnings, and the build is aborted when `strict: true` or `--strict` is used.

Missing pages and anchors are both reported as warnings by default in Zensical. In MkDocs 1.6.1, missing pages are reported at `warn`, but missing anchors are reported at `info`. Consequently, a strict build can be aborted because of missing anchors after migration even without an explicit `validation` configuration.

The settings are applied in this order:

1. Top-level MkDocs shorthand values are applied.
2. Those values are overridden by explicit `validation.links` values.
3. The mapped values are overridden by explicit Zensical boolean settings, such as `validation.invalid_links`.

For example, the MkDocs values are overridden by the Zensical booleans in this configuration:

``` yaml
validation:
  links:
    not_found: warn
    anchors: ignore
  invalid_links: false
  invalid_link_anchors: true
```

The two boolean settings are specific to Zensical; they are not supported by MkDocs itself.

#### Absolute links and validation coverage

Documentation-root links can be enabled with the same configuration in both builders:

``` yaml
validation:
  links:
    absolute_links: relative_to_docs
```

For example, `/guide/page.md#heading` is resolved from `docs_dir`, and the page and anchor are checked. Supported Markdown links are also rewritten to relative output URLs.

In Zensical, this behavior can alternatively be enabled with `validation.absolute_links_relative_to_docs: true`. It is disabled by default. An explicit boolean value is given precedence over the MkDocs setting.

With other `absolute_links` values, MkDocs' behavior is not fully reproduced. In particular, `/page.md` can still be reported as missing by Zensical's `invalid_links` check, even with `absolute_links: ignore`. Documentation-root resolution must be enabled for such Markdown paths to be resolved correctly.

The scope of `not_found` is also narrower in Zensical. Markdown page targets and their anchors are checked, including same-page fragments such as `#heading`. Missing assets such as `missing.png`, output URLs such as `page.html`, and directory links such as `guide/` are not checked by `invalid_links`. In MkDocs, missing source assets are covered by `links.not_found`, while unrecognized relative links can be reported through `links.unrecognized_links`.

#### Additional Zensical settings

Boolean settings are provided by Zensical under `validation` in `mkdocs.yml`, or `[project.validation]` in `zensical.toml`:

| Setting | Default | Purpose |
| --- | --- | --- |
| `invalid_links` | `true` | Warnings are enabled for missing Markdown page targets and unresolved autorefs. |
| `invalid_link_anchors` | `true` | Warnings are enabled for missing anchors in Markdown pages. |
| `absolute_links_relative_to_docs` | `false` | Markdown links starting with `/` are resolved relative to `docs_dir`. No additional check is enabled by this setting alone. |
| `unresolved_references` | `false` | Link or image references without matching definitions are reported. |
| `unresolved_footnotes` | `false` | Footnote references without matching definitions are reported. |
| `unused_definitions` | `false` | Link definitions that are never referenced are reported. |
| `unused_footnotes` | `false` | Footnote definitions that are never referenced are reported. |
| `shadowed_definitions` | `false` | Duplicate link definitions are reported. |
| `shadowed_footnotes` | `false` | Duplicate footnote definitions are reported. |

Unresolved autorefs are controlled by `invalid_links`, independently of `unresolved_references`. The six reference and footnote checks are deprecated in their current form, as described in the [validation reference][validation reference].

A boolean can also be supplied for the whole `validation` setting in Zensical. With `validation: false`, all validation checks are disabled. With `validation: true`, only `invalid_links` and `invalid_link_anchors` are enabled; the six additional checks and documentation-root resolution remain disabled. These boolean forms are not supported by MkDocs.

## Try Zensical

Moving an existing MkDocs project generally requires little or no configuration
changes. Use these guides to check compatibility and verify your site before
switching to Zensical:

<div class="grid cards" markdown>

-   :lucide-route: &nbsp; [Migrate from MkDocs]

    ---

    Review the configuration, command-line, theme, and template differences
    that matter when moving an existing project.

-   :lucide-blocks: &nbsp; [MkDocs plugin support][MkDocs plugins]

    ---

    Find supported plugin replacements, installation requirements, and
    Zensical-specific caveats.

-   :lucide-package: &nbsp; [Python Markdown][Python Markdown]

    ---

    Consult the complete Python Markdown reference to learn about the supported syntax, extensions, and settings.

-   :lucide-hammer: &nbsp; [Build your site][build]

    ---

    Build and review a prototype or copy of your site before switching to Zensical in production.

</div>

[additional CSS]: ../../customization.md#additional-css
[almost all settings]: migration.md#unsupported-settings
[build]: ../../usage/build.md
[classic theme]: migration.md#theme-variant
[JavaScript]: ../../customization.md#additional-javascript
[Material for MkDocs]: https://squidfunk.github.io/mkdocs-material/
[Migrate from MkDocs]: migration.md
[MkDocs validation]: https://www.mkdocs.org/user-guide/configuration/#validation
[MkDocs plugins]: plugins.md
[plugin replacements]: plugins.md
[Python Markdown]: ../markdown/python-markdown.md
[Python Markdown Extensions]: ../markdown/python-markdown-extensions.md
[rarely need changes]: migration.md#templates-and-overrides
[serve]: ../../usage/preview.md
[validation reference]: ../../setup/validation.md
