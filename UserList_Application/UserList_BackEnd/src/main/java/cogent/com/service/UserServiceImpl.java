package cogent.com.service;

import cogent.com.entity.User;
import cogent.com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public String createUser(User user) {
        userRepository.save(user);
        return "User has been added!";
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<User> getUsersByName(String nameFilter) {
        return userRepository.getUsersByName(nameFilter);
    }

    @Override
    public String updateUser(User user) {
        User userToUpdate = findUser(user.getId());
        if(userToUpdate == null)
            return user.getFirstName() + " " + user.getLastName() + " does not exist.";
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setEmail(user.getEmail());
        userRepository.save(userToUpdate);
        return userToUpdate.getFirstName() + " " + userToUpdate.getLastName() + " has been updated!";
    }

    @Override
    public String deleteUser(User user) {
        userRepository.delete(user);
        return user.getFirstName() + " " + user.getLastName() + " has been deleted.";
    }

    @Override
    public User findUser(Integer id) {
        return userRepository.findById(id).orElse(null);
    }
}
