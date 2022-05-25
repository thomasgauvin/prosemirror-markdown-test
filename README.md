# Simple ProseMirror Test

This project is a web app WYSIWYG & Markdown editor. The project uses (the excellent!) ProseMirror open source package to achieve this functionality. 

## Explanation of folder structure

* /dist is the folder for distribution/the working application. It contains the compiled JavaScript & bundled node modules. /dist also contains the source CSS and HTML files. These should be ideally be a part of the /src folder for simplicity and copied over to the /dist folder during 'build' time. Area of improvement for future, but out of scope for this proof-of-concept.

## How to run the project

* npx webpack --watch (This compiles the /src/index.js to /dist/main.js)
* Copy the full path of /dist/index.html and paste into browser

## How to deploy the project
