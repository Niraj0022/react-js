function customRender(reactElement, container) {
    // Create the DOM element based on the type
    const domElement = document.createElement(reactElement.type);
    
    // Set the inner HTML (text content)
    domElement.innerHTML = reactElement.children;

    // Assign properties (attributes) to the element
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append the created element to the container
    container.appendChild(domElement);
}

// React-like object
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click here to visit Google'
};

// Corrected ID selector
const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
