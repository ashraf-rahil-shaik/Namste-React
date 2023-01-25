import React from "react"
import ReactDOM from 'react-dom/client';

const Heading = () =>{
    return (
        <div>
    <h1 id="title">hello world</h1>
    <h2>egtbeb</h2>
    </div>
)}
const root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>)


