1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll ?

ANSWER : 

The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is :

getElementById - Finds element by Id name . An Id name can be used only once .

getElementsByClassName - Finds element by Class name . Different Class can have the same name .

querySelector - Finds element by CSS selector . Returns the first match .

querySelectorAll - Finds element by CSS selector . Returns all the match .


2. How do you create and insert a new element into the DOM ?

ANSWER :

To create element - document.createElement();

To insert at the beginning - prepend();

To insert at the end - appendChild();


3. What is Event Bubbling? And how does it work ?

ANSWER : 

When an event starts from a specific element and moves upward using the parent elements it's called Event Bubbling .

Work : When a button inside a div is clicked , the event starts and trigger the button . Then the event keeps moving upward until it reach the document. 


4. What is Event Delegation in JavaScript? Why is it useful ?

ANSWER : 

Event Delegation attach one event listener get to a parent element .

Useful : By using Event Delegation we don't need to add one event listener to every child element . Attaching it to Parent element dose the work and improves the code .


5. What is the difference between preventDefault() and stopPropagation() methods ?

ANSWER :

The difference between preventDefault() and stopPropagation() methods is :

preventDefault() - Stops Default action of the browser with a specific event .

stopPropagation() - Stops the event from going up or down the DOM tree.