---
icon: lucide/git-branch
tags:
  - Extensions
  - Authoring
status: new
---

# Directives

Directives let you build focused variants of a documentation site from one set
of Markdown sources. Use them to select block content, insert values, and
reuse whole source files for products, editions, deployment models, or other
named variants.

!!! info "Preview in Zensical Spark"

    The Directives extension is currently available only in [Zensical Spark].
    We will add more functionality based on feedback from Spark members.
    You can explore our example project within Zensical Studio (see below).

## See it in Zensical Studio

[Zensical Studio] provides syntax highlighting and variant-aware Markdown
previews for directives (click to enlarge):

![shows switching between variants and how the source documents imports
reusable content](../../assets/images/directives.webp)

You can explore our example project [deployment-guide example] directly in
Zensical Studio. You do not need to install the Directives extension - or even
Zensical itself.

Switch between the `cloud` and `self-hosted` variants to see the exact content
that each build produces. Follow links to explore how the project makes use of
conditional directives and `@use` to reuse content and adapt it to ensure that
each variant contains the appropriate content.

## Installation

Download the wheel provided within Zensical Spark, then install it into the
Python environment that you use to build your site:

``` sh
pip install path/to/zensical_directives-0.1.0-py3-none-any.whl
```

## Configuration

Enable the extension in `zensical.toml`:

``` toml
[project.markdown_extensions]
zensical.directives = {}
```

Create `catalog.toml` in the project root. It declares the values that source
files may use and the named variants that select them:

``` toml
default_variant = "cloud"

[variables.deployment]
values = ["cloud", "self-hosted"]

[variables.authentication]
values = ["single-sign-on", "local"]

[variants.cloud]
deployment = "cloud"
authentication = "single-sign-on"

[variants.self-hosted]
deployment = "self-hosted"
authentication = "local"
```

### The catalog

`catalog.toml` gives directives a shared vocabulary and defines the build
contexts that your documentation supports. It has three top-level parts:

| Part              | Purpose                                                     |
| ----------------- | ----------------------------------------------------------- |
| `default_variant` | Names the variant used when no environment override is set. |
| `variables`       | Declares the values that source files may test or insert.   |
| `variants`        | Names each build context and assigns its variable values.   |

Each variable declares one string or a list of allowed strings. Every named
variant must assign one allowed string value to every declared variable.

Variable names must start with an ASCII letter and may then use ASCII letters,
digits, and underscores. Names beginning with an underscore are reserved for
built-in values; `_variant` is the built-in name for the selected variant. The
condition keywords `and`, `or`, and `not` are also reserved as variable names.

## Usage

### Quick start

Use the catalog values in your Markdown source:

``` markdown
# Deploy Acme Platform

@if deployment = cloud

    ## Set up the cloud deployment

    Create an Acme Platform workspace. The service is managed for you.

@elif deployment = self-hosted

    ## Set up the self-hosted deployment

    Provision a Linux host and install the server package.

@use shared/deployment-overview.md

This guide covers the **@var{deployment}** deployment.
```

Create the included source at `content/shared/deployment-overview.md`:

``` markdown
Read the deployment overview before configuring the service.
```

Build the catalog's default variant as usual:

``` sh
zensical build
```

Set `ZENSICAL_VARIANT` to build or preview another named variant:

``` sh
ZENSICAL_VARIANT=self-hosted zensical serve
```

`ZENSICAL_VARIANT` overrides `default_variant` when both are set.

### Conditional content

Use `@if`, `@elif`, and `@else` to select block content. A branch body starts
four columns beyond its directive and may contain ordinary Markdown or nested
directives:

``` markdown
@if authentication = single-sign-on

    Configure the SAML or OpenID Connect connection.

@else

    Create the first administrator account locally.
```

Conditions compare a catalog variable, or `_variant`, with a value. Combine
comparisons with `and`, `or`, and `not`, and use parentheses when needed.
Unquoted values may contain ASCII letters, digits, underscores, and hyphens.
You may quote a value, and must do so when it contains whitespace, punctuation
other than hyphens, or non-ASCII characters:

``` markdown
@if deployment = self-hosted and authentication = "single-sign-on"

    Configure the identity provider before inviting users.
```

### Insert a value

Use `@var{name}` in ordinary Markdown text to insert a selected catalog value.
The built-in `_variant` value is the selected variant's name:

``` markdown
This guide covers the @var{deployment} deployment for the @var{_variant} variant.
```

### Reuse a source file

Use `@use` on its own line to include a whole source file:

``` markdown
@use shared/security-notice.md
```

The path is relative to `content_dir`, which defaults to `content` in the
project root. Quote a path that contains whitespace:

``` markdown
@use "shared/security notice.md"
```

Included files use the same selected variant, may contain directives and nested
`@use` directives, and must remain inside `content_dir`.

Unlike a textual snippet, an included file retains its own source location.
Relative links and images resolve from that file, then Zensical adapts their
destinations for the page where the content appears. This also works through
nested `@use` directives.

### Use alongside snippets and macros

Use directives when reuse and variation are part of the documentation model:
the catalog defines the allowed values and variants, and each build contains
only the selected content. Snippets remain useful for fixed source text, while
macros suit generated text or template logic.

Snippets and macros run on the original page before directives are parsed.
Included source files are not passed through those textual extensions again.

## Troubleshooting

Like other Markdown extensions, directives do not stop a build when Zensical
cannot resolve a catalog or directive problem. It emits a warning and leaves
the unresolved directive visible in the output instead. We will add validation
to Zensical Studio first, so authors can find and fix these issues while
writing.

[deployment-guide example]: ../../assets/deployment-guide.zip
[Zensical Spark]: https://zensical.org/spark/
[Zensical Studio]: https://zensical.org/studio/
