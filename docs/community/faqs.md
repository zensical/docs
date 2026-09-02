---
icon: lucide/message-circle-question-mark
---

# Frequently asked questions

!!! tip "Question not answered...?"

    We would like to thank all users who have got in touch with us and shared
    the questions they have about Zensical and about moving from Material for
    MkDocs to Zensical. If you find that you have questions that should be
    covered here, feel free to reach out to us at
    [hello@zensical.org](mailto:hello@zensical.org) or post the question on
    the [quick-thoughts] channel on Discord.

## Troubleshooting

If you ever encounter any problems with Zensical, especially after upgrading to
a new version, you may want to use the `--clean` option to clear the build cache
before looking elsewhere.

## Compatibility and transition

### When can I migrate from Material for MkDocs?

Zensical supports the complete Material for MkDocs settings surface and provides
a classic theme variant with the same HTML structure. Existing CSS and
JavaScript customizations can therefore continue to work. Before changing a
production workflow, follow [Migrate from MkDocs] and check any [MkDocs
plugins] used by the project.

### Should I convert my `mkdocs.yml` to `zensical.toml`?

Existing MkDocs projects can keep their `mkdocs.yml`; converting the file is not
required to build them with Zensical. For new projects, we recommend
`zensical.toml`. See [configuration and project structure] for the differences.

### Can I use Zensical in production since it is a 0.0.x release?

The versioning is primarily technical – Zensical is ready for production use,
and we continue to improve it carefully.

We're still making significant changes to Zensical's API, which is why 0.0.x
versioning is the correct choice. While the code changes a lot, we keep
user-facing changes to a minimum, so we will not break your configuration or use
of the CLI. There's currently no ETA for a 1.0.0 release.

### Will Zensical support plugins?

Zensical provides native implementations of the MkDocs plugins listed in the
[plugin support] guide. Most are built in and recognize the original plugin
configuration; integrations that require the original package include
installation instructions. A public API for native Zensical modules is planned
separately and is not required to use these compatibility implementations.

### When will an MkDocs plugin I use be supported?

Check [plugin support] for the current list and Zensical-specific differences.
If the plugin isn't listed, check the public [backlog] to see whether support is
already planned or create a new [change request].

### Why do you call them "modules" and not "plugins"?

We use "plugin" for MkDocs plugins and the compatibility implementations that
recognize their configuration. "Module" refers to Zensical's future native
extension model. That public module API is not available yet, so compatibility
support should not be read as a promise that an MkDocs plugin can run as a
native Zensical module.

### Can I use any Markdown extension?

Markdown extensions work in Zensical as they do in MkDocs since we use the same
Python Markdown parser. You just need to install the Markdown extension into
your Python (virtual) environment and [configure it].

### Why can I not use absolute links with Zensical?

The use of absolute links has always been discouraged as they can break if a
site is moved or used in offline mode. In MkDocs, the recommended setting for
link validation is to warn about absolute links.  Markdown tooling may or may
not work well with absolute links. Github, in particular, will not handle
absolute links in its Markdown previews.

When linking between pages, relative links allow sections to move as a whole
without breaking links within the section. Of course, they break when pages move
relative to each other. Neither absolute nor relative links provide a model that
entirely avoids problems with moving (sets of) pages.

Zensical treats all links as relative at the moment. We appreciate that there
are use cases, such as referring to assets, where using relative links is
particularly onerous. However, using absolute links is not a good solution for
the reasons mentioned above. Instead of supporting absolute links, we are
considering other solutions that solve most if not all of the problems discussed
above.

### How long will you support Material for MkDocs?

See [Zensical today] for the current Material for MkDocs maintenance timeline.
The [compatibility overview] explains how to assess a project before migrating.

### How long will you support reading `mkdocs.yml` files?

Indefinitely. Reading existing MkDocs configuration is part of Zensical's
compatibility surface; new projects can use `zensical.toml`.

### How long will the "classic" theme variant be supported?

We are committed to supporting both variants for the time being. That is, we will
fix bugs but our development effort will go into the "modern" variant. Pull
requests that improve the variant without introducing breaking changes are, of
course, welcome.

At the same time, our work on a [component system] will make it easier to
author variants of the Zensical theme. This will make it easier for you to build
new theme variants and use them for your projects or share them with the
community.

### I am having problems with template overrides that use Python functions.

MiniJinja does not support calling Python functions as it is built entirely in
Rust. Check if there is a [filter] or [test] function that does what you need.
If you need to call a function that does not have an equivalent in MiniJinja but
that is likely to be needed by a number of Zensical users, please do let us know
via a [change request].

In our [roadmap], we already describe how we will be [introducing a component
system] to replace Python Markdown, its Markdown extensions, and the Jinja
templates.

### Will you support symbolic links?

At the moment, Zensical follows symbolic links only within directories that are
already part of a build. This restriction serves to prevent security issues such
as information disclosure or denial of service attacks. The semantics of
symlinks are also operating-system dependent and may be different if networked
file storage is being used. In addition, support for symbolic links would need
to deal with issues such as detecting cycles.

