---
icon: lucide/hand-platter
tags:
  - Community
---

# Change requests

Zensical is a powerful tool for creating beautiful and functional documentation.
We aim to support a wide range of use cases, and change requests are an essential
mechanism for ensuring that our software meets the needs of the community of
users.  This is why we have created the following guide to ensure that we have
all the required information to understand your request.

!!! warning "How we manage change requests"

    We highly value every idea or contribution from our community, and we
    kindly ask you to take the time to read the following guidelines before
    submitting your change request in our public [issue tracker]. This will help us
    better understand the proposed change and how it will benefit our community.

    Before submitting a new idea, please take a moment to read [how we manage
    change requests].

This guide is our best effort to explain the criteria and reasoning behind our
decisions when evaluating change requests and considering them for
implementation.

  [issue tracker]: https://github.com/zensical/zensical/issues
  [how we manage change requests]: #how-we-manage-change-requests

## Before creating an issue

Before you invest your time to fill out and submit a change request, we kindly
ask you to do some preliminary work by answering some questions to determine if
your idea is a good fit for Zensical and aligns with the project [vision] and
mission.

__Please do the following things before creating an issue.__

  [vision]: https://zensical.org/about/vision

### It's not a bug, it's a feature

Change requests are intended to suggest minor adjustments, propose ideas for new
features, or provide input to the project's direction and vision. It is
important to note that change requests are not intended for reporting bugs, as
they're missing essential information for debugging.

If you want to report a bug, please refer to our [bug reporting guide] instead.

  [bug reporting guide]: report-a-bug.md

### Look for sources of inspiration

If you have seen your idea implemented in another static site generator or
theme, make sure to gather enough information about its implementation before
submitting, as this will help us to evaluate potential fit more quickly. Explain
what you like and dislike about the implementation.

### Connect with our community

Our [Discord channel] is the best place to connect with our community. When
evaluating new ideas, it's essential to seek input from other users and consider
alternative viewpoints. Create a post describing your idea for a feature request
to figure out if it represents a common need - or to find out if what you are
looking for is already available.

__Keep track of all <u>search terms</u> and <u>relevant links</u>, you'll need
them in the change request.__[^1]

  [^1]:
    We might be using terminology in our documentation different from yours,
    but we mean the same. When you include the search terms and related links
    in your change request, you help us to adjust and improve the documentation.

  [Discord channel]: https://discord.gg/hqXRNq9CjT

## Issue template

Now that you have completed the necessary preliminary work and ensured
that your idea meets our requirements, you are invited to create a change
request. The following guide will walk you through all the necessary steps to
help you submit a comprehensive and useful issue:

- [Title]
- [Context] <small>optional</small>
- [Description]
- [Related links]
- [Use cases]
- [Visuals] <small>optional</small>
- [Checklist]

  [Title]: #title
  [Context]: #context
  [Description]: #description
  [Related links]: #related-links
  [Use cases]: #use-cases
  [Visuals]: #visuals
  [Checklist]: #checklist

### Title

A good title is short and descriptive. It should be a one-sentence executive
summary of the idea, so the potential impact and benefit for our community can
be inferred from the title.

### Context <small>optional</small> { #context }

Before describing your idea, you can provide additional context to help us
understand what you are trying to achieve. Explain the circumstances
in which you're using Zensical, and what you _think_ might be
relevant. Don't write about the change request here.

> __Why this might be helpful__: Some ideas might only benefit specific
> settings, environments, or edge cases, for example, when your documentation
> contains thousands of documents. With a little context, change requests
> can be prioritized more accurately.

### Description

Next, provide a detailed and precise description of your idea. Explain why your
idea is relevant to Zensical and must be implemented here and not in one of
its dependencies.

-   __Explain the <u>what</u>, not the <u>why</u>__ – don't explain
    [the benefits of your idea][Use cases] here, we're getting there.
    Focus on describing the proposed change request as precisely as possible.

-   __Keep it short__ – be brief and to the point when describing your idea,
    there is no need to over-describe it. Maintainers and future users will be
    grateful for having to read less.

-   __One idea at a time__ – if you have multiple ideas that don't belong
    together, please open separate change requests for each of those ideas.

:lucide-cake: __Stretch goal__ – if you have a customization or another
way to implement the proposed change, you can help other users by sharing it
here before we maintainers can add it to the codebase.

