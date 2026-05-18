---
icon: lucide/braces
tags:
  - Extensions
status: new
---

# Macros

The Macros extension, included with Zensical, enables [Jinja2] templating in Markdown pages — variables, custom macros, filters, and control flow can be used directly in content. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros
    ```

  [Jinja2]: https://jinja.palletsprojects.com

!!! tip "Macros in Python docstrings"

    When using [mkdocstrings] to generate API documentation from Python docstrings, Jinja2 expressions in docstrings are rendered natively, so macros and template variables can be used directly in docstrings.

  [mkdocstrings]: https://mkdocstrings.github.io

The following additional configuration options are supported:

#### `module_name`

Name of a Python module to load for defining variables, macros, and filters (default: `main`). A path relative to the project root (without the `.py` extension) or an importable module name may be used. The module must expose a `define_env(env)` function.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    module_name = "macros"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          module_name: macros
    ```

#### `modules`

List of additional importable module names (pluglets) to load on top of [`module_name`](#module_name). Each module must expose a `define_env(env)` function. The default value is `[]`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    modules = ["my_package.macros"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          modules:
            - my_package.macros
    ```

#### `include_yaml`

YAML files whose contents are merged into the template variables. A list of file paths relative to the project root may be provided, or a mapping of variable names to file paths. The default value is `[]`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    include_yaml = ["data/variables.yml"]
    ```

    To assign file contents to a named variable:

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros.include_yaml]
    team = "data/team.yml"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          include_yaml:
            - data/variables.yml
    ```

    To assign file contents to a named variable:

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          include_yaml:
            team: data/team.yml
    ```

#### `include_dir`

Directory used as a Jinja2 template loader, enabling `{% include %}` tags in pages. The path is relative to the project root. The default value is `""` (disabled).

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    include_dir = "includes"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          include_dir: includes
    ```

#### `render_by_default`

When `true`, all pages are rendered as Jinja2 templates. When `false`, only pages with `render_macros: true` in their front matter are rendered. The default value is `true`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    render_by_default = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          render_by_default: false
    ```

#### `on_error_fail`

When `true`, render errors cause the build to fail. When `false`, pages that fail to render are output as-is without modification. The default value is `false`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    on_error_fail = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          on_error_fail: true
    ```

#### `on_undefined`

How undefined template variables are handled. When set to `"keep"`, undefined expressions are left unchanged in the output. When set to `"strict"`, an error is raised. The default value is `"keep"`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    on_undefined = "strict"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          on_undefined: strict
    ```

#### `j2_block_start_string`

Opening delimiter for Jinja2 block tags (default: `{%`).

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    j2_block_start_string = "<%"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          j2_block_start_string: "<%"
    ```

#### `j2_block_end_string`

Closing delimiter for Jinja2 block tags (default: `%}`).

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    j2_block_end_string = "%>"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          j2_block_end_string: "%>"
    ```

#### `j2_variable_start_string`

Opening delimiter for Jinja2 variable expressions (default: `{{`).

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    j2_variable_start_string = "<<"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          j2_variable_start_string: "<<"
    ```

#### `j2_variable_end_string`

Closing delimiter for Jinja2 variable expressions (default: `}}`).

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    j2_variable_end_string = ">>"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          j2_variable_end_string: ">>"
    ```

#### `j2_comment_start_string`

Opening delimiter for Jinja2 comments (default: `{#`).

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    j2_comment_start_string = "<#"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          j2_comment_start_string: "<#"
    ```

#### `j2_comment_end_string`

Closing delimiter for Jinja2 comments (default: `#}`).

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    j2_comment_end_string = "#>"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          j2_comment_end_string: "#>"
    ```

#### `j2_extensions`

List of [Jinja2 extensions] to be loaded into the template environment. The default value is `[]`.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.zensical.extensions.macros]
    j2_extensions = ["jinja2.ext.do"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - zensical.extensions.macros:
          j2_extensions:
            - jinja2.ext.do
    ```

  [Jinja2 extensions]: https://jinja.palletsprojects.com/en/stable/extensions/

## Defining a module

Variables, macros, and filters are registered via a `define_env(env)` function in the configured module:

``` python
def define_env(env):
    # Variables are accessible as {{ version }} in templates
    env.variables["version"] = "1.0"

    # Macros are called as {{ greet("World") }}
    @env.macro
    def greet(name):
        return f"Hello, {name}!"

    # Filters are applied as {{ "hello" | shout }}
    @env.filter
    def shout(text):
        return text.upper()
```

A macro or filter can also be registered under a custom name:

``` python
def define_env(env):
    env.macro(my_function, "custom_name")
    env.filter(my_filter, "custom_name")
```

## Built-in template variables