Therefore, we will only consider implementing support for symbolic links after
careful review of the use cases, consideration of alternatives, and review of the
possible implications of implementations.
Zensical will always be secure by default but we are considering configuration
options that will allow you to opt in to support for symbolic links.

## Installation

### I use a different package manager, can I use it to install Zensical?

The installation methods we support officially are with `pip` and `uv` since
both use the [PyPI] package index. This is the repository we officially release
to. We are not currently planning to use any other distribution channels as
supporting more would bind resources we need to implement our roadmap.

### If Zensical is written in Rust, why can't I `cargo install` it?

Since we have a large number of users currently using Material for MkDocs, we
need to offer them a migration path to Zensical. Supporting existing content
means that we need to continue using Python Markdown for the moment until we can
design a migration path for existing projects to move to CommonMark. Once we can
turn Python dependencies into optional ones, we can offer a pure Rust
experience.

## Zensical Spark, business model, and licensing

### Do I need to pay for extra features in Zensical?

No, the Zensical SSG is Free and Open Source Software - and "free" here can be
read as "free beer" and "freedom". You can use our software to build unlimited
sites of unlimited complexity, with unlimited teams, and unlimited numbers of
users. There is no Insiders program like Material for MkDocs had that ties the
release of features to funding goals, nor is there an open core model.

### Does Zensical Spark mean Zensical is not Open Source?

All software we publish is Open Source.[^infra] Zensical Spark is an optional
offering for organizations to get direct support and training as well as to take
part in the early phases of our design process to make sure all requirements are
met.

Zensical Spark allows us to sustain the pace of development of Zensical, which
benefits the whole community. Everyone can engage with the project, view bug
reports and change requests, just as in many other Open Source projects. We also
maintain a public [roadmap] and [backlog], which is something few Open Source
projects of comparable size manage to do. In addition, there is lively,
community-driven Discord server created for all Zensical users, where you can
seek help and participate in discussions.

### Why are backlog items locked?

The backlog is a community-facing overview of planned and ongoing work across
Zensical. It shows what features are on the list, what is currently being worked
on, and how change requests relate to each other.

While the backlog is managed by the Zensical team, it is provided as a service
to our users. To keep this overview clear and focused, backlog items themselves
are locked and can only be managed by the Zensical team.

If you would like to contribute to an item, you can always comment on the linked
issue in the relevant repository, as each backlog item references at least one
corresponding issue elsewhere.

### How does Zensical compare to other SSGs?

There are many possible dimensions by which different SSGs can be compared and
any comparison will be opinionated. We have set out in our [vision] what we are
focusing on: building an SSG that comes with batteries included and is easy to
get started with, that supports you and your projects throughout different
lifecycle stages, and adapts to projects of any scale and complexity by being
modular and scalable.

This combination of attributes is unique in the market, where there is all too
often a choice to make between ease of adoption and use on the one hand, and
capabilities on the other. We do not accept that this is a necessary tradeoff.
Zensical already demonstrates this and our [roadmap] goes far beyond
compatibility with Material for MkDocs.

At the same time, we are developing mechanisms that make it even easier to use
than Material for MkDocs, especially for teams of professionals. With Zensical,
we provide a powerful solution with minimal friction.

## Discord

Our Discord channel is a community-driven space we created for Zensical users,
where you can ask questions, share knowledge, and exchange ideas with fellow
community members. We do not monitor Discord for bug reports or change requests.
From time to time we drop in, but the main way to interact with us is through
GitHub Issues and Zensical Spark.

### I requested a feature on Discord but have not heard anything?

We can only accept feature requests through our official GitHub repositories. We
have set up a [process for requesting changes] using the GitHub issue tracker.
The change request template helps ensure that each request contains the
information we need to prioritize development and implement the feature.  Links
to our [backlog] make progress on requests transparent.

We encourage you to discuss ideas on Discord before submitting them. This allows
you to connect with others who may have similar needs and see if what you want
can already be achieved. Once ready, you or someone else should submit a change
request on GitHub to trigger our process.

## Other questions

### Why is Zensical not as fast as I had hoped?

We are currently using Python Markdown from within a Rust runtime. This limits
the performance gains we can currently unlock. Depending on the specifics of
your project, you may or may not see performance gains for cold-start builds,
such as CI builds. When using Zensical during editing, though, you should
see significant benefits from the differential builds and caching that Zensical
does. Instead of doing a full re-build for every change, Zensical builds only
what needs to be re-built.

### Why did you not just improve MkDocs?

The ecosystem was hampered by long-standing problems in MkDocs, both in its
architecture and implementation. It also became clear that there were diverging
visions for its future and that development had stalled, making it an increasing
supply chain risk. We have written two blog articles that outline why there was
no way forward based on MkDocs:

- [Transforming Material for MkDocs][1]
- [Zensical – A modern static site generator built by the Material for MkDocs team][2]

### Why did you build another SSG when there are so many?

There are several reasons for this. First and foremost, we are committed to our
existing community of users and to providing a migration path for them. This
would not have been possible with any other SSG and is why we chose to develop
Zensical in Rust+Python.

