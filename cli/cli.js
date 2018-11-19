#!/usr/bin/env node

const _ = require('lodash');
const fs = require('fs');
const axios = require('axios');

const [,, ...args] = process.argv;

const html = _.nth(args, _.indexOf(args, '--html') + 1);
const css = _.nth(args, _.indexOf(args, '--css') + 1);

// console.log(html);
// console.log(css);

fs.readFile(html, function(err, htmlData) {
  if(err) throw err;
  fs.readFile(css, function(err, cssData) {
    if(err) throw err;
    axios.get('https://criticalcssapi.herokuapp.com/api', {
      method: 'GET',
      params: {
        htmlData: encodeURIComponent(html),
        cssData: encodeURIComponent(css)
      }
    }).then(res => {
      fs.writeFile('style.css', res.data, function(err) {
        if(err) throw err;
        console.log('Success...');
      });
    }).catch(err => {
      console.log(err);
    });
  });
});
