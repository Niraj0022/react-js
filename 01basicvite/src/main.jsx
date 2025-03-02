import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click here to visit Google '
};




function Myapp(){
    return (
        <div>
            <h1>Custom react app</h1>
        </div>
    )
}


const AnotherElement = (
    <a href="http://google.com" target="_blank">visit google</a>
)


const areactElement = React.createElement(
    'a',
    {href: 'http://google.com', target: "_blank"},
    'click here to visit  google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
   <App />
  
)
