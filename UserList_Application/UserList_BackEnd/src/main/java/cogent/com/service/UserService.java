package cogent.com.service;

import cogent.com.entity.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {

    public User createUser(User user);
    public List<User> getAllUsers();
    public List<User> getUsersByName(String nameFilter);
    public User getUserById(Integer id);
    public User updateUser(int id, User user);
    public void deleteUser(Integer id);

    User findUser(Integer id);
}
