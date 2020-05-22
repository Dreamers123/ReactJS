import React from 'react';
import './Person.css';

const person=(props)=>{
    //let content=<img src={ props.pic }></img>
    return(
        <div className="person">
            <img src={props.pic} onClick={props.Click}></img>
        <h2>Hi! I am {props.name} and my age is: {props.age} </h2>
            <h2 onClick={props.Click}>Click here a see magic</h2>
            <p1>{props.children}</p1>

            <input type="text" onChange={props.Changed}/>
            <p onClick={props.Reset}>{props.button}</p>
        </div>
    )
}

export default person;
