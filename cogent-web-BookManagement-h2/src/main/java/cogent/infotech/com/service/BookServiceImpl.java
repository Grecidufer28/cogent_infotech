package cogent.infotech.com.service;

import cogent.infotech.com.entity.Book;
import cogent.infotech.com.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> fetchBooks() {
        return (List<Book>) bookRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public Optional<Book> fetchBook(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public void updateBook(Long id, Book book) {
        Optional<Book> temp = fetchBook(id);
        Book updatedBook = temp.get();
        updatedBook.setBookTitle(book.getBookTitle());
        updatedBook.setBookAuthor(book.getBookAuthor());
        updatedBook.setBookPrice(book.getBookPrice());
        bookRepository.save(updatedBook);
    }
}
