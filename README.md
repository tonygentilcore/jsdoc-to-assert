# jsdoc-to-assert [![Build Status](https://travis-ci.org/azu/jsdoc-to-assert.svg?branch=master)](https://travis-ci.org/azu/jsdoc-to-assert)

Convert JSDoc to `assert` that runtime assert.

Easy to use it with Babel.

- [azu/babel-plugin-jsdoc-to-assert: Babel plugin for jsdoc-to-assert.](https://github.com/azu/babel-plugin-jsdoc-to-assert "azu/babel-plugin-jsdoc-to-assert: Babel plugin for jsdoc-to-assert.")

## Installation

    npm install jsdoc-to-assert

## Usage

```js
import {AssertGenerator, CommentConverter, CodeGenerator} from "jsdoc-to-assert";
```


### AssertGenerator class

Create assertion AST from comment nodes.

    /**
     *
     * @param {Array<Object>} comments AST's comment nodes. it should be BlockComment
     * @returns {Array} array of assert code string
     */
    static createAsserts(comments);

### CommentConverter class

    /**
     * Parse comment nodes which is provided by JavaScript parser like esprima, babylon 
     * and return assertions code strings.
     * This is mutable function.
     * @param {Array<Object>} comment
     * @param {AssertGeneratorOptions} [options]
     * @returns {string[]}
     */
    static toAsserts(comment, options);    

### CodeGenerator class

Assertion code generator class

    /**
     * wrap assert function
     * @param {string} expression
     * @returns {string}
     */
    assert(expression) {
        return `console.assert(${expression},'${expression}');`;
    }

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT