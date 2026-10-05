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

- **Unsupported plugins:** Configuration for plugins not listed under
  [Supported plugins](#supported-plugins) is silently ignored. Zensical does
  not import or run them.
- **Ignored settings:** Settings marked as ignored in a plugin's differences
  are silently ignored, without value validation or warnings.
- **Unknown settings:** Supported plugins reject other unknown settings
  with a configuration error.

Review each plugin's differences before migrating. Ignored settings can remain
in a shared MkDocs configuration, but have no effect in Zensical.

The tables below cover common settings; follow the documentation links for
details. [Zensical Studio] provides completions and validation for supported
plugins in both `zensical.toml` and `mkdocs.yml`.

## Supported plugins

Plugins are listed alphabetically. Most implementations require no additional
installation. Each entry summarizes common settings, links to further
documentation, and links to the Zensical release in which support was added.

!!! question "The plugin I need isn't listed. What can I do?"

    Check our [compatibility roadmap] and public [backlog] to see whether support
    is already planned. If it isn't, [create a change request] for the missing
    plugin in Zensical's issue tracker.

<div class="mdx-plugins" markdown>

!!! info "Report issues to Zensical"

    Zensical reimplements MkDocs plugin behavior natively or integrates the original
    package where installation is required. If you encounter an issue when
    using these plugins with Zensical, [report it to us][report an issue].

### `api-autonav`

_Since [0.0.66]_

Generate API reference pages and navigation for Python modules with
[`mkdocstrings`](#mkdocstrings).

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable API reference generation. |
| `modules` | `[]` | Python files or package directories, relative to the project root. |
| `module_options` | `{}` | Handler options for modules matched by regular expressions. |
| `exclude` | `[]` | Module names or patterns to exclude; prefix regular expressions with `re:`. |
| `nav_section_title` | `API Reference` | Title of the generated navigation section. |
| `api_root_uri` | `reference` | Directory for generated API reference pages. |
| `exclude_private` | `true` | Exclude modules whose names start with an underscore. |
| `show_full_namespace` | `false` | Show full module names in navigation. |

</div>

**Differences**:

- `api_root_uri` must name a nonempty relative subdirectory. Empty strings, `.`, `./api`, absolute paths, and paths with `..` components are not supported.
- Source discovery skips child symlinks. It always excludes `.git`, `.venv`, `venv`, `__pycache__`, and the output and cache directories, regardless of include settings.

For more information, see the [plugin documentation][api-autonav].

---

### `audio`

_Since [0.0.68]_

Embed audio files with native browser playback controls. Configure the plugin as
`mkdocs-audio`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.mkdocs-audio]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - mkdocs-audio
    ```

Use the configured marker as the image's alternative text:

``` markdown
![type:audio](assets/audio.mp3)
```

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable audio embeds. |
| `mark` | `type:audio` | Image alternative text that identifies an audio embed. |
| `audio_type` | `mp3` | Audio MIME subtype, such as `mp3`, `wav`, or `ogg`. |
| `audio_controls` | `true` | Show playback controls. |
| `audio_autoplay` | `false` | Request automatic playback, subject to browser policies. |
| `audio_loop` | `false` | Repeat playback. |
| `css_style` | `{"width": "100%"}` | CSS properties applied to the audio element. |

</div>

For more information, see the [plugin documentation][audio].

---

### `autoapi`

_Since [0.0.66]_

Discover source files and generate API reference pages with
[`mkdocstrings`](#mkdocstrings).

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable automatic API documentation. |
| `autoapi_dir` | `.` | Source directory, relative to the project root. |
| `autoapi_file_patterns` | `["*.py", "*.pyi"]` | File patterns to include. |
| `autoapi_ignore` | `[]` | File patterns to exclude. |
| `autoapi_root` | `autoapi` | Directory for generated API reference pages. |
| `autoapi_add_nav_entry` | `true` | Add generated pages to navigation; a string sets the section title. |
| `autoapi_generate_api_docs` | `true` | Generate API reference pages. |
| `autoapi_keep_files` | `false` | Keep generated Markdown files in the documentation directory. |

</div>

**Differences**:

- `autoapi_root` must name a nonempty relative subdirectory. Empty strings, `.`, `./api`, absolute paths, and paths with `..` components are not supported.
- Source discovery skips child symlinks. It always excludes `.git`, `.venv`, `venv`, `__pycache__`, and the output and cache directories, regardless of include settings.

For more information, see the [plugin documentation][autoapi].

---

### `autorefs`

_Since [0.0.22]_

Link to headings and API objects across pages with `[text][identifier]`.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable automatic cross-references. |
| `resolve_closest` | `false` | Resolve duplicate identifiers to the closest page. |
| `link_titles` | `auto` | Link tooltips: `true`, `false`, `external`, or `auto`. With `auto`, only external links get tooltips when `navigation.instant.preview` is enabled; otherwise all links do. |
| `strip_title_tags` | `auto` | Strip HTML from tooltips: `true`, `false`, or `auto`. With `auto`, HTML is preserved when `content.tooltips` is enabled and stripped otherwise. |

</div>

For more information, see the [plugin documentation][autorefs].

---

### `awesome-nav`

_Since [0.0.58]_

Customize navigation with a `.nav.yml` file in each documentation directory.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable directory-based navigation. |
| `filename` | `.nav.yml` | Name of the navigation configuration files. |
| `logs` | `{}` | Override message levels: `info`, `warning`, or `error`. Dotted settings below are nested here. |
| `logs.nav_override` | `warning` | Message when generated navigation replaces `nav`. |
| `logs.root_title` | `warning` | Message when `title` is set in the root navigation file. |
| `logs.root_hide` | `warning` | Message when `hide` is set in the root navigation file. |
| `logs.no_matches` | `warning` | Message when a glob pattern matches nothing. |

</div>

**Differences**:

- Extglob expressions are not supported; regular [glob patterns] are supported.
- MkDocs' [`not_in_nav`][not_in_nav] setting is not supported.

For more information, see the [plugin documentation][awesome-nav].

---

### `blog`

_Since [0.0.64]_

Publish posts with archives, categories, author profiles, and pagination.
See [Blog] for setup and post metadata.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable the blog. |
| `blog_dir` | `blog` | Blog directory, relative to `docs_dir`. |
| `post_dir` | `{blog}/posts` | Posts directory, relative to `docs_dir`. |
| `post_url_format` | `{date}/{slug}` | Post URL template: `{date}`, `{slug}`, `{categories}`, `{file}`. |
| `post_excerpt_separator` | `<!-- more -->` | Marker separating the excerpt from the rest of a post. |
| `authors_profiles` | `false` | Generate author profile pages. |
| `pagination_per_page` | `10` | Posts per page. |
| `draft_on_serve` | `true` | Include drafts during preview. |

</div>

**Differences**:

- Custom Python callables aren't supported; built-in strategies are.

For more information, see the [plugin documentation][blog].

---

### `callouts`

_Since [0.0.62]_

Render Obsidian-style callouts as admonitions.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable callouts. |

</div>

**Differences**:

- The plugin entry enables [`pymdownx.quotes`][pymdownx quotes] with `callouts: true`.
- Zensical ignores all three plugin settings: `aliases`, `breakless_lists`, and `title_from_first_bold`.

For more information, see [plugin documentation][callouts].

---

### `exclude`

_Since [0.0.67]_

Exclude files from the generated site by path pattern.

Patterns match source paths relative to `docs_dir`. Exclusion also applies to generated API pages and theme assets. Regular expressions match from the start of each path.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable file exclusion. |
| `glob` | `[]` | Glob patterns for paths to exclude. |
| `regex` | `[]` | Regular expressions for paths to exclude. |

</div>

**Differences**:

- Globs use [glob patterns] syntax, as in `awesome-nav`. `**` matches directories recursively, and `{a,b}` selects alternatives. As in the original exclude plugin, `*` also matches directory separators.
- Backslashes escape glob characters. Use `/` as the directory separator.
- Invalid glob patterns are rejected.

For more information, see [plugin documentation][exclude].

---

### `gh-admonitions`

_Since [0.0.67]_

Render GitHub-style alerts as admonitions. See [GitHub callouts] for the supported syntax.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable GitHub-style admonitions. |

</div>

**Differences**:

- The plugin entry enables [`pymdownx.quotes`][pymdownx quotes] with `callouts: true`.
- `important` and `caution` use the default admonition style. See [GitHub callouts] for custom styling.

For more information, see [plugin documentation][gh-admonitions].

---

### `glightbox`

_Since [0.0.35]_

Open images in a lightbox.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable the lightbox. |
| `auto` | `true` | Enable the lightbox for images automatically. |
| `manual` | `null` | When `true`, only enable images marked with `on-glb`; overrides `auto`. |
| `auto_themed` | `false` | Group images by their light or dark theme variant. |
| `auto_caption` | `false` | Use image alt text as the caption. |
| `caption_position` | `bottom` | Caption position: `bottom`, `top`, `left`, or `right`. |
| `skip_classes` | `[]` | Additional image classes to exclude from the lightbox. |

</div>

**Differences**:

- Zensical ignores `touchNavigation`, `loop`, `effect`, `slide_effect`, `zoomable`, `draggable`, `background`, and `shadow`.

For more information, see [plugin documentation][glightbox].

---

### `literate-nav`

_Since [0.0.58]_

Define navigation with Markdown lists of links.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable Markdown-based navigation. |
| `nav_file` | `SUMMARY.md` | Name of the navigation file. |
| `implicit_index` | `false` | Include each directory's index page automatically. |
| `tab_length` | `4` | Spaces per indentation level in navigation lists. |
| `markdown_extensions` | `[]` | Additional Markdown extensions for parsing navigation files. |

</div>

For more information, see [plugin documentation][literate-nav].

---

### `llmstxt`

_Since [0.0.67]_

An `llms.txt` index and Markdown copies of selected pages are generated.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable `llms.txt` generation. |
| `sections` | Required | Named sections and source pages to include; page paths can contain glob patterns. |
| `markdown_description` | `null` | Markdown description added after the site description. |
| `base_url` | `site_url` | Base URL used for links to generated Markdown pages. |
| `full_output` | `null` | Path of an optional file containing the full text of selected pages. |
| `autoclean` | `true` | Clean generated HTML before conversion to Markdown. |

</div>

**Differences**:

- With `content.action.copy` in the theme's `features` list, a "Copy as Markdown" button is shown on pages with a Markdown equivalent.
- Zensical silently ignores `preprocess`. Custom Python preprocessing functions are not run.
- mkdocstrings source listings and empty code elements are omitted, even with `autoclean: false`.
- `full_output` must be a relative file path inside `site_dir`, different from `llms.txt`. Absolute paths and empty, `.` or `..` path components are rejected.

For more information, see [plugin documentation][llmstxt].

---

### `macros`

_Since [0.0.40]_

Use Jinja variables, filters, and Python macros in Markdown.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable macros. |
| `module_name` | `main` | Local Python module defining macros. |
| `modules` | `[]` | Importable packages providing additional macros. |
| `include_yaml` | `[]` | YAML files providing variables. |
| `include_dir` | `""` | Directory for Jinja includes, relative to the project root. |
| `render_by_default` | `true` | Render Jinja on all pages unless their metadata overrides it. |
| `on_error_fail` | `false` | Stop the build if rendering fails. |
| `on_undefined` | `keep` | Undefined variables: `keep` preserves them; `strict` raises an error. |

</div>

**Differences**:

- Referenced Python and YAML files must be inside the project directory.

For more information, see [plugin documentation][macros].

---

### `markdown-exec`

_Since [0.0.47]_

Execute fenced code blocks and embed their output.

Install with:

``` sh
pip install "markdown-exec[ansi]"
```

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable code block execution. |
| `ansi` | `false` | ANSI output support: `true`, `false`, `auto`, `off`, or `required`; enabled modes require `pygments-ansi-color`. |
| `languages` | `null` | Languages to execute; unset enables all supported languages, `[]` disables execution. |

</div>

For more information, see [plugin documentation][markdown-exec].

---

### `meta`

_Since [0.0.58]_

Apply shared front matter to pages in a directory and its subdirectories.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable shared metadata. |
| `meta_file` | `.meta.yml` | Metadata file name. |

</div>

**Differences**:

- Custom YAML tags are not supported in metadata files.

For more information, see [plugin documentation][meta].

---

### `mike`

_Since [0.0.30]_

Publish and switch between documentation versions.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable mike integration. |
| `version_selector` | `true` | Show the version selector. |
| `alias_type` | `symlink` | Alias type: `symlink`, `redirect`, or `copy`. |
| `deploy_prefix` | `""` | Directory prefix for versioned deployments. |
| `canonical_version` | `null` | Version used for canonical URLs. |
| `redirect_template` | `null` | Custom template for redirect aliases. |

</div>

**Differences**:

- Zensical requires the compatible fork described in the versioning guide.
- Zensical ignores `css_dir` and `javascript_dir` because it provides the version selector assets.

For more information, see [Versioning with mike] for installation and usage.

---

### `minify`

_Since [0.0.58]_

Reduce the size of generated HTML, JavaScript, and CSS.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable minification. |
| `minify_html` | `false` | Minify generated HTML. |
| `minify_js` | `false` | Minify files listed in `js_files`. |
| `minify_css` | `false` | Minify files listed in `css_files`. |
| `js_files` | `[]` | JavaScript files to minify. |
| `css_files` | `[]` | CSS files to minify. |
| `minify_inline_js` | `false` | Minify JavaScript inside `<script>` elements. |
| `minify_inline_css` | `false` | Minify CSS inside `<style>` elements. |

</div>

**Differences**:

- Assets that cannot be parsed retain their original content instead of crashing
  the build.
- `minify_inline_js` and `minify_inline_css` are Zensical-only options. They minify JavaScript in `<script>` elements and CSS in `<style>` elements.

For more information, see [plugin documentation][minify].

---

### `mkdocstrings`

_Since [0.0.11]_

Generate API documentation from source code.

Install the Python handler with:

``` sh
pip install mkdocstrings-python
```

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable API documentation. |
| `default_handler` | `python` | Handler used when a directive does not specify one. |
| `handlers` | `{}` | Handler configuration. |
| `custom_templates` | `null` | Directory containing custom handler templates. |
| `enable_inventory` | `null` | Generate `objects.inv`; unset follows the handlers' inventory settings. |
| `locale` | `en` | Language used by handlers. |

</div>

**Differences**:

- Sources outside the project directory are not watched during preview.
- Zensical ignores `watch`.

For more information, see [plugin documentation][mkdocstrings].

---

### `offline`

_Since [0.0.3]_

Make the site searchable when opened directly from the file system.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable offline search support. |

</div>

For more information, see [plugin documentation][offline].

---

### `redirects`

_Since [0.0.58]_

Keep old links working when pages or sections move.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable redirects. |
| `redirect_maps` | `{}` | Map old paths to new paths or URLs. |

</div>

**Differences**:

- Zensical supports anchor-based redirects for moving sections and splitting
  pages.

For more information, see [Redirects] for examples.

---

### `rss`

_Since [0.0.65]_

Generate RSS and JSON feeds for new and updated pages.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable feed generation. |
| `feed_title` | `site_name` | Feed title; defaults to the site name. |
| `length` | `20` | Maximum entries in each feed. |
| `match_path` | `.*` | Regular expression selecting page paths to include. |
| `abstract_chars_count` | `160` | Maximum summary length; `-1` includes the full content. |
| `date_from_meta` | Git dates | Metadata fields and formats for creation and update dates. |

</div>

**Differences**:

- Zensical ignores `cache_dir` and does not fetch remote images for RSS
  enclosures.
- Zensical ignores `use_material_social_cards`; generated social cards are not
  used.

For more information, see [plugin documentation][rss].

---

### `social`

_Since [0.0.67]_

Generate social cards and Open Graph metadata for pages. Set `site_url` to link
the generated cards in page metadata. Page front matter can override `cards`,
`cards_layout`, and `cards_layout_options` under `social`.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable social card generation. |
| `cards` | `true` | Generate cards for pages by default. |
| `cards_dir` | `assets/images/social` | Site directory for generated cards. |
| `cards_layout` | `default` | Card layout to render. |
| `cards_layout_dir` | `layouts` | Project directory for custom layouts. |
| `cards_layout_options` | `{}` | Values passed to card layouts. |
| `cards_include` | `[]` | Source path patterns selecting pages for cards. |
| `cards_exclude` | `[]` | Source path patterns excluding pages from cards. |
| `cache` | `true` | Cache generated cards between builds. |
| `cache_dir` | `.cache/plugin/social` | Project directory for cached cards. |

</div>

For more information, see [plugin documentation][social].

---

### `search`

_Since [0.0.3]_

Add full-text search to your documentation.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable search. |
| `separator` | Built-in pattern | Regular expression splitting text at whitespace and punctuation. |

</div>

**Differences**:

- Search is enabled by default, even when it isn't listed under `plugins`.
- `enabled` and `separator` are the only plugin settings that affect Zensical search.
- Zensical ignores `lang`. It takes the search language from [`theme.language`][site language].
- Zensical ignores `pipeline`. It has no equivalent because Zensical's search engine does not use the Lunr pipeline.
- Zensical ignores `fields`, `indexing`, `jieba_dict`, `jieba_dict_user`, `min_search_length`, and `prebuild_index`.

For more information, see [site search].

---

### `section-index`

_Since [0.0.3]_

Zensical provides section-index behavior natively. You can keep the `section-index` plugin entry in a shared configuration, but Zensical ignores the entry.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| Configuration | — | No plugin settings are required. |

</div>

For more information, see [Section index pages].

---

### `table-reader`

_Since [0.0.41]_

Embed data files as Markdown tables with reader calls such as
`{{ read_csv('table.csv') }}`.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable table readers. |
| `data_path` | `.` | Base directory for data files. |
| `allow_missing_files` | `false` | Continue building when a table file is missing. |
| `select_readers` | All supported readers | Readers to enable. |

</div>

**Differences**:

- `data_path` and all table files must be inside the project directory.
- Reader call arguments must be Python literals. Names, expressions, and `**kwargs` expansion are not supported.

For more information, see [plugin documentation][table-reader].

---

### `tags`

_Since [0.0.58]_

Categorize pages and generate tag listings.

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable tags. |
| `tags` | `true` | Show tags on pages. |
| `tags_allowed` | `[]` | Allowed tags; an empty list allows all. |
| `tags_hierarchy` | `false` | Enable hierarchical tags. |
| `tags_sort_by` | `tag_name` | Tag sorting strategy. |
| `listings` | `true` | Generate listings where `<!-- material/tags -->` is placed. |
| `listings_sort_by` | `item_title` | Sort pages within listings. |
| `listings_toc` | `true` | Add listing tags to the table of contents. |

</div>

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

For more information, see [Tags configuration] and the [plugin documentation][tags].

---

### `video`

_Since [0.0.68]_

Embed remote players using an iframe or video files with native browser playback
controls. Configure the plugin as `mkdocs-video`; set `is_video` to `true` for
native video playback:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.mkdocs-video]
    is_video = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - mkdocs-video:
          is_video: true
    ```

Use the configured marker as the image's alternative text:

``` markdown
![type:video](assets/video.mp4)
```

<div class="mdx-plugin-settings" markdown>

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `enabled` | `true` | Enable video embeds. |
| `mark` | `type:video` | Image alternative text that identifies a video embed. |
| `is_video` | `false` | Use a native video element instead of an iframe. |
| `video_type` | `mp4` | Native video MIME subtype, such as `mp4`, `webm`, or `ogg`. |
| `video_controls` | `true` | Show native video playback controls. |
| `video_autoplay` | `false` | Request automatic native video playback, subject to browser policies. |
| `video_loop` | `false` | Repeat native video playback. |
| `video_muted` | `false` | Mute native video playback. |
| `css_style` | `{"position": "relative", "width": "100%", "height": "22.172vw"}` | CSS properties applied to the iframe or video element. |

</div>

For more information, see the [plugin documentation][video].

</div>

## Unsupported plugins

### `gen-files`

Zensical does not currently support [`gen-files`][gen-files].

To create API reference pages automatically, use [`autoapi`](#autoapi) or [`api-autonav`](#api-autonav). Both generate API reference pages and navigation with `mkdocstrings`.

For other uses, run the generation scripts separately from the Zensical build. You can run them once or regularly. Track the generated files in version control.

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

- [ ] [`optimize`][optimize]

### Planned

- [ ] [`privacy`][privacy]
- [ ] [`git-authors`][git-authors]
- [ ] [`git-committers`][git-committers]
- [ ] [`git-revision-date-localized`][git-revision-date-localized]

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
[0.0.66]: https://github.com/zensical/zensical/releases/tag/v0.0.66
[0.0.67]: https://github.com/zensical/zensical/releases/tag/v0.0.67
[0.0.68]: https://github.com/zensical/zensical/releases/tag/v0.0.68
[api-autonav]: https://github.com/tlambert03/mkdocs-api-autonav#configuration
[audio]: https://github.com/jfcmontmorency/mkdocs-audio
[autoapi]: https://mkdocs-autoapi.readthedocs.io/en/latest/usage/
[autorefs]: https://mkdocstrings.github.io/autorefs/
[awesome-nav]: https://lukasgeiter.github.io/mkdocs-awesome-nav/
[backlog]: https://github.com/orgs/zensical/projects/2/views/1
[blog]: https://squidfunk.github.io/mkdocs-material/plugins/blog/
[Blog]: ../../setup/blog.md
[callouts]: https://github.com/sondregronas/mkdocs-callouts
[compatibility roadmap]: #compatibility-roadmap
[create a change request]: https://github.com/zensical/zensical/issues/new/choose
[exclude]: https://github.com/apenwarr/mkdocs-exclude
[gen-files]: https://oprypin.github.io/mkdocs-gen-files/
[gh-admonitions]: https://pypi.org/project/mkdocs-github-admonitions-plugin/
[git-authors]: https://timvink.github.io/mkdocs-git-authors-plugin/
[git-committers]: https://github.com/byrnereese/mkdocs-git-committers-plugin
[git-revision-date-localized]: https://timvink.github.io/mkdocs-git-revision-date-localized-plugin/
[GitHub callouts]: ../../authoring/admonitions.md#github-callouts
[glightbox]: https://blueswen.github.io/mkdocs-glightbox/
[glob patterns]: https://docs.rs/globset/latest/globset/#syntax
[literate-nav]: https://oprypin.github.io/mkdocs-literate-nav/
[llmstxt]: https://pawamoy.github.io/mkdocs-llmstxt/
[macros]: https://mkdocs-macros-plugin.readthedocs.io/en/latest/
[markdown-exec]: https://github.com/pawamoy/markdown-exec
[meta]: https://squidfunk.github.io/mkdocs-material/plugins/meta/
[minify]: https://github.com/byrnereese/mkdocs-minify-plugin
[mkdocstrings]: https://mkdocstrings.github.io/
[not_in_nav]: https://github.com/zensical/backlog/issues/63
[offline]: https://squidfunk.github.io/mkdocs-material/plugins/offline/
[optimize]: https://squidfunk.github.io/mkdocs-material/plugins/optimize/
[privacy]: https://squidfunk.github.io/mkdocs-material/plugins/privacy/
[pymdownx quotes]: https://facelessuser.github.io/pymdown-extensions/extensions/quotes/
[Redirects]: ../../setup/redirects.md
[report an issue]: https://zensical.org/contributing/bug-reports/
[rss]: https://guts.github.io/mkdocs-rss-plugin/
[Section index pages]: ../../setup/navigation.md#section-index-pages
[site language]: ../../setup/language.md#site-language
[site search]: ../../setup/search.md
[social]: https://squidfunk.github.io/mkdocs-material/plugins/social/
[table-reader]: https://timvink.github.io/mkdocs-table-reader-plugin/
[tags]: https://squidfunk.github.io/mkdocs-material/plugins/tags/
[Tags configuration]: ../../setup/tags.md#configuration
[Versioning with mike]: mike.md
[video]: https://github.com/soulless-viewer/mkdocs-video
[Zensical Studio]: https://zensical.org/studio/
