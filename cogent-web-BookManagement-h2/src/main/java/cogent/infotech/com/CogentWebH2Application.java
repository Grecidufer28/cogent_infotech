package cogent.infotech.com;

import cogent.infotech.com.entity.User;
import cogent.infotech.com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class CogentWebH2Application {

	@Autowired
	UserRepository repository;
	@PostConstruct
	public void initUsers() {
		List<User> users = Stream.of(
				new User(101, "anudeep", "Grecidufer", "anudeepg28@gmail.com"),
				new User(102, "user1", "pswd1", "user1@gmail.com"),
				new User(103, "user2", "pswd2", "user2@gmail.com"),
				new User(104, "user3", "pswd3", "user3@gmail.com")
		).collect(Collectors.toList());
		repository.saveAll(users);
	}

	public static void main(String[] args) {
		SpringApplication.run(CogentWebH2Application.class, args);
	}

}
