import React from 'react'
import { Link } from 'react-router-dom'; // Импортируйте компонент Link из react-router-dom
import { useState, useEffect } from 'react';
import axios from 'axios';



const Main = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axios.get('http://localhost:8000/books');
           
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchBooks();
    }, []);

    return (
        <>
            <h1>Main List</h1>
            <ul>
                {books.map((book) => (
                   <li key={book.id}>{book.title}</li>
                   
                ))}
            </ul>
            <Link to="/navbar">Navbar</Link>

        </>
    )
}

export default Main;