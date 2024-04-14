import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click me to visit google"
}


function MyApp(){
    return(
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const areactElement = React.createElement(
    'a',
    {href : 'https://google.com',target : '_blank'},
    "clickk to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //<MyApp/>
    areactElement
)
