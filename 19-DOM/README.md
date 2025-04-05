# DOM 

- DOM structure 
- Connecting js to html 
- window object 
    - alert
    - prompt 
    - localStorage 

## Accessing DOM elements 
    - getElementById()
    - getElementsByClassName()
    - getElementsByTagName()
    - querySelector()
    - querySelectorAll()

    - innerHTML: Can be used to access element OR set content to element 
    `````js
    ele.innerHTML = 'Some text'; // swt
    console.log(el.innerHTML); // access
    `````
- innerTextL alternative to innerHTML
- textContent: alternative to innnerHTML 

## Create a DOM element 
- document.createElement(): Create a new element 
- createTextNode(): Creates a text node 

- append(): Appends element to the DOM 
- appendChild(): Alternative to append()
````js
append(node, node2, node3) // work
appendChild(node1, node2, node3) // fail 

append(node, `<p>Hello</p>`) // work
appendChild(node, `<p>Hello</p>`) // fail 
````

## Changing DOM attributes 

- You can change DOM attributes manually --> EX: `img.src = 'some value'`
- OR
- You can use `getAttribute()`, `setAttribute`

## className vs. classList 
- className: returns the class of an element as string 
- classList: special object  

## Styling 
- We can style any element using JavaScript 
- element.style = CSSStyleDeclaration 