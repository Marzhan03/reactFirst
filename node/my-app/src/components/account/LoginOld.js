import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios';


const Login = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axios.get('http://localhost:8000/books');
                let booksOld = books
                booksOld.push({
                    id: 1,
                    title: 'asd'
                })
                debugger
                setBooks(booksOld);
                debugger
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchBooks();
    }, []);

    return (
        <Container fluid>
            <Row>
            {books.map((book) => (
                <Col key={book.id} xl={2} lg={3} md={4} sm={6} xs={12}>{book.title}</Col>
            ))}
            </Row>
        </Container>
    );
}

export default Login;
