---
icon: lucide/file-box
tags:
  - Get started
  - Setup
---

# Create your site

After you've [installed] Zensical, you can bootstrap your project
documentation using the `zensical` executable. Go to the directory where you want
your project to be located and enter:

[installed]: get-started.md

``` sh
zensical new .
```

This creates the following structure:

``` text
.
├─ .github/workflows
│  └─ docs.yml
├─ docs/
│  ├─ index.md
│  └─ markdown.md
└─ zensical.toml
```

To learn more about the specific files and directories that are generated for
you, please consult the usage guide for the [`new` command][new].

[new]: usage/new.md#usage

## Configuration

Zensical comes with many [configuration options] that have sensible defaults,
which allows to build a documentation site with almost no configuration.
[`site_name`][site_name] is the only required setting:[^1]

  [^1]:
    [`site_name`][site_name] is currently required because MkDocs, the static
    site generator Zensical replaces, requires it. We plan to make this setting
    optional in a future release.

[site_name]: setup/basics.md#site_name
[site_url]: setup/basics.md#site_url

``` toml
[project]
site_name = "My site"
```

Unless you're building documentation for [offline usage], it's strongly
recommended to specify the [`site_url`][site_url] setting as well, since it's a
prerequisite for the following features:

- [Instant navigation]
- [Instant previews]
- [Custom error pages]

[configuration options]: setup/basics.md
[offline usage]: setup/offline.md
[Custom error pages]: customization.md#custom-error-pages
[Instant navigation]: setup/navigation.md#instant-navigation
[Instant previews]: setup/navigation.md#instant-previews

## Preview as you write

Zensical includes a web server, so you can preview your documentation site as
you write. The server will automatically rebuild the site when you make changes
to source files. Start it with:

``` sh
zensical serve
```

Point your browser to [localhost:8000][live preview] and you should see:

![Creating your site]
![Creating your site dark]

  [live preview]: http://localhost:8000
  [Creating your site]: assets/screenshots/creating-your-site.png#gh-light-mode-only
  [Creating your site dark]: assets/screenshots/creating-your-site-dark.png#gh-dark-mode-only

## Build your site

When you're finished editing, you can build a static site from your Markdown
files with:

```
zensical build
```

The contents of this directory make up your project documentation. There's no
need for operating a database or server, as it is completely self-contained.
The site can be hosted on [GitHub Pages], a CDN of your choice or your private
web space.

  [GitHub Pages]: publish-your-site.md#github-pages

If you intend to distribute your documentation as a set of files to be
read from a local filesystem rather than a web server (such as in a
`.zip` file), please consult the [offline usage] guide.
