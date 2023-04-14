package cogent.infotech.com.controller;

import cogent.infotech.com.entity.Book;
import cogent.infotech.com.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/books")
    public Book saveBook(@Validated @RequestBody Book book) {
        return bookService.saveBook(book);
    }

    @GetMapping("/books")
    public List<Book> fetchBookList() {
        return bookService.fetchBooks();
    }

    @DeleteMapping("/books/{id}")
    public void delete(@PathVariable Long id) {
        bookService.delete(id);
    }

    public Optional<Book> fetchBook(@PathVariable Long id) {
        return bookService.fetchBook(id);
    }

}