The following variables are available in all templates without any additional configuration:

| Variable | Description |
| -------- | ----------- |
| `config` | Project configuration object |
| `environment` | System info: `system`, `system_version`, `python_version` |
| `filters` | Registered Jinja2 filters |
| `filters_builtin` | Built-in Jinja2 filters |
| `git` | Git repository metadata (see below) |
| `macros` | Registered macros |
| `now()` | Current date and time (`datetime.now()`) |
| `page` | Current page object |
| `plugin` | Current extension configuration |
| `context()` | Macro for displaying the full template context |
| `macros_info()` | Macro for displaying environment info, useful for debugging |
| `pd_read_*` | Read a file and return a pandas DataFrame — see [Reading tabular data] |
| `read_*` | Read a file and return it as a Markdown table — see [Reading tabular data] |

The `git` variable exposes the following fields when a Git repository is detected:

| Field | Description |
| ----- | ----------- |
| `git.commit` | Full commit hash |
| `git.short_commit` | Short commit hash |
| `git.tag` | Full tag name from `git describe` |
| `git.short_tag` | Nearest tag name without suffix |
| `git.author` | Commit author name |
| `git.author_email` | Commit author email |
| `git.committer` | Committer name |
| `git.committer_email` | Committer email |
| `git.date` | Commit date as a `datetime` object |
| `git.date_ISO` | Commit date in ISO 8601 format |
| `git.message` | Commit message |
| `git.status` | `true` if Git information was successfully retrieved |

The following filters are registered and available in all templates:

| Filter | Description |
| ------ | ----------- |
| `add_indentation` | Indents every line of a string by a given number of `spaces` or `tabs` |
| `convert_to_md_table` | Converts a pandas DataFrame to a Markdown table string |
| `fix_url` | Prepends `../` to relative URLs, correcting links generated in macro context |
| `pretty` | Formats `context()` output as a Markdown table, useful for debugging |

  [Reading tabular data]: #reading-tabular-data

## Reading tabular data

Tabular data from external files can be read and rendered directly as Markdown tables using the built-in `read_*` macros. These macros are powered by [pandas] and [tabulate], which must be installed:

=== "with `pip`"

    ```sh
    pip install pandas tabulate
    ```

=== "with `uv`"

    ```sh
    uv add pandas tabulate
    ```

File paths are resolved relative to the directory containing the configuration file. A `read_*` macro is provided for each supported format. Each macro reads the file, converts it to a pandas DataFrame internally, and returns a Markdown table string ready to be embedded into content:

```jinja
{{ read_csv("data/team.csv") }}
```

Keyword arguments are split between the underlying pandas reader and the [`DataFrame.to_markdown()`][to_markdown] method:

```jinja
{{ read_csv("data/releases.csv", sep=";", index=True) }}
```

The following formats are supported:

| Macro | Description | Extra dependency |
| ----- | ----------- | ---------------- |
| `read_csv` | Comma-separated values | — |
| `read_fwf` | Fixed-width formatted text | — |
| `read_yaml` | YAML | — |
| `read_json` | JSON | — |
| `read_table` | Generic delimited text | — |
| `read_excel` | Excel (`.xlsx`, `.xls`) | [`openpyxl`][openpyxl] |
| `read_feather` | Apache Feather | [`pyarrow`][pyarrow] |

When the data needs to be processed before rendering, the `pd_read_*` variants return a pandas DataFrame instead of a Markdown string. A `pd_read_*` macro is available for each format listed above:

```jinja
{{ pd_read_csv("data/team.csv") | convert_to_md_table }}
```

  [pandas]: https://pandas.pydata.org
  [tabulate]: https://pypi.org/project/tabulate/
  [openpyxl]: https://pypi.org/project/openpyxl/
  [pyarrow]: https://pypi.org/project/pyarrow/
  [to_markdown]: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_markdown.html

## Per-page overrides

Rendering behavior can be overridden on a per-page basis via front matter. Setting `render_macros: false` disables Jinja2 rendering for a page, even when [`render_by_default`](#render_by_default) is `true`:

``` yaml
---
render_macros: false
---
```

Setting `render_macros: true` enables rendering for a specific page when [`render_by_default`](#render_by_default) is `false`:

``` yaml
---
render_macros: true
---
```

Additional YAML files can also be loaded per-page via front matter. The loaded data is merged into the template variables for that page only:

``` yaml
---
include_yaml:
  - data/extra.yml
---
```

## Watching external files

When macros or filters read from external files — such as CSV data files or Markdown fragments — modifications to those files will not trigger a rebuild during [preview] unless the paths are registered via the [`watch`][watch] configuration option.

  [preview]: ../../usage/preview.md
  [watch]: ../basics.md#watch
