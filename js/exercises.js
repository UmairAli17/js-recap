function Film(title, year)
{
	this.title=title;
	this.year=year;
}
var films=[]
films.push(new Film("No Country for Old Men","2007"));
films.push(new Film("Jaws","1975"));
films.push(new Film("Winter's Bone","2010"));
films.push(new Film("Back to the Future","1985"));



/*
Q1) Add some JavaScript that will put focus on the search text box when the page loads
*/

/*
Q2) Write function called doSearch(). At the moment it doesn't matter what this function does. 
*/

/*
Q3) Modify the function so that when called, it displays "You didn't enter anything" in the <div id="msg"> element. You will need to use the exact text in order to pass the test. 
*/

/*
Q4) Make function doSearch() run whenever the user types into the search box ( <input id="search"> )i.e. run doSearch() in response to keyUp events.
*/

/*
Q5) Modify the function doSearch(), it should only display the "You didn't enter anything" message if the user has pressed the Enter key. For now, if the user presses any other key <div id="msg"> should be empty. 
*/

/*
Q6) Now modify the function so that it only displays the "You didn't enter anything" message if the search box is empty or the search box contains an empty space i.e. ' '. If the user types in a search term before they hit enter, the message shouldn't be displayed. 
*/

/*
Q7) If the user has typed something into the search box and pressed enter, instead of displaying nothing, the doSearch() function should display 'You entered the search term xyz.', where 'xyz' is the search term the user entered. This message should be output to the <div id="msg"> element.
*/

/*
Q8) Next try and get the actual searching to work. At the top of this js file is an array of film objects. Any films with titles that match the entered search term should be displayed as <li> elements in the #film-list <ul> element. For example if the user enters 'Jaws'. The output will be:

<ul id="film-list">
<li>Jaws</li>
</ul>

Note, #film-list already exists in the HTML document
*/

/*
Q9) Next try and add a bit of colour. If the user receives the "You didn't enter anything" message, the <div id="msg"> element should be given a class of error. If the user doesn't receive this message, the error class should be removed. 
*/

/*
Q10) Now try and make the search a bit more robust. Make it case insensitive i.e. if the user enters 'jaws' or 'JAWS' they should still get a match with 'Jaws'. Have a look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase for some advice.
*/

/*
Q11) Now try and make the search a bit more flexible. Make it so it does 'fuzzy' matching i.e. if the user enters "Ja" they should still get a match with 'Jaws'. if they enter 'e' they should get a match with 'No Country for Old Men', 'Back to the Future' and 'Winter's Bone'. Have a look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search.
*/

/*
Q12) Next change the feedback message so that it also tells the user how many search results there were. For example if the user enters 'e' <div id="msg"> should contain the text 'You entered the search term m. We found 3 results.' If there is only 1 result, the messages will need to say 'result' and not 'results'. 
*/
