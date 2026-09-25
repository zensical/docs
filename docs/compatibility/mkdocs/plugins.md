---
icon: lucide/blocks
tags:
  - Compatibility
  - MkDocs
  - Plugins
---

# MkDocs plugins

Zensical provides native implementations of the MkDocs plugins listed below,
meaning they continue to work with your existing configuration and project
structure. In most cases, no additional packages are required as our
implementations are behavior-preserving rewrites.

We aim to match their behavior as closely as possible and document the remaining
differences. See the [compatibility roadmap] for work in progress and planned
support.

## Configuration

Most existing `mkdocs.yml` plugin configuration can remain unchanged. Review the differences below before migration. For example:

``` yaml
plugins:
  - tags
  - minify:
      minify_html: true
```

If your project already uses `zensical.toml`:

``` toml
[project.plugins.tags]

[project.plugins.minify]
minify_html = true
```

### Validation and ignored settings

Zensical silently ignores the configuration for plugins that are not listed under [Supported plugins](#supported-plugins). It does not import or run these plugins.

For a supported plugin, Zensical also silently ignores the settings that its entry identifies as ignored. Zensical does not validate their values or print a warning. It rejects any other unknown setting during configuration parsing.

Review each ignored setting before migration. The setting can remain in a configuration that is shared with MkDocs, but it has no effect when Zensical builds the site.

Unless an entry documents differences, the original plugin documentation
(linked below) remains the reference for usage and configuration. We're working
on shipping a growing list of supported plugins, as well as Zensical's own
native public module API.

If you're lazy like us, use [Zensical Studio] to get completions and validation
for all supported plugins directly in your editor inside `zensical.toml` and
`mkdocs.yml` configuration files.

## Supported plugins

Plugins are listed alphabetically. Most implementations require no additional
installation. Each entry links to the original plugin documentation, where
applicable, and to the Zensical release in which support was added.

!!! question "The plugin I need isn't listed. What can I do?"

    Check our [compatibility roadmap] and public [backlog] to see whether support
    is already planned. If it isn't, [create a change request] for the missing
    plugin in Zensical's issue tracker.

### `autorefs`

_Since [0.0.22]_

See [plugin documentation][autorefs] for usage and configuration.

---

### `awesome-nav`

_Since [0.0.58]_

See [plugin documentation][awesome-nav] for usage and configuration.

**Differences**:

- Extglob expressions are not supported; regular [glob patterns] are supported.
- MkDocs' [`not_in_nav`][not_in_nav] setting is not supported.

---

### `blog`

_Since [0.0.64]_

See [Blog] for setup and the [plugin documentation][blog] for all
configuration options and post metadata.

**Differences**:

- Custom Python callables aren't supported; built-in strategies are.

---

### `callouts`

_Since [0.0.62]_

See [plugin documentation][callouts] for the supported callout syntax.

**Differences**:

- The plugin entry enables [`pymdownx.quotes`][pymdownx quotes] with `callouts: true`.
- Zensical ignores all three plugin settings: `aliases`, `breakless_lists`, and `title_from_first_bold`.

---

### `glightbox`

_Since [0.0.35]_

See [plugin documentation][glightbox] for usage and configuration.

**Differences**:

- Zensical ignores `touchNavigation`, `loop`, `effect`, `slide_effect`, `zoomable`, `draggable`, `background`, and `shadow`.

---

### `literate-nav`

_Since [0.0.58]_

See [plugin documentation][literate-nav] for usage and configuration.

---

### `macros`

_Since [0.0.40]_

See [plugin documentation][macros] for usage and configuration.

**Differences**:

- Referenced Python and YAML files must be inside the project directory.

---

### `markdown-exec`

_Since [0.0.47]_

Install with:

``` sh
pip install "markdown-exec[ansi]"
```

See [plugin documentation][markdown-exec] for usage and configuration.

---

### `meta`

_Since [0.0.58]_

See [plugin documentation][meta] for usage and configuration.

**Differences**:

- Custom YAML tags are not supported in metadata files.

---

### `mike`

_Since [0.0.30]_

See [Versioning with mike] for installation, usage, and configuration.

**Differences**:

- Zensical requires the compatible fork described in the versioning guide.
- Zensical ignores `css_dir` and `javascript_dir` because it provides the version selector assets.

---

### `minify`

_Since [0.0.58]_

See [plugin documentation][minify] for usage and configuration.

**Differences**:

- Assets that cannot be parsed retain their original content instead of crashing
  the build.
- `minify_inline_js` and `minify_inline_css` are Zensical-only options. They minify JavaScript in `<script>` elements and CSS in `<style>` elements.

---

### `mkdocstrings`

_Since [0.0.11]_

Install with:

``` sh
pip install mkdocstrings-python
```

See [plugin documentation][mkdocstrings] for usage and configuration.

**Differences**:

- Sources outside the project directory are not watched during preview.
- Zensical ignores `watch`.

---

### `offline`

_Since [0.0.3]_

See [plugin documentation][offline] for usage and configuration.

---

### `redirects`

_Since [0.0.58]_

See [Redirects] for usage and configuration.

**Differences**:

- Zensical supports anchor-based redirects for moving sections and splitting
  pages.

---

### `rss`

_Since [0.0.65]_

See [plugin documentation][rss] for usage and configuration.

**Differences**:

- Zensical ignores `cache_dir` and does not fetch remote images for RSS
  enclosures.
- Zensical ignores `use_material_social_cards`; generated social cards are not
  used.

---

### `search`

_Since [0.0.3]_

Zensical doesn't load the search plugin provided by MkDocs or Material for
MkDocs. Both `search` and `material/search` configure Zensical's built-in [site
search] module.

