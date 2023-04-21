package cogent.infotech.com.service;

import cogent.infotech.com.entity.User;
import cogent.infotech.com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Override
    public User saveUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public String deleteUser(Long id) {
        User userToDelete = getUserById(id);
        if(userToDelete == null)
            return "User with ID#" + id + " does not exist in the database.";
        repository.deleteById(id);
        return userToDelete.getName() + " has been deleted from the database!";
    }

    @Override
    public User getUserById(Long id) {
        Optional<User> user = repository.findById(id);
        return user.orElse(null);
    }

    @Override
    public String updateUser(Long id, User user) {
        User updatedUser = getUserById(id);
        if(updatedUser != null) {
            updatedUser.setName(user.getName());
            updatedUser.setAge(user.getAge());
            updatedUser.setSalary(user.getSalary());
            repository.save(updatedUser);
            return "User with ID#"+id+" has been updated!";
        }
        return "User with ID#"+id+" does not exist in the database.";
    }
}
