package cogent.com.controller;

import cogent.com.entity.Book;
import cogent.com.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bookapi")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/createBook")
    public Book createBook(@Validated @RequestBody Book book) {
        System.out.println(book);
        return bookService.createBook(book);
    }

    @GetMapping("/getAllBooks")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/getBooksByName/{bookName}")
    public List<Book> getBooksByName(@Validated @PathVariable("bookName") String bookName) {
        return bookService.getBooksByName(bookName);
    }

    @GetMapping("/book/{BookID}")
    public Book getBookById(@Validated @PathVariable("BookID") Integer BookID) {
        return bookService.getBookById(BookID);
    }

    @PutMapping("/updateBook/{BookID}")
    public void updateBook(@Validated @PathVariable("BookID") Integer BookID, @Validated @RequestBody Book book) {
        bookService.updateBook(BookID, book);
    }

    @DeleteMapping("/deleteBook/{BookID}")
    public void deleteBook(@Validated @PathVariable("BookID") Integer BookID) {
        bookService.deleteBook(BookID);
    }
}