**Differences**:

- Search is enabled by default, even when it isn't listed under `plugins`.
- `enabled` and `separator` are the only plugin settings that affect Zensical search.
- Zensical ignores `lang`. It takes the search language from [`theme.language`][site language].
- Zensical ignores `pipeline`. It has no equivalent because Zensical's search engine does not use the Lunr pipeline.
- Zensical ignores `fields`, `indexing`, `jieba_dict`, `jieba_dict_user`, `min_search_length`, and `prebuild_index`.

---

### `section-index`

_Since [0.0.3]_

Zensical provides section-index behavior natively. You can keep the `section-index` plugin entry in a shared configuration, but Zensical ignores the entry.

---

### `table-reader`

_Since [0.0.41]_

See [plugin documentation][table-reader] for usage and configuration.

**Differences**:

- `data_path` and all table files must be inside the project directory.
- Reader call arguments must be Python literals. Names, expressions, and `**kwargs` expansion are not supported.

---

### `tags`

_Since [0.0.58]_

See [plugin documentation][tags] for usage and configuration.

**Differences**:

Zensical silently ignores the legacy settings below. Rename or replace them so that their behavior applies to a Zensical build.

| Ignored setting              | Migration                                                              |
| ---------------------------- | ---------------------------------------------------------------------- |
| `tags_compare`               | Use [`tags_sort_by`][Tags configuration].                              |
| `tags_compare_reverse`       | Use [`tags_sort_reverse`][Tags configuration].                         |
| `tags_pages_compare`         | Use [`listings_sort_by`][Tags configuration].                          |
| `tags_pages_compare_reverse` | Use [`listings_sort_reverse`][Tags configuration].                     |
| `tags_file`                  | Add `<!-- material/tags -->` to the tag index page.                    |
| `tags_extra_files`           | Add a `<!-- material/tags -->` directive to each extra tag index page. |
| `export`                     | No replacement. Native tags do not export JSON.                        |
| `export_file`                | No replacement. Native tags do not export JSON.                        |
| `export_only`                | No replacement. Native tags do not export JSON.                        |

Custom Python callables for `tags_slugify`, `tags_sort_by`, `listings_sort_by`, and `listings_tags_sort_by` are not supported. Use one of the built-in callables documented by Material for MkDocs.

## Unsupported plugins

### `mkdocs-gen-files`

Zensical does not currently support [`mkdocs-gen-files`][mkdocs-gen-files]. Run
the generation scripts separately from the Zensical build. You can run them once
or regularly. Track the generated files in version control.

You do not need to add `mkdocs-gen-files` to your project dependencies. Use
`uvx` to run a script:

``` sh
uvx --with mkdocs-gen-files python scripts/gen_ref_pages.py
```

This method requires a `mkdocs.yml` file. It does not work with `zensical.toml`.

## Compatibility roadmap

We are closing the remaining compatibility gaps for widely used MkDocs and
Material for MkDocs plugins. These statuses reflect our current priorities and
do not imply release dates.

### In progress

- [ ] [`social`][social]

### Planned

- [ ] [`optimize`][optimize]
- [ ] [`exclude`][exclude]
- [ ] [`privacy`][privacy]
- [ ] [`git-authors`][git-authors]
- [ ] [`git-committers`][git-committers]
- [ ] [`git-revision-date-localized`][git-revision-date-localized]
- [ ] [`audio`][audio]
- [ ] [`video`][video]

_Review our public [backlog] for additional plugins we may support later._

## Acknowledgements

We thank all plugin authors and contributors for building and maintaining the
MkDocs plugin ecosystem. Where Zensical provides native implementations, they
are bottom-up rewrites that reproduce the plugins' configuration and behavior
without using their original codebases.

[0.0.11]: https://github.com/zensical/zensical/releases/tag/v0.0.11
[0.0.22]: https://github.com/zensical/zensical/releases/tag/v0.0.22
[0.0.3]: https://github.com/zensical/zensical/releases/tag/v0.0.3
[0.0.30]: https://github.com/zensical/zensical/releases/tag/v0.0.30
[0.0.35]: https://github.com/zensical/zensical/releases/tag/v0.0.35
[0.0.40]: https://github.com/zensical/zensical/releases/tag/v0.0.40
[0.0.41]: https://github.com/zensical/zensical/releases/tag/v0.0.41
[0.0.47]: https://github.com/zensical/zensical/releases/tag/v0.0.47
[0.0.58]: https://github.com/zensical/zensical/releases/tag/v0.0.58
[0.0.62]: https://github.com/zensical/zensical/releases/tag/v0.0.62
[0.0.64]: https://github.com/zensical/zensical/releases/tag/v0.0.64
[0.0.65]: https://github.com/zensical/zensical/releases/tag/v0.0.65
[audio]: https://github.com/jfcmontmorency/mkdocs-audio
[autorefs]: https://mkdocstrings.github.io/autorefs/
[awesome-nav]: https://lukasgeiter.github.io/mkdocs-awesome-nav/
[backlog]: https://github.com/orgs/zensical/projects/2/views/1
[blog]: https://squidfunk.github.io/mkdocs-material/plugins/blog/
[Blog]: ../../setup/blog.md
[callouts]: https://github.com/sondregronas/mkdocs-callouts
[compatibility roadmap]: #compatibility-roadmap
[create a change request]: https://github.com/zensical/zensical/issues/new/choose
[exclude]: https://github.com/apenwarr/mkdocs-exclude
[git-authors]: https://timvink.github.io/mkdocs-git-authors-plugin/
[git-committers]: https://github.com/byrnereese/mkdocs-git-committers-plugin
[git-revision-date-localized]: https://timvink.github.io/mkdocs-git-revision-date-localized-plugin/
[glightbox]: https://blueswen.github.io/mkdocs-glightbox/
[glob patterns]: https://docs.rs/globset/latest/globset/#syntax
[literate-nav]: https://oprypin.github.io/mkdocs-literate-nav/
[macros]: https://mkdocs-macros-plugin.readthedocs.io/en/latest/
[markdown-exec]: https://github.com/pawamoy/markdown-exec
[meta]: https://squidfunk.github.io/mkdocs-material/plugins/meta/
[minify]: https://github.com/byrnereese/mkdocs-minify-plugin
[mkdocs-gen-files]: https://oprypin.github.io/mkdocs-gen-files/
[mkdocstrings]: https://mkdocstrings.github.io/
[not_in_nav]: https://github.com/zensical/backlog/issues/63
[offline]: https://squidfunk.github.io/mkdocs-material/plugins/offline/
[optimize]: https://squidfunk.github.io/mkdocs-material/plugins/optimize/
[privacy]: https://squidfunk.github.io/mkdocs-material/plugins/privacy/
[pymdownx quotes]: https://facelessuser.github.io/pymdown-extensions/extensions/quotes/
[Redirects]: ../../setup/redirects.md
[rss]: https://guts.github.io/mkdocs-rss-plugin/
[site language]: ../../setup/language.md#site-language
[site search]: ../../setup/search.md
[social]: https://squidfunk.github.io/mkdocs-material/plugins/social/
[table-reader]: https://timvink.github.io/mkdocs-table-reader-plugin/
[tags]: https://squidfunk.github.io/mkdocs-material/plugins/tags/
[Tags configuration]: ../../setup/tags.md#configuration
[Versioning with mike]: mike.md
[video]: https://github.com/soulless-viewer/mkdocs-video
[Zensical Studio]: https://zensical.org/studio/
