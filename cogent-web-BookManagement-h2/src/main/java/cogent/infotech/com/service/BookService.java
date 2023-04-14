package cogent.infotech.com.service;

import cogent.infotech.com.entity.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    public Book saveBook(Book book);
    public List<Book> fetchBooks();
    public void delete(Long id);
    public Optional<Book> fetchBook(Long id);
    public void updateBook(Long id, Book book);
}
