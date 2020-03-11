# simple-jsonpath

[![npm](https://img.shields.io/npm/v/simple-jsonpath)](https://www.npmjs.com/package/simple-jsonpath)

> Query JavaScript objects with JSONPath expressions. Robust / safe JSONPath engine for Node.js.

This is a fork from [jsonpath](https://github.com/dchester/jsonpath). Please, go to the original README to get a full documentation.

The main goal of this fork is to reduce the jsonpath bundle size from [83.7KB](https://github.com/nico2che/jsonpath/blob/master/jsonpath.min.js) to [38.3KB](https://github.com/nico2che/jsonpath/blob/master/simple-jsonpath.min.js)
by getting rid of some expression/script rules.

Concretely, I removed script expression and filters:

| JSONPath                                              | Description                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------- |
| `$.store.book[*].author`                              | The authors of all books in the store                       |
| `$..author`                                           | All authors                                                 |
| `$.store.*`                                           | All things in store, which are some books and a red bicycle |
| `$.store..price`                                      | The price of everything in the store                        |
| `$..book[2]`                                          | The third book                                              |
| ~~`$..book[(@.length-1)]`~~                           | ~~The last book via script subscript~~                      |
| `$..book[-1:]`                                        | The last book via slice                                     |
| `$..book[0,1]`                                        | The first two books via subscript union                     |
| `$..book[:2]`                                         | The first two books via subscript array slice               |
| ~~`$..book[?(@.isbn)]`~~                              | ~~Filter all books with isbn number~~                       |
| ~~`$..book[?(@.price<10)]`~~                          | ~~Filter all books cheaper than 10~~                        |
| ~~`$..book[?(@.price==8.95)]`~~                       | ~~Filter all books that cost 8.95~~                         |
| ~~`$..book[?(@.price<30 && @.category=="fiction")]`~~ | ~~Filter all fiction books cheaper than 30~~                |
| `$..*`                                                | All members of JSON structure                               |

## License

[MIT](LICENSE)
