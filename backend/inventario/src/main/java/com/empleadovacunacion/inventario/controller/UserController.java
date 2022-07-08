package com.empleadovacunacion.inventario.controller;

import com.empleadovacunacion.inventario.entity.UserEmployee;

import com.empleadovacunacion.inventario.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping
    public List<UserEmployee>listar(){
        return userService.list();
    }
    @PostMapping
    public UserEmployee insert(@RequestBody UserEmployee emp){
        return  userService.insert(emp);
    }
    @PutMapping
    public UserEmployee update(@RequestBody UserEmployee emp){
        return userService.update(emp);
    }
    @DeleteMapping(value="/{id}")
    public void delete(@PathVariable Integer id){
        userService.delete(id);
    }


    @PostMapping(path = "/login")
    public UserEmployee login(@RequestBody UserEmployee usr){
        return userService.login(usr);

    }


}
