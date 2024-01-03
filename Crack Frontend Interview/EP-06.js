/* Event Bubbling & Event Capturing/Trickling */

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked!");
  },
  true // capturing
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clicked!");
    e.stopPropagation();
  },
  false // bubbling
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clicked!");
  },
  false // bubbling
);

/* 
Event bubbling and event capturing are two phases of the event propagation process in the DOM (Document Object Model). The third argument in the addEventListener() method is a boolean value that determines the direction of the event propagation. It specifies whether the event should be captured during the capturing phase (true) or bubbled during the bubbling phase (false).

Here's a breakdown of the event phases:

1.Capturing Phase:
- When an event occurs, it starts from the root of the document and travels down the DOM hierarchy to the target element. This phase is known as the capturing phase.
- Setting the third argument of addEventListener to true enables capturing. 

2.Bubbling Phase:
- After the event reaches the target element, it starts to bubble up from the target to the root of the document. This phase is known as the bubbling phase.
- Setting the third argument of addEventListener to false (or omitting it) enables bubbling. 


e.stopPropagation() is a method in JavaScript that is used to stop the propagation of an event during its journey through the DOM. When an event occurs, it goes through two main phases: the capturing phase and the bubbling phase. During these phases, the event travels up or down the DOM hierarchy, triggering event listeners on various elements.

When we use e.stopPropagation() within an event listener, it prevents the event from propagating further in either the capturing or bubbling phase. In other words, it stops the event from reaching the other elements higher or lower in the DOM hierarchy.

Try interchanging the argument with true/false to see the effect of event bubbling and event capturing
*/
