---
icon: lucide/bug
tags:
  - Community
---

# Bug reports

Zensical is an actively maintained project that we constantly strive to improve.
With a project of this size and complexity, bugs may occur. If you
think you have discovered a bug, you can help us by submitting an issue in our
public [issue tracker], following this guide.

## Before creating an issue

We aim to keep the number of open issues low by addressing bugs promptly.
This approach ensures the reliability of the software and demonstrates our
commitment to quality for new users evaluating Zensical. This guide explains
how to provide the information we need to resolve your issue efficiently and
improve the software for everyone.

**Before submitting a new issue, please complete the following steps.**

### Upgrade to the latest version

Chances are that the bug you discovered was already fixed in a subsequent
version. Before reporting an issue, ensure that you're running the
[latest version] of Zensical. Please consult our [upgrade guide] to
learn how to upgrade to the latest version.

!!! warning "Bug fixes are not backported"

    Please understand that only bugs that occur in the latest version of
    Zensical will be addressed. Also, to reduce duplicate efforts,
    fixes cannot be backported to earlier major versions.

### Remove customizations

In case you're using [customizations] like [additional CSS] and [JavaScript] or
[theme extension], please remove them from your configuration before reporting a
bug. We can't offer official support for bugs that might hide in your overrides,
so make sure to omit the following settings:

- [`theme.custom_dir`][theme.custom_dir]
- [`extra_css`][extra_css]
- [`extra_javascript`][extra_javascript]

If the bug is gone after removing those settings, it is likely caused by
your customizations. A good idea is to add them back gradually to narrow down
the root cause of the problem. If you did a major version upgrade, make sure you
adjusted all partials you have overridden.

!!! warning "Customizations mentioned in our documentation"

    A handful of the features Zensical offers can only be implemented
    with customizations. If you find a bug in any of the customizations that
    our documentation explicitly mentions, you are, of course, encouraged to
    report it.

**You can ask for help on our [Discord channel] if you run into problems.**

### Search for solutions

At this stage, we know that the problem persists in the latest version and is
not caused by any of your customizations. However, the problem might result from
a small typo or a syntactical error in your configuration file.

Now, before you go through the trouble of creating a bug report that is answered
and closed right away with a link to the relevant documentation section or
another already reported or closed issue or discussion, you can save yourself
and us time by doing some research:

1. [Search our documentation] and look for the relevant sections that could
   be related to your problem. If found, make sure that you have configured
   everything correctly.

2. [Search our issue tracker][issue tracker], as another user might already
   have reported the same problem, and there might even be a known workaround
   or fix. Thus, no need to create a new issue.

3. Check our [Discord channel] to see if the issue you are encountering has
   recently been discussed and if community members have already stated that
   they are working on an issue.

**Keep track of all <u>search terms</u> and <u>relevant links</u>; you'll need
them in the bug report.**[^2]

---

At this point, when you still haven't found a solution to your problem, we
encourage you to create an issue because it's now very likely that you
stumbled over something we don't know yet. Read the following section to learn
how to create a complete and helpful bug report.

## Issue template

We have created an issue template to make the bug reporting process as simple
as possible and more efficient for both our community and us. It is the
result of our experience answering, handling, and fixing thousands of issues
and consists of the following parts:

- [Title]
- [Context] <small>optional</small>
- [Bug description]
- [Related links]
- [Reproduction]
- [Steps to reproduce]
- [Browser] <small>optional</small>
- [Checklist]

### Title

A good title is short and descriptive. It should be a one-sentence executive
summary of the issue, so the impact and severity of the bug you want to report
can be inferred from the title.

| <!-- -->                                               | Example                                                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| :material-check:{ style="color: #4DB6AC" } **Clear**   | Built-in `typeset` plugin changes precedence of nav title over `h1`                              |
| :material-close:{ style="color: #EF5350" } **Wordy**   | The built-in `typeset` plugin changes the precedence of the nav title over the document headline |
| :material-close:{ style="color: #EF5350" } **Unclear** | Title does not work                                                                              |
| :material-close:{ style="color: #EF5350" } **Useless** | Help                                                                                             |

### Context <small>optional</small> { #context }

Before describing the bug, you can provide additional context for us to
understand what you were trying to achieve. Explain the circumstances in which
you're using Zensical, and what you _think_ might be relevant. Don't write
about the bug here.

> **Why this might be helpful**: some errors only manifest in specific settings,
> environments, or edge cases, for example, when your documentation contains
> thousands of documents.

### Bug description

Now, to the bug you want to report. Provide a clear, focused, specific, and
concise summary of the bug you encountered. Explain why you think this is a bug
that should be reported to Zensical, and not to one of its dependencies. Adhere
to the following principles:

