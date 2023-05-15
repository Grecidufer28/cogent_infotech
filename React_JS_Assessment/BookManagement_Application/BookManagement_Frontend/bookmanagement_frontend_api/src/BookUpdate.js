import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap'
import BookService from './BookService';
import FetchClient from './FetchClient';

const BookUpdate = () => {
    const initialFormState = {
        Book_Title: '',
        Book_Price: 0,
    };

    const [book, setBook] = useState(initialFormState)
    const navigate = useNavigate()
    const {BookID} = useParams();
    const bookService = new BookService(FetchClient)

    useEffect(() => {
        if(BookID !== 'new') {
            const getBookByID = async () => {
                const book = await bookService.getBookById(BookID)
                setBook(book)
            }

            getBookByID()
        }
    }, [BookID, setBook])

    const handleChange = (event) => {
        const {name, value} = event.target

        setBook({...book, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(book.BookID) {
            bookService.updateBook(BookID, book)
        } else {
            bookService.createBook(book)
        }
        setBook(initialFormState)
        navigate('/')
    }

    const title = <h2>{book.id ? 'Edit Book' : 'Create Book'}</h2>

    return (
        <Container>
            {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='book_Title'>Title: </Label>
                    <Input type='text' name='book_Title' id='book_Title' value={book.book_Title || ''}
                            onChange={handleChange} autoComplete='name'/>
                </FormGroup>
                <FormGroup>
                    <Label for='book_Price'>Price: $</Label>
                    <Input type='' name='book_Price' id='book_Price' value={book.book_Price || ''}
                            onChange={handleChange} autoComplete='name'/>
                </FormGroup>
                <FormGroup>
                    <Button color='primary' type='submit'>Save</Button>
                    <Button color='secondary' to='/'>Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    )
}
export default BookUpdate