# Critical Css API
Solve Above the fold content performance problem using critical css api.

## Getting Started

The critical css API is a RESTFull API build to solve the **Above The Fold Content** pagespeed problem.

### How it works:
The API take two Params (html, css).
1. _html_: link to the HTML page that you want to get the critical css for.
2. _css_: link to the CSS file for your stylesheet.
- **return** CSS StyleSheet for the Critical Css that should be inlined in the head of your the page.

**example**: [Demo](https://criticalcssapi.herokuapp.com/api/html=http%3A%2F%2Fwebinjaz.com/css=http%3A%2F%2Fwael.webinjaz.com%2Fcss%2Fstyle.css).

## Usage

### Params:
Simply send a request to the `/api` with two required params:
- **html**: the _encoded url_ for the html page.
- **css**: the _encoded url_ for the css file.

### Link Format:
The API link format should be like:
```
https://criticalcssapi.herokuapp.com/api/html=<html_link>/css=<css_link>
```

> **Important**: The url for both (html page) and (css file) should be encoded.
> Kindly see how to encode URL if you don't already know, from [Encode URL](https://www.url-encode-decode.com/).

### example:
```
https://criticalcssapi.herokuapp.com/api/html=http%3A%2F%2Fwebinjaz.com/css=http%3A%2F%2Fwael.webinjaz.com%2Fcss%2Fstyle.css
```

## Under the hood

The API use **Webpack** and **HtmlCriticalWebpackPlugin** with some more webpack plugins to extract the critical css from the html page.

## Thanks

- WebPack: [visit](https://webpack.js.org/).
- HtmlWebpackPlugin: [visit](https://webpack.js.org/plugins/html-webpack-plugin/).
- HtmlCriticalWebpackPlugin: [visit](https://github.com/anthonygore/html-critical-webpack-plugin).


## Author

[Web Injaz Co](http://webinjaz.com), Employee: [Wael Zoaiter](https://www.facebook.com/WaelZoaiter).

## License

Please see: [License](LICENSE.md)