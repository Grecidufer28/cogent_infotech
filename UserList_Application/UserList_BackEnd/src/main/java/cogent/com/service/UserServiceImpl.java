package cogent.com.service;

import cogent.com.entity.User;
import cogent.com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
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
    public User getUserById(Integer id) {
        return findUser(id);
    }

    @Override
    public User updateUser(int id, User user) {
        User userToUpdate = findUser(id);
        if(userToUpdate != null) {
            userToUpdate.setFirstName(user.getFirstName());
            userToUpdate.setLastName(user.getLastName());
            userToUpdate.setEmail(user.getEmail());
            userRepository.save(userToUpdate);
        }
        return userToUpdate;
    }

    @Override
    public void deleteUser(Integer id) {
        User userToDelete = findUser(id);
        if(userToDelete != null)
            userRepository.delete(userToDelete);
    }

    @Override
    public User findUser(Integer id) {
        return userRepository.getReferenceById(id);
//        return userRepository.findById(id).orElse(null);
    }
}
