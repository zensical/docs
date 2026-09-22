---
icon: lucide/newspaper
tags:
  - Setup
  - Blog
  - Information architecture
---

# Blog

Zensical adds first-class support for publishing a blog, either alongside your
documentation or as the main part of your site. It generates a view of the
latest posts, archives, category pages, author profiles, configurable
pagination, and more.

## How it works

Zensical scans the configured [posts directory] for Markdown files and uses
them to generate paginated views.[^1] With the default configuration, a project
uses the following layout:

[^1]:
    Views are generated pages: the blog entry point that lists the latest
    posts, as well as archive, category, and author-profile pages that list
    related posts in chronological order.

``` { .sh .no-copy }
.
├─ docs/
│  └─ blog/
│     ├─ posts/
│     └─ index.md
└─ zensical.toml
```

The `blog/index.md` file is the entry point to the blog and becomes a paginated
view that lists posts in reverse chronological order. Zensical also generates
archive and category pages for subsets of posts, as well as author profiles
when they are enabled.

Post URLs are configurable and can include dates, categories, or custom slugs.
Rendered dates use the configured [site language]. Posts can be annotated with
metadata for dates, authors, categories, drafts, pinned posts, reading time,
and related links.

Posts can be organized in nested folders and can use the same Markdown syntax
and [authoring features] as every other page in the project.

!!! info "Migrating from Material for MkDocs"

    If you already use the Material for MkDocs blog plugin, you can keep your
    blog-related configuration and content. Zensical natively recognizes both
    `blog` and `material/blog` plugin entries, the default `blog/` directory,
    `.authors.yml`, and existing post metadata.

    Configured post URLs, archives, pagination, categories, author profiles,
    and other generated views retain their established behavior. No additional
    plugin package needs to be installed.

    If you use custom Python callables, review the [compatibility entry] before
    switching.

## Configuration

Enable blogging in your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.blog]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - blog
    ```

If navigation is generated automatically, there is nothing else to configure.
With explicit navigation, add only the blog entry point – not individual posts:

=== "`zensical.toml`"

    ``` toml
    [project]
    nav = [
      "index.md",
      { "Blog" = ["blog/index.md"] },
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    nav:
      - index.md
      - Blog:
          - blog/index.md
    ```

!!! info "Material for MkDocs compatibility"

    Zensical's current blogging support is a direct native port of the
    [Material for MkDocs blog]. It reproduces its configuration and behavior,
    which is why the original Material for MkDocs documentation is the
    authoritative reference for [configuration options] and [post metadata].

    More flexible blogging functionality designed specifically for Zensical is
    planned.

## Usage

### Writing your first post

Create a Markdown file anywhere inside `blog/posts/`. Posts can be organized in
nested folders because their URLs are derived from their title, date, and the
configured URL format rather than their source path:

``` { .sh .no-copy }
.
├─ docs/
│  └─ blog/
│     ├─ posts/
│     │  └─ hello-world.md
│     └─ index.md
└─ zensical.toml
```

Every post requires a creation date. Add it and any other metadata in the front
matter:

``` markdown
---
draft: true
date: 2026-09-22
categories:
  - Hello
  - World
---

# Hello world!

Welcome to our new blog.
```

Drafts are included during [preview] and excluded from normal builds by
default. Remove `draft: true` when the post is ready to publish. Dates can also
record when a post was updated:

``` yaml
date:
  created: 2026-09-22
  updated: 2026-09-24
```

Start the preview server to see the post in the blog, archive, and category
views.

#### Adding an excerpt

Blog views can show an excerpt instead of the complete post. Add the configured
[excerpt separator] after the introductory paragraphs:

``` markdown
# Hello world!

This introduction is shown in blog views.

<!-- more -->

The complete post continues here.
```

The content before the separator is used as the excerpt. Without a separator,
the whole post is used unless excerpts are configured as required.

#### Adding authors

Create `.authors.yml` in the blog directory and define each author under a
stable identifier:

``` yaml
authors:
  jane:
    name: Jane Doe
    description: Technical writer
    avatar: https://example.com/jane.png
```

Reference one or more identifiers in a post:

``` yaml
---
date: 2026-09-22
authors:
  - jane
---
```

Author details are rendered on posts and excerpts. Dedicated [author profiles]
can also be enabled. See [authors] for the complete author configuration.

#### Adding categories

Add one or more categories to a post to include it in generated category views:

``` yaml
---
date: 2026-09-22
categories:
  - Releases
  - Engineering
---
```

You can restrict posts to a predefined set of categories to catch spelling
mistakes during the build. See [categories] for the available settings.

#### Adding related links

Use the `links` property to render related links in the post sidebar. Link
paths are resolved from the documentation directory and use the same nested
structure as navigation:

``` yaml
---
date: 2026-09-22
links:
  - Getting started: get-started.md
  - Resources:
      - Project website: https://example.com
      - Reference: reference/index.md
---
```

Related links can point to pages, external sites, and specific page anchors.
See [related links] for the complete syntax.

#### Linking posts and assets

Link to a post through its Markdown source path. Zensical resolves the generated
URL automatically. For example, a page in the root of the documentation can
link to a post as follows:

``` markdown
[Hello world!](blog/posts/hello-world.md)
```

Links from posts to other pages work like ordinary Markdown links:

``` markdown
[Back to the blog](../index.md)
```

Assets stored beside or below posts are moved into the generated blog assets
directory, and links from posts and excerpts are rewritten to their published
locations.

Front matter can additionally define custom slugs, pinned posts, reading time,
draft behavior, and other properties. See [post metadata] for the complete
reference.

[author profiles]: https://squidfunk.github.io/mkdocs-material/plugins/blog/#config.authors_profiles
[authoring features]: ../authoring/markdown.md
[authors]: https://squidfunk.github.io/mkdocs-material/plugins/blog/#authors
[categories]: https://squidfunk.github.io/mkdocs-material/plugins/blog/#categories
[compatibility entry]: ../compatibility/mkdocs/plugins.md#blog
[configuration options]: https://squidfunk.github.io/mkdocs-material/plugins/blog/#configuration
[excerpt separator]: https://squidfunk.github.io/mkdocs-material/plugins/blog/#config.post_excerpt_separator
[Material for MkDocs blog]: https://squidfunk.github.io/mkdocs-material/plugins/blog/
[post metadata]: https://squidfunk.github.io/mkdocs-material/plugins/blog/#metadata
[posts directory]: https://squidfunk.github.io/mkdocs-material/plugins/blog/#config.post_dir
[preview]: ../usage/preview.md
[related links]: https://squidfunk.github.io/mkdocs-material/plugins/blog/#meta.links
[site language]: language.md#site-language