- **Explain the <u>what</u>, not the <u>how</u>** – don't explain
  [how to reproduce the bug][Steps to reproduce] here, we're getting to
  that later. Focus on articulating the problem and its impact as clearly as
  possible.

- **Keep it short and concise** – if the bug can be precisely explained in one
  or two sentences, perfect. Don't inflate it – maintainers and future users
  will be grateful for having to read less.

- **One bug at a time** – if you encounter several unrelated bugs, please
  create separate issues for them. Don't report them in the same issue, as
  this makes attribution difficult.

:lucide-goal: **Stretch goal** – if you found a workaround or a way to fix
the bug, you can help other users temporarily mitigate the problem before
we maintainers can fix the bug in our code base.

> **Why we need this**: In order for us to understand the problem, we
> need a clear description of it and quantify its impact, which is essential
> for triage and prioritization.

### Related links

Of course, prior to reporting a bug, you have read our documentation and
[could not find a working solution][search for solutions]. Please share links
to all sections of our documentation that might be relevant to the bug, as it
helps us gradually improve it.

Additionally, since you have searched our [issue tracker] before reporting an
issue, you may have found related issues. Include links to those as well.

:lucide-goal: **Stretch goal** – if you also include the search terms you
used when [searching for a solution][search for solutions] to your problem, you
make it easier for us maintainers to improve the documentation.

> **Why we need this**: related links help us better understand what you were
> trying to achieve and whether sections of our documentation need to be
> adjusted, extended, or overhauled.

### Reproduction

A minimal reproduction is at the heart of every well-written bug report, as
it allows us maintainers to instantly recreate the necessary conditions to
inspect the bug to quickly find its root cause. It's a proven fact that issues
with concise and small reproductions can be fixed much faster.

[:lucide-bug-play: Create reproduction][Create reproduction]{ .md-button .md-button--primary }

After you have created the reproduction, you should have a `.zip` file, ideally
not larger than 1 MB. Just drag and drop the `.zip` file into this field to
upload it to GitHub.

> **Why we need this**: If an issue contains no minimal reproduction or just a
> link to a repository with thousands of files, the maintainers would need to
> invest a lot of time recreating the right conditions to even inspect the bug,
> let alone fix it.

!!! warning "Don't share links to repositories."

    While we know that it is a good practice among developers to include a link
    to a repository with the bug report, we currently don't support those in our
    process.

### Steps to reproduce

At this point, you provided us with enough information to understand the bug and
with a reproduction that we can run and inspect. However, when we run your
reproduction, it might not be immediately apparent how we can see the bug in
action.

Thus, please list the specific steps we should follow when running your
reproduction to observe the bug. Keep the steps concise, and make sure
not to leave anything out. Use simple language as you would explain it to a
five-year-old, and focus on continuity.

> **Why we need this**: we must know how to navigate your reproduction in order
> to observe the bug, as some bugs only occur at certain viewport sizes or in
> specific conditions.

### Browser <small>optional</small> { #browser }

If you're reporting a bug that only occurs in one or more _specific_ browsers,
include the browser name and version here. This field is optional, as it is
only relevant when the bug you are reporting does not involve a problem with
building the site but rather with the site and its behavior in the browser.

:lucide-hat-glasses: **Incognito mode** – Please verify that the bug is
not caused by a browser extension. Switch to incognito mode and try to reproduce
the bug. If it's gone, it's caused by an extension.

> **Why we need this**: Some bugs only occur in specific browsers or versions,
> and we need to know which ones so we can reproduce the issue.

### Checklist

Thanks for following the guide and creating a high-quality and complete bug
report – you are almost done. The checklist ensures that you have read this
guide and done your best to provide us with everything we need to help
you.

**We'll take it from here.**

[^2]: We might be using terminology in our documentation different from yours, but we mean the same. When you include the search terms and related links in your bug report, you help us to adjust and improve the documentation.

[additional CSS]: ../../customization.md#additional-css
[Browser]: #browser
[Bug description]: #bug-description
[Checklist]: #checklist
[Context]: #context
[Create reproduction]: ../guides/create-a-reproduction.md
[Customizations]: ../../customization.md
[Discord channel]: https://discord.gg/hqXRNq9CjT
[extra_css]: ../../customization.md#additional-css
[extra_javascript]: ../../customization.md#additional-javascript
[issue tracker]: https://github.com/zensical/zensical/issues
[JavaScript]: ../../customization.md#additional-javascript
[latest version]: https://github.com/zensical/zensical/releases
[Related links]: #related-links
[Reproduction]: #reproduction
[search for solutions]: #search-for-solutions
[Search our documentation]: ?q=
[Steps to reproduce]: #steps-to-reproduce
[theme extension]: ../../customization.md#extending-the-theme
[theme.custom_dir]: ../../customization.md#configuring-overrides
[Title]: #title
[upgrade guide]: ../../upgrade.md
