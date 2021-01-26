## ********************************************************

<hr/>

## DOM Injection

Here is a codepen link to the simple html document we marked up during our HTML module.

<a href="https://codepen.io/ayunas-the-scripter/pen/WNQgpqB" target="_blank">TEKcamp HTML Markup #1</a>

using the <code>inject/inject.js</code> file, write some vanilla javascript to inject the entire contents of the html into the &lt;div id="inject"&gt; &lt;div&gt; html element.  You will have to link together the <code>inject/inject.html</code> with the <code>inject/inject.js</code> in order to get this to work.  You will need to reserach Javascript DOM manipulation in order to complete this exercise.  You are <strong>NOT</strong> allowed to copy & paste in any html directly in the inject.html document.

<hr/>

## Shopping List

* move the css from outside the shopping-list.html file into a separate css stylesheet called : shopping-list.css
* Link the shopping-list.html file to the shoppingList.js file.  In the shoppingList.js file : do the following : 
    1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
    2. Create a function that will run in response to the button being clicked.
    3. Inside the function body, start off by storing the current value of the input element in a variable.
    4. Next, empty the input element by setting its value to an empty string — ''.
    5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
    6. Append the span and the button as children of the list item.
    7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    8. Append the list item as a child of the list.
    9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
    10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

<hr/>

## Timer

Create a timer using DOM manipulation techniques. The following files are ready to go with some boilerplate code.
<pre>timer.html timer.js, and timer.css</pre> 

