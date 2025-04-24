package Tharun.Gadget.controller;

import Tharun.Gadget.model.User;
import Tharun.Gadget.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173/") // or "*" for development
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String registerUser(@RequestBody User user) {
        userService.registerUser(user);
        return "User registered successfully";
    }

    @PostMapping("/signin")
    public String loginUser(@RequestBody User loginData) {
        Optional<User> user = userService.loginUser(loginData.getEmail(), loginData.getPassword());
        return user.isPresent() ? "Login successful" : "Invalid credentials";
    }
}
