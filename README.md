# Instructions for running CHT2531 JavaScript Exercises

1. From unilearn download the practical.zip folder. 
2. Unzip this.
3. Inside this folder there are a number of files. Here are the ones we are interested in:

* *exercises.html*. Open this in a web browser. This is the HTML file that is used in practical exercises. This HTML file uses a JavaScript file, exercises.js
* *exercises.js*. Open this in a text editor of your choice. This is where you will write your JavaScript. It already contains some code to get you started.It also contains the exercise questions (in comments, leave these questions commented out).
* *tests.html*. Open this in a web browser. This is a 'test runner'. It is a web page that runs a series of tests against *exercises.js* and reports on the results. Click on 'Spec List', you should see that all twelve tests are failing. Your aim is to pass all the tests in tests.html, and turn them all green.

##Example
If you look in exercises.js, the first questions asks you to *Add some JavaScript that will put focus on the search text box when the page loads*. So immediately after this question add the following JavaScript.

```
var searchBox=document.querySelector("#search");
searchBox.focus();

```

* Save exercises.js.
* Refresh exercises.html in a browser. You should see that the search box has focus.
* Refresh tests.html, click on Spec List you should now see that your code has passed the first test.