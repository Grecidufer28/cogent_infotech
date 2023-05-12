package cogent.com.service;

import cogent.com.entity.User;

import java.util.List;

public interface UserService {

    public String createUser(User user);
    public List<User> getAllUsers();
    public List<User> getUsersByName(String nameFilter);
    public String updateUser(User user);
    public String deleteUser(User user);

    User findUser(Integer id);
}
