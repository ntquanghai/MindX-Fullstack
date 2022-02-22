Virtual DOM & Real DOM
1. DOM (Document Object Model) is an programming interface for web documents. Through DOM, we can change and manipulate the document structures. Programming
languages can access and interact with the page using DOM, because they are represented as nodes and objects. DOM displays the document in the form of a
logical tree.
2. Virtual DOM is an abstraction, a representation of the original DOM. In React, for each "real" DOM, there is a corresponding Virtual DOM. Structure-wise,
a Virtual DOM is the same as the real DOM, but without the ability to manipulate what is displayed on the screen.  
3. Virtual DOM is introduced as a way to accelerate the manipulation of the DOM. Before, we have to reload all resources when editing any element of a document,
which can be very slow. Thanks to Virtual DOM, whenever we edit an element with React, the Virtual DOM will detect this change, and directly apply it on the 
real DOM. 