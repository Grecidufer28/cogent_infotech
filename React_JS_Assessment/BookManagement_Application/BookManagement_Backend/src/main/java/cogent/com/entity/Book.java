package cogent.com.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "books")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int BookID;
    private String Book_Title;
    private float Book_Price;

    public Book(String Book_Title, float Book_Price) {
        this.Book_Title = Book_Title;
        this.Book_Price = Book_Price;
    }
}
