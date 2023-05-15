package cogent.com.service;

import cogent.com.entity.Book;
import cogent.com.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepo;

    @Override
    public Book createBook(Book book) {
        return bookRepo.save(book);
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    @Override
    public List<Book> getBooksByName(String bookName) {
        return bookRepo.getBooksByName(bookName);
    }

    @Override
    public Book getBookById(Integer BookID) {
        return bookRepo.getReferenceById(BookID);
    }

    @Override
    public void updateBook(Integer BookID, Book book) {
        Book bookToUpdate = getBookById(BookID);
        if(bookToUpdate != null) {
            bookToUpdate.setBook_Title(book.getBook_Title());
            bookToUpdate.setBook_Price(book.getBook_Price());
            bookRepo.save(bookToUpdate);
        }
    }

    @Override
    public void deleteBook(Integer BookID) {
        Book bookToDelete = getBookById(BookID);
        if(bookToDelete != null)
            bookRepo.delete(bookToDelete);
    }
}
