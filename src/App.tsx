import React from 'react';
import './App.css';

import type {ReactNode} from "react"

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

function Book({name, imageUrl}: BookPropsTypes) {
    return (
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

const books = [
    {
        name: "Book a",
        imageUrl: ""
    },
    {
        name: "Book b",
        imageUrl: ""
    },
    {
        name: "Book c",
        imageUrl: ""
    }
];

function App() {


    return (
        <div>
            <div>
                {books.map((book) => <Book name={book.name} imageUrl={book.imageUrl}/>)}
            </div>
            <div>
                <User name={"Nathan"} age={24} imageUrl={""} bookCount={29} level={1000}/>
            </div>
        </div>
    );
}

export default App;