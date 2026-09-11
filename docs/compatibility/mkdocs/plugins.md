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

Existing `mkdocs.yml` plugin configuration can remain unchanged. For example:

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

### `glightbox`

_Since [0.0.35]_

See [plugin documentation][glightbox] for usage and configuration.

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

---

### `minify`

_Since [0.0.58]_

See [plugin documentation][minify] for usage and configuration.

**Differences**:

- Assets that cannot be parsed retain their original content instead of crashing
  the build.

---

### `mkdocstrings`

_Since [0.0.11]_

Install with:

``` sh
pip install mkdocstrings-python
```

See [plugin documentation][mkdocstrings] for usage and configuration.

**Differences**:

- Backlinks are not supported.
- Sources outside the project directory are not watched during preview.

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

### `search`

_Since [0.0.3]_

Zensical doesn't load the search plugin provided by MkDocs or Material for
MkDocs. Both `search` and `material/search` configure Zensical's built-in [site
search] module.

**Differences**:

- Search is enabled by default, even when it isn't listed under `plugins`.
- `enabled` and `separator` are the only supported plugin options.
- The search language is taken from [`theme.language`][site language]. The
  `lang` plugin option isn't supported.
- Material for MkDocs' `pipeline` option has no equivalent, because Zensical's
  search engine doesn't use the Lunr pipeline. Remove it, along with any other
  unsupported options, when building with Zensical.

---

### `section-index`

_Since [0.0.3]_

No configuration options are required.

---

### `table-reader`

_Since [0.0.41]_

See [plugin documentation][table-reader] for usage and configuration.

---

### `tags`

_Since [0.0.58]_

See [plugin documentation][tags] for usage and configuration.

## Compatibility roadmap

We are closing the remaining compatibility gaps for widely used MkDocs and
Material for MkDocs plugins. These statuses reflect our current priorities and
do not imply release dates.

### In progress

- [ ] [`blog`][blog]
- [ ] [`social`][social]

### Planned

- [ ] [`rss`][rss]
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
[0.0.35]: https://github.com/zensical/zensical/releases/tag/v0.0.35
[0.0.40]: https://github.com/zensical/zensical/releases/tag/v0.0.40
[0.0.41]: https://github.com/zensical/zensical/releases/tag/v0.0.41
[0.0.47]: https://github.com/zensical/zensical/releases/tag/v0.0.47
[0.0.58]: https://github.com/zensical/zensical/releases/tag/v0.0.58
[audio]: https://github.com/jfcmontmorency/mkdocs-audio
[autorefs]: https://mkdocstrings.github.io/autorefs/
[awesome-nav]: https://lukasgeiter.github.io/mkdocs-awesome-nav/
[backlog]: https://github.com/orgs/zensical/projects/2/views/1
[blog]: https://squidfunk.github.io/mkdocs-material/plugins/blog/
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
[mkdocstrings]: https://mkdocstrings.github.io/
[not_in_nav]: https://github.com/zensical/backlog/issues/63
[offline]: https://squidfunk.github.io/mkdocs-material/plugins/offline/
[optimize]: https://squidfunk.github.io/mkdocs-material/plugins/optimize/
[privacy]: https://squidfunk.github.io/mkdocs-material/plugins/privacy/
[Redirects]: ../../setup/redirects.md
[rss]: https://guts.github.io/mkdocs-rss-plugin/
[site language]: ../../setup/language.md#site-language
[site search]: ../../setup/search.md
[social]: https://squidfunk.github.io/mkdocs-material/plugins/social/
[table-reader]: https://timvink.github.io/mkdocs-table-reader-plugin/
[tags]: https://squidfunk.github.io/mkdocs-material/plugins/tags/
[video]: https://github.com/soulless-viewer/mkdocs-video
[Zensical Studio]: https://zensical.org/studio/
