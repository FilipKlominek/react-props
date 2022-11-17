import React from 'react';
import './App.css';

import type { ReactNode } from "react"

interface CardPropsTypes {
    children: ReactNode;
}

interface BookPropsTypes {
    name: string;
    imageUrl: string;
}

interface UserPropsTypes {
    name: string;
    age: number;
    bookCount: number;
    level: number;
    imageUrl: string;
}

function Card({ children }: CardPropsTypes) {
    return (
        <article className="card">
            {children}
        </article>
    );
}

function Book({name, imageUrl}: BookPropsTypes) {
    return(
        <div>
            <h1>{name}</h1>
            <img src={imageUrl} alt={name}/>
        </div>
    );
}

function User({name, age, bookCount, level, imageUrl}: UserPropsTypes) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Věk: {age}</p>
            <p>Moje knihy: {bookCount}</p>
            <p>Level: {level}</p>
            <img src={imageUrl} alt={name}/>
        </div>
    )
}




function App() {


    return (
        <div>
            <h1>Ahoj Reacte</h1>
        </div>
    );
}

export default App;