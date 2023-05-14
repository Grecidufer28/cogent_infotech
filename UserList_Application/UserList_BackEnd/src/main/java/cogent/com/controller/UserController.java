package cogent.com.controller;

import cogent.com.entity.User;
import cogent.com.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@Validated @RequestBody User user) throws URISyntaxException {
        User result = userService.createUser(user);
        return ResponseEntity.created(new URI("api/createUser/" + result.getId())).body(result);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/getUsersByName/{nameFilter}")
    public List<User> getUsersByName(@Validated @PathVariable("nameFilter") String nameFilter) {
        return userService.getUsersByName(nameFilter);
    }

    @GetMapping("/user/{id}")
    public User getUserById(@Validated @PathVariable Integer id) {
        return userService.getUserById(id);
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<User> updateUser(@Validated @PathVariable int id, @Validated @RequestBody User user) {
        User result = userService.updateUser(id, user);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@Validated @PathVariable Integer id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
