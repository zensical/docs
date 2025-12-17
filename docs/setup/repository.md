---
icon: lucide/github
tags:
  - Setup
  - Repository
  - Git
---

# Repository

If your documentation is related to source code, Zensical provides the ability
to display information about the project's repository as part of the static site,
including stars and forks.

## Configuration

In order to display a link to the repository of your project as part of your
documentation, set `repo_url` in your configuration to the public URL of your
repository, e.g.:

=== "`zensical.toml`"
    ``` toml
    [project]
    repo_url = "https://github.com/zensical/zensical"
    ```

=== "`mkdocs.yml`"
    ``` yaml
    repo_url: https://github.com/zensical/zensical
    ```

The link to the repository will be rendered next to the search bar on big
screens. Additionally, for public repositories hosted on [GitHub] or [GitLab],
the latest release tag[^1], as well as the number of stars and forks, are
automatically requested and rendered.

  [^1]:
    Unfortunately, GitHub only provides an API endpoint to obtain the [latest
    release] - not the latest tag. Thus, make sure to [create a release] (not
    pre-release) for the latest tag you want to display next to the number of
    stars and forks. For GitLab, although it is possible to get a [list of tags
    sorted by update time], the [equivalent API endpoint] is used. So, make sure
    you also [create a release for GitLab repositories].

  [latest release]: https://docs.github.com/en/rest/releases/releases#get-the-latest-release
  [create a release]: https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release
  [list of tags sorted by update time]: https://docs.gitlab.com/ee/api/tags.html#list-project-repository-tags
  [equivalent API endpoint]: https://docs.gitlab.com/ee/api/releases/#get-the-latest-release
  [create a release for GitLab repositories]: https://docs.gitlab.com/ee/user/project/releases/#create-a-release

### Repository name

Zensical will infer the source provider by examining the URL and try to set the
_repository name_ automatically. If you wish to customize the name, set
`repo_name` in your configuration:

=== "`zensical.toml`"

    ``` toml
    [project]
    repo_name = "zensical/zensical"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    repo_name: zensical/zensical
    ```

  [repo_name]: https://www.mkdocs.org/user-guide/configuration/#repo_name

### Repository icon

While the default repository icon is a generic git icon, it can be set to
any icon bundled with the theme by referencing a valid icon path in
`mkdocs.yml`:

=== "`zensical.toml`"

    ``` toml
    [project.theme.icon]
    repo = "fontawesome/brands/git-alt"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      icon:
        repo: fontawesome/brands/git-alt
    ```

You can use icons from any of the [available icon sets] or use one of these
popular choices:

  [available icon set]: ../authoring/icons-emojis.md#included-icon-sets

- :fontawesome-brands-git: – `fontawesome/brands/git`
- :fontawesome-brands-git-alt: – `fontawesome/brands/git-alt`
- :fontawesome-brands-github: – `fontawesome/brands/github`
- :fontawesome-brands-github-alt: – `fontawesome/brands/github-alt`
- :fontawesome-brands-gitlab: – `fontawesome/brands/gitlab`
- :fontawesome-brands-gitkraken: – `fontawesome/brands/gitkraken`
- :fontawesome-brands-bitbucket: – `fontawesome/brands/bitbucket`

### Content actions

Zensical can display code action buttons that allow a reader to navigate to the
source code of the current page in a hosted repository such as GitHub. It can display a view button to just show the page source as well as an edit button to directly edit the content within the Git hoster's web interface. See the top of this page for an example of what this
looks like.

If [`repo_url`][repo_url] points to a [GitHub] repository, Zensical will automatically
derive the corresponding URLs for the view and edit buttons. In this case, all you
need to do is to turn on the `content.action.edit` and/or `content.action.view`
features:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
      "content.action.edit", # Edit this page
      "content.action.view"  # View source of this page
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - content.action.edit # Edit this page
        - content.action.view  # View source of this page
    ```

#### `edit_uri`

If you use a custom branch name or `docs_dir`, you will need to change the path
component of the URLs within the repository. Zensical allows you to set
`edit_url` to override the default behavior. To form the URL, Zensical
concatenates the `repo_url`, the paths configured here, and the path of the
Markdown file in the `docs_dir`.

=== "`zensical.toml`"

    ``` toml
    [project]
    edit_uri = "edit/main/docs/"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    edit_uri: edit/main/docs/
    ```

!!! tip "Docs in a different repository"
    If your project and its docs reside in different directories, you can make
    the `edit_url` an absolute URL, so it does not rely on `repo_url` to form
    a valid URL. The `repo_url` would point to your project repository,
    `edit_url` to  the documentation repository.

#### Icons

The icon of the edit and view buttons can be changed with the following lines:

=== "`zensical.toml`"

    ``` toml
    [project.theme.icon]
    edit = "material/pencil"
    view = "material/eye"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      icon:
        edit: material/pencil
        view: material/eye
    ```

  [repo_url]: #repository
  [GitHub]: https://github.com/
  [GitLab]: https://about.gitlab.com/
  [Bitbucket]: https://bitbucket.org/
