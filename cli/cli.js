#!/usr/bin/env node

const _ = require('lodash');
const fs = require('fs');
const request = require('request');

const [,, ...args] = process.argv;

const html = _.nth(args, _.indexOf(args, '--html') + 1);
const css = _.nth(args, _.indexOf(args, '--css') + 1);

// console.log(html);
// console.log(css);

fs.readFile(html, function(err, htmlData) {
  if(err) throw err;
  fs.readFile(css, function(err, cssData) {
    if(err) throw err;
    fetch('https://criticalcssapi.herokuapp.com/api', {
      method: 'GET',
      body: {
        htmlData: html,
        cssData: css
      }
    }).then(res => {
      fs.writeFile('style.css', res, function(err) {
        if(err) throw err;
        console.log('Success...');
      });
    });
    // fs.writeFile('C:/xampp/htdocs/critical-css-api/src/style.css', data, function(err) {
    //   if(err) throw err;
    //   console.log('Processing css ...');
    // });
  });
  // fs.writeFile('C:/xampp/htdocs/critical-css-api/src/index.html', data, function(err) {
  //   if(err) throw err;
  //   console.log('Processing html ...');
  // });
});
