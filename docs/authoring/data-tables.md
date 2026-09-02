---
icon: lucide/table-2
tags:
  - Authoring
---

# Data tables

Zensical defines default styles for data tables – an excellent way of rendering
tabular data in project documentation. Furthermore, customizations like
[sortable tables] can be achieved with a third-party library and some
[additional JavaScript].

## Configuration

This configuration enables Markdown table support, which should normally be
enabled by default, but to be sure, add the following lines to your
configuration file:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    tables = {}
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - tables
    ```

See additional configuration options:

- [Tables]

## Usage

Data tables can be used at any position in your project documentation and can
contain arbitrary Markdown, including inline code blocks, as well as [icons and
emojis]:

``` markdown title="Data table"
| Method   | Description                          |
| -------- | ------------------------------------ |
| `GET`    | :lucide-check: Fetch resource        |
| `PUT`    | :lucide-check-check: Update resource |
| `DELETE` | :lucide-x: Delete resource           |
```

<div class="result" markdown>

| Method   | Description                          |
| -------- | ------------------------------------ |
| `GET`    | :lucide-check: Fetch resource        |
| `PUT`    | :lucide-check-check: Update resource |
| `DELETE` | :lucide-x: Delete resource           |

</div>

### Column alignment

If you want to align a specific column to the `left`, `center` or `right`, you
can use the [regular Markdown syntax] placing `:` characters at the beginning
and/or end of the divider.

=== "Left"

    ``` markdown hl_lines="2" title="Data table, columns aligned to left"
    | Method   | Description                          |
    | :------- | :----------------------------------- |
    | `GET`    | :lucide-check: Fetch resource        |
    | `PUT`    | :lucide-check-check: Update resource |
    | `DELETE` | :lucide-x: Delete resource           |
    ```

    <div class="result" markdown>

    | Method   | Description                          |
    | :------- | :----------------------------------- |
    | `GET`    | :lucide-check: Fetch resource        |
    | `PUT`    | :lucide-check-check: Update resource |
    | `DELETE` | :lucide-x: Delete resource           |

    </div>

=== "Center"

    ``` markdown hl_lines="2" title="Data table, columns centered"
    |  Method  |             Description              |
    | :------: | :----------------------------------: |
    |  `GET`   |    :lucide-check: Fetch resource     |
    |  `PUT`   | :lucide-check-check: Update resource |
    | `DELETE` |      :lucide-x: Delete resource      |
    ```

    <div class="result" markdown>

    |  Method  |             Description              |
    | :------: | :----------------------------------: |
    |  `GET`   |    :lucide-check: Fetch resource     |
    |  `PUT`   | :lucide-check-check: Update resource |
    | `DELETE` |      :lucide-x: Delete resource      |

    </div>

=== "Right"

    ``` markdown hl_lines="2" title="Data table, columns aligned to right"
    |   Method |                          Description |
    | -------: | -----------------------------------: |
    |    `GET` |        :lucide-check: Fetch resource |
    |    `PUT` | :lucide-check-check: Update resource |
    | `DELETE` |           :lucide-x: Delete resource |
    ```

    <div class="result" markdown>

    |   Method |                          Description |
    | -------: | -----------------------------------: |
    |    `GET` |        :lucide-check: Fetch resource |
    |    `PUT` | :lucide-check-check: Update resource |
    | `DELETE` |           :lucide-x: Delete resource |

    </div>

## Customization

### Sortable tables

If you want to make data tables sortable, you can add [tablesort], which is
natively integrated with Zensical and will also work with [instant navigation]
via [additional JavaScript]:

=== "`docs/javascripts/tablesort.js`"

    ``` js
    document$.subscribe(function() {
      var tables = document.querySelectorAll("article table:not([class])")
      tables.forEach(function(table) {
        new Tablesort(table)
      })
    })
    ```

=== "`zensical.toml`"

    ``` toml
    [project]
    extra_javascript = [
      "https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js",
      "javascripts/tablesort.js",
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra_javascript:
      - https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js
      - javascripts/tablesort.js
    ```

After applying the customization, data tables can be sorted by clicking on a
column:

``` markdown title="Data table, columns sortable"
| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |
```

<div class="result" markdown>

| Method   | Description                          |
| -------- | ------------------------------------ |
| `GET`    | :material-check:     Fetch resource  |
| `PUT`    | :material-check-all: Update resource |
| `DELETE` | :material-close:     Delete resource |

</div>

Note that [tablesort] provides alternative comparison implementations like
numbers, filesizes, dates and month names. See the [tablesort documentation]
[tablesort] for more information.

<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>

<script>
  var tables = document.querySelectorAll("article table")
  new Tablesort(tables.item(tables.length - 1));
</script>

[additional JavaScript]: ../customization.md#additional-javascript
[icons and emojis]: icons-emojis.md
[instant navigation]: ../setup/navigation.md#instant-navigation
[regular Markdown syntax]: https://www.markdownguide.org/extended-syntax/#tables
[sortable tables]: #sortable-tables
[Tables]: ../compatibility/markdown/python-markdown.md#tables
[tablesort]: https://tristen.ca/tablesort/demo/