Equally important is that our vision is to provide a batteries-included system
that is extensible while offering excellent build performance. The combination
of authoring-, developer-, and user experience we are aiming for does not
currently exist in the market of SSGs. JavaScript-based SSGs suffer from many of
the same problems that MkDocs suffers from and those SSGs that are built using a
compiled language are faster but lack extensibility.

Having experienced MkDocs becoming a supply chain risk, we did not want to risk
ending up in the same situation again and decided to build a future-proof,
vertically integrated solution, with carefully selected dependencies.

### Why not just fork MkDocs?

MkDocs owes much of its value to its ecosystem of plugins. All MkDocs plugins
depend on MkDocs itself, which means they cannot simply work with a fork. Only
the MkDocs maintainers could improve the existing plugin API, which is the
source of many long-standing limitations in MkDocs.

We considered forking MkDocs but decided against it for this reason. Forking
would have meant working with the same underlying architecture, including all
its long-standing problems, and would not have provided the clean slate we found
necessary. Our analysis, combined with 10 years of experience building Material
for MkDocs, showed that many of these issues are deeply woven into MkDocs’
design and require fundamental changes to address. Starting from scratch allowed
us to re-imagine what a static site generator should look like today.

### What, exactly, are the technical limitations of MkDocs?

**Performance**: MkDocs, like almost all other SSGs, has a linear build process that
makes it difficult to parallelize. Improving its performance is practically
impossible without breaking all existing plugins and extensions.
Zensical already offers much faster re-builds thanks to its differential builds and
caching, and in the coming months we will unlock even more performance
improvements as we work through our roadmap.

**Modularity**: in MkDocs, the Markdown parser, templating, the output format, and
other design decisions are baked into the SSG code. Zensical, in contrast, has a
generic underlying runtime that has nothing, per se, to do with generating
static sites from Markdown files. This means that we can model the Zensical SSG
as a set of independent, interchangeable modules.

### Will you provide support for producing PDF outputs?

Yes. You can subscribe to the [backlog item] to track progress.

### How can I get a cool homepage like zensical.org?

You can [define a custom template] and configure it in the metadata of the
homepage Markdown file. What content you put on the page is up to you.

### Can I use `zensical serve` in production?

The `zensical serve` command is only meant for local previewing, not production use.

We will continue to improve the implementation of the HTTP serving
functionality, so the answer to this question may change in the future.

### Will versioning support be VCS agnostic?

Our initial development effort will go towards supporting Git as it is
by far the most popular version control system with a market share of more than
90% [according to a 2022 StackOverflow study]. Zensical is modular, so
we or a third party can provide support for other version control systems in the
future.

### Can we get better error reporting?

We are working on a comprehensive reporting system that makes it easy for module
authors to integrate with.

### Can you support my favourite diagram tool?

We currently support [Mermaid] but there are a range of other diagramming
systems out there. What it means to be supporting any of them differs widely as
it depends on how they are implemented. Some are JavaScript libraries that do
their work in the browser while others come as command-line tools, or even
web-based rendering services, like [Kroki].

We will evaluate available tools when the time comes but we currently focus on
work on the module system and the component system, which will make integrating
diagramming tools much easier.

[^infra]: This does not include code we use only internally, e.g., to manage infrastructure.

[1]: https://squidfunk.github.io/mkdocs-material/blog/2024/08/19/how-were-transforming-material-for-mkdocs/
[2]: https://squidfunk.github.io/mkdocs-material/blog/2025/11/05/zensical/
[according to a 2022 StackOverflow study]: https://survey.stackoverflow.co/2022/#technology-version-control
[backlog]: https://github.com/orgs/zensical/projects/2/views/1
[backlog item]: https://github.com/zensical/backlog/issues/25
[change request]: https://zensical.org/docs/community/contribute/request-a-change/
[component system]: https://zensical.org/about/roadmap/#component-system
[compatibility overview]: ../compatibility/mkdocs/index.md
[configuration and project structure]: ../compatibility/mkdocs/migration.md#configuration
[configure it]: ../compatibility/markdown/python-markdown.md
[define a custom template]: https://zensical.org/docs/customization/#custom-templates
[filter]: https://docs.rs/minijinja/latest/minijinja/filters/index.html#functions
[introducing a component system]: https://zensical.org/about/roadmap/#component-system
[Kroki]: https://kroki.io/
[Mermaid]: https://www.mermaidchart.com
[Migrate from MkDocs]: ../compatibility/mkdocs/migration.md
[MkDocs plugins]: ../compatibility/mkdocs/plugins.md
[plugin support]: ../compatibility/mkdocs/plugins.md
[process for requesting changes]: https://zensical.org/docs/community/contribute/request-a-change/
[PyPI]: https://pypi.org/
[quick-thoughts]: https://discord.com/channels/1289187620659789824/1435275497549598770
[roadmap]: https://zensical.org/about/roadmap/
[test]: https://docs.rs/minijinja/latest/minijinja/tests/index.html#functions
[vision]: https://zensical.org/about/vision/
[Zensical today]: https://zensical.org/about/zensical-today/