> __Why we need this__: To understand and evaluate your proposed change, we need
> a clear understanding of your idea. By providing a detailed and precise
> description, you can save us all time spent discussing further clarification
> of your idea in the comments.

  [Python Markdown]: https://python-markdown.github.io/extensions/
  [Python Markdown Extensions]: https://facelessuser.github.io/pymdown-extensions/

### Related links

Please provide any relevant links to issues or documentation sections related to
your change request. In case you or someone else has already discussed this idea
with our community on our [Discord channel] or another issue, please include
those links as well.

> __Why we need this__: Related links help us gain a comprehensive understanding
> of your change request by providing additional context. Additionally, linking
> to previous issues allows us to quickly evaluate the feedback and input
> already provided by our community.

### Use cases

Explain how your change request would work from an author's and user's
perspective – what's the expected impact, and why does it benefit you as
well as other users? How many will benefit? Furthermore, would it potentially
break existing functionality?

> __Why we need this__: Understanding the use cases and benefits of an idea is
> crucial in evaluating its potential impact and usefulness for the project and
> its users. This information helps us understand the expected value of the
> idea and how it aligns with the goals of the project.

### Visuals <small>optional</small> { #visuals }

We now have a clear and detailed description of your idea, including information
on its potential use cases and relevant links for context. If you have any
visuals, such as sketches, screenshots, mockups, or external assets, you may
present them in this section.

__You can drag and drop the files into the text area or include links to external assets.__

Additionally, if you have seen this change, feature, or improvement used in
other static site generators or themes, please provide an example by showcasing
it and describing how it was implemented and incorporated.

> __Why this might be helpful__: Illustrations and visuals can help us
> maintainers better understand and envision your idea. Screenshots, sketches,
> or mockups can add an extra level of detail and clarity that text alone may
> not be able to convey. Also, seeing how your idea has been implemented in
> other projects can help us understand its potential impact and feasibility in
> Zensical, which allows us maintainers evaluate and triage change requests.

### Checklist

Thanks for following the guide and creating a high-quality change request. You
are almost done. The checklist ensures that you have read this guide and have
done your best to provide us with every piece of information to review your idea
for Zensical.

__We'll take it from here.__

---

## How we manage change requests

Change requests are submitted as issues on our public [issue tracker]. Since
they often propose new features or enhancements, we review and manage them
differently from bug reports.

In order to maintain clarity and ensure that our [roadmap] remains focused and
achievable, we've introduced a structured process that uses a dedicated [backlog]
to track and organize change requests. Here's how we handle new change requests:

  [roadmap]: https://zensical.org/about/roadmap/
  [backlog]: https://github.com/zensical/backlog/issues

1. We read and review the request to understand the idea.
2. We may leave comments to clarify intent or suggest alternatives.
3. If the idea is out of scope, we will close the request and explain why.
4. If the idea aligns with the project's vision, we'll move it to our [backlog].
5. Otherwise, we close the request to keep the issue tracker focused on bugs.

__Benefits of this approach:__

- You get a clearer and quicker overview of known issues and bugs, as change
requests are managed separately, giving a better idea of how actively this project
is maintained.

- Related ideas are grouped in the backlog, allowing us to track progress more
effectively and to more easily see which change requests are related.

## Rejected requests

__Your change request got rejected? We're sorry for that.__ We understand it can
be frustrating when your ideas don't get accepted, but as maintainers of a
very popular project, we always need to consider the needs of our entire
community, which sometimes forces us to make tough decisions.

We always have to consider and balance many factors when evaluating change
requests, and we explain the reasoning behind our decisions whenever we can.
If you're unsure why your change request was rejected, please don't hesitate
to ask for clarification.

The following principles (in no particular order) form the basis for our
decisions:

- [ ] Alignment with the vision and tone of the project
- [ ] Compatibility with existing features and plugins
- [ ] Compatibility with all screen sizes and browsers
- [ ] Effort of implementation and maintenance
- [ ] Usefulness to the majority of users
- [ ] Simplicity and ease of use
- [ ] Accessibility

But that's not the end of your idea – you can always implement it yourself
via [customization]. If you're unsure about how to do that or want to know if
someone has already done it, feel free to get in touch with our community in
the [Discord channel].

  [customization]: ../../customization.md
