package cogent.com.service;

import cogent.com.entity.Book;

import java.util.List;

public interface BookService {

    public Book createBook(Book book);
    public List<Book> getAllBooks();
    public List<Book> getBooksByName(String bookName);
    public Book getBookById(Integer BookID);
    public void updateBook(Integer BookID, Book book);
    public void deleteBook(Integer BookID);
}
