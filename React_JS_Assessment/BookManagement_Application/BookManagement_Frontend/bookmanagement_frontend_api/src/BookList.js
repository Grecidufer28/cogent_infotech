import React, {useEffect, useState} from 'react'
import {Button, ButtonGroup, Container, Table} from 'reactstrap'
import BookService from './BookService'
import {Link} from 'react-router-dom'
import FetchClient from './FetchClient'

const BookList = () => {
    const [books, setBooks] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const bookService = new BookService(FetchClient)

    const fetchBooks = async () => {
        try {
            const users = await bookService.getAllBooks()
            setBooks(users)
        } catch (error) {
            setError(error)
            setIsLoaded(false)
        }
    }

    const removeBook = async (id) => {
        bookService.deleteBook(id)
        // window.location.reload(false)
        const updatedBookList = books.filter(book => book.BookID != id)
        setBooks(updatedBookList)
    }

    useEffect(() => {
        setIsLoaded(true)
        

        fetchBooks()
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
        return <div>Loading...</div>
    }

    const booklist = books.map(book => {
        return <tr key = {book.BookID}>
            <td>{book.Book_Title}</td>
            <td>{book.Book_Price}</td>
            <td>
                <ButtonGroup>
                    <Button size='sm' color='primary' tag={Link} to={"/books/"+book.BookID}>Update</Button>
                    <Button size='sm' color='danger' onClick={() => removeBook(book.BookID)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    })

    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
            <Container fluid>
                <div>
                    <Button color='success' tag={Link} to="/books/new">Add Book</Button>
                </div>
                <h2>Book List</h2>
                <Table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {booklist}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
    
}

export default BookList;