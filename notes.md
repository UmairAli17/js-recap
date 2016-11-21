# JavaScript Recap Notes



##Selecting Elements
Often we need to get hold of parts of the HTML page. You should be familiar with methods such as document.getElementById() and document.querySelector(). These days querySelector() and querySelectorAll() are often favoured for their flexibility. Here's an example:

```html
<div id="output">
Lorem ipsum dolar
</div>
```

```javascript
var outputDiv=document.querySelector("#output");
console.log(outputDiv); //<div id="output">Lorem ipsum dolar</div>
```

##Changing the text in an element
Again there are several ways to do this. The easiest to use is innerHTML.

```javascript
var outputDiv=document.querySelector("#output");
outputDiv.innerHTML="changed this";
console.log(outputDiv); //<div id="output">changed this</div>
```

Sometimes we want to remove all text from an element
```javascript
var outputDiv=document.querySelector("#output");
outputDiv.innerHTML="";
console.log(outputDiv); //<div id="output"></div>
```

Sometimes we want add text (without replacing what is already there). Notice the + sign.

```javascript

var outputDiv=document.querySelector("#output");
outputDiv.innerHTML+=" changed this";
console.log(outputDiv); //<div id="output">Lorem ipsum dolar changed this</div>

```
##Changing the CSS of an Element
All DOM elements have a classList property that maintains a list of classes currently applied to the element. We can add and remove CSS classes using the classList.

```JavaScript
    var outputDiv=document.querySelector("#output");
    outputDiv.classList.add("sold"); //adds the CSS class 'sold'
    outputDiv.classList.remove("for-sale"); //removes the CSS class 'for-sale'

```

##Events
Using JavaScript we can listen for events and run code when an event happens. here's an example. When the user clicks on the button the function doIt() will be executed. 
```html
<input type="button" id="btn">
```
```javascript
function doIt()
{
    console.log("button was clicked");
}
var btn=document.querySelector("#btn");
btn.addEventListener("click",doIt,false);
```
We can listen for lots of events, when the page loads, when a key is pressed, when the mouse moves etc. 

##The Event Object
Whenever an event occurs, the browser generates an event object that can tell us information about an event e.g. which element generated the event. If the event was a keyboard event we can also read the code of the key that was pressed. 

```javascript

function doStuff(evnt)
{
    console.log(evnt.target);
    console.log(evnt.keyCode);
}

var txtBox=document.querySelector("#txtBox");
txtBox.addEventListener("keyup",doStuff, false);
```

##Working with Form Controls
We can 'read' the values users enter into HTML form controls using the value property

```javascript

var txtBox=document.querySelector("#txtBox");
console.log(txtBox.value); //display what ever the user has entered into txtBox. 

```

###Loops
You should remember how loops work
```javascript
for(var i=0;i<10;i++)
{
   console.log(i) //outputs the numbers 1-9
}
```

##Loops and Arrays
you should also be familiar with the idea of looping over an array
```javascript
var fruits=["Apple","Orange","Banana"];
for(var i=0;i<fruits.length;i++)
{
   console.log(fruits[i]) //outputs Apple, Orange, Banana
}

```
##Loops and an Array of Objects
And with looping over an array of objects
```javascript
function Dog(name, breed, gender)
{
    this.name=name;
    this.breed=breed;
    this.gender=gender
}

var dogs=[ ];
dogs.push(new Dog("Mabel", "German Shepherd","Female"));
dogs.push(new Dog("Buster", "Labrador","Male"));
dogs.push(new Dog("Rex", "Doberman","Male"));

for(var i=0;i<dogs.length;i++){
    console.log(dogs[i].name+" is a "+dogs[i].breed); //outputs each dog in turn
}


```