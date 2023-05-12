package cogent.com.controller;

import cogent.com.entity.User;
import cogent.com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/createUser")
    public String createUser(@Validated @RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/getUsersByName/{nameFilter}")
    public List<User> getUsersByName(@Validated @PathVariable("nameFilter") String nameFilter) {
        return userService.getUsersByName(nameFilter);
    }

    @PutMapping("/updateUser")
    public String updateUser(@Validated @RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("/deleteUser")
    public String deleteUser(@Validated @RequestBody User user) {
        return userService.deleteUser(user);
    }
}
