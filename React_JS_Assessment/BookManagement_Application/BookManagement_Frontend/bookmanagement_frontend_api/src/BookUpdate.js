import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap'
import BookService from './BookService';
import FetchClient from './FetchClient';

const BookUpdate = () => {
    const initialFormState = {
        Book_Title: '',
        Book_Price:'',
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
            console.log(book.Book_Title)
            console.log(book.Book_Price)
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
                    <Label for='Book_Title'>Title: </Label>
                    <Input type='text' name='Book_Title' id='Book_Title' value={book.Book_Title || ''}
                            onChange={handleChange} autoComplete='name'/>
                </FormGroup>
                <FormGroup>
                    <Label for='Book_Price'>Price: $</Label>
                    <Input type='' name='Book_Price' id='Book_Price' value={book.Book_Price || ''}
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