package cogent.infotech.com.service;

import cogent.infotech.com.entity.User;

import java.util.List;

public interface UserService {

    public User saveUser(User user);
    public List<User>getAllUsers();
    public String deleteUser(Long id);
    public User getUserById(Long id);
    public String updateUser(Long id, User user);
}
