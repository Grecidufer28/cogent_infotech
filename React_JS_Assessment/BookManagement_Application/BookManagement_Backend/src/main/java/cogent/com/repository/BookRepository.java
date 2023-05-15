package cogent.com.repository;

import cogent.com.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query(value = "SELECT * FROM books WHERE book_title LIKE %:bookName%", nativeQuery = true)
    public List<Book> getBooksByName(String bookName);
}
