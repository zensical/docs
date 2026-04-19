---
icon: lucide/notebook-text
tags:
  - Authoring
  - Compatibility
---

# Markdown

Markdown is a lightweight markup language for authoring text such as technical
documentation, blog posts, etc. It was created in 2004 by John Gruber, with
help from Aaron Swartz. Compared to alternatives like HTML or XML, it is easy to
write and read, using a lean and intuitive syntax.

Zensical uses [Python Markdown] for compatibility with Material for MkDocs.
Python Markdown aims to be a faithful and extensible port of [John
Gruber's original Markdown syntax][gruber]. For the most part, it is fully compatible
with the original specification, supporting the core features like headings,
lists, links, blockquotes, and inline formatting (e.g., bold and italics).

[gruber]: https://daringfireball.net/projects/markdown/

!!! note "Differences between Markdown dialects"
    There are [differences] in how implementers of Markdown have interpreted the
    original specification.

    In particular, Python Markdown requires an indentation by four spaces (or a
    tab) where other implementations only require two. This is relevant where
    list items consist of more than one paragraph but also in the case of
    admonitions, where the content needs to be indented by four spaces.

    Another behavior is that Python Markdown does not start a new list when the
    list symbol changes, for example, from "*" to "-". CommonMark, for example,
    would [start a new list].

[differences]: https://python-markdown.github.io/#differences
[start a new list]: https://spec.commonmark.org/0.31.2/#lists

Both Python Markdown itself and the [Python Markdown Extensions] that Zensical
also supports provide extensions to the core Markdown language to cater for the
needs of technical writers who want to produce clear, compelling, and visually
attractive documentation.

Supporting the same syntax for content is a key component in our approach to
ensure compatibility with Material for MkDocs and to then evolve Zensical from
that point of departure. See [our roadmap] and [compatibility pages] for details.

[Python Markdown]: https://python-markdown.github.io/
[Python Markdown Extensions]: https://facelessuser.github.io/pymdown-extensions/
[our roadmap]: https://zensical.org/about/roadmap/
[compatibility pages]: https://zensical.org/compatibility/

!!! info "Future development"
    We are currently actively exploring the possibility of adding support for
    [CommonMark] with GitHub-flavored Markdown extensions as well as extended
    authoring options using a component system.

    Moving away from a Python-based Markdown implementation will also offer
    significant performance advantages and improve tooling support as CommonMark
    has much wider adoption than Python Markdown.

    We will provide migration paths that will allow you to migrate your content
    to CommonMark when Zensical's support for it has matured and when your team
    is ready to migrate.

[CommonMark]: https://commonmark.org/

## Learning Markdown

The [original description of Markdown][gruber] by John Gruber is still a good
starting point if you are unfamiliar with Markdown syntax. The [Markdown Guide]
is another great resource.

[Markdown Guide]: https://www.markdownguide.org/

## Linking between pages

When adding links to other pages always use related links to the corresponding
Markdown files instead of linking to the HTML that will be produced. Zensical
will translate them to the correct links to the target. Crucially, it will
produce the correct link to an HTML file or a link ending with a directory if
[`use_directory_urls`][dirurls] is being used.

[dirurls]: ../setup/basics.md#use_directory_urls

In the future, Zensical will support output formats other than HTML and when
this happens, links that point to the Markdown pages will still work, while
links entered into the content that point directly to a HTML page will not.

Also, when using relative links, your site can move to a new `site_url` without
any changes. Resist the urge to use absolute links. Absolute links may work on
your local machine but may break on a production server.

## Page title

Zensical produces a page title for each page. It uses, in order of priority:

1. a title defined for the page in the `nav` configuration setting.
2. a title defined in the front-matter of the page.
3. a first-level Markdown header in the page content
4. the base name of the Markdown file

So, explicitly defined navigation takes the highest priority, followed by an
explicitly defined page title, followed by a title derived from the first level
one Markdown header. If none of these are available, the filename is used as a
fallback.

!!! warning "Temporary limitation"

    The order above applies to page titles in navigation.

    There's one case where Zensical currently does not behave exactly like MkDocs: if you specify a `nav` setting in configuration, but don't specify `# Page title` in your Markdown files, MkDocs will use the navigation title, whereas Zensical will use the base name of the Markdown file as the `h1` of the page.

    ---

    We're currently redesigning navigation, and will address this issue as part of that work. [ZAP 001] outlines behavior of page titles and their use cases. In particular, we are looking to preserve markup in the title, which MkDocs
    strips out. Any re-design will include migration paths that avoid costly re-work.

  [ZAP 001]: https://zensical.org/spark/proposals/zap-001-page-titles/
