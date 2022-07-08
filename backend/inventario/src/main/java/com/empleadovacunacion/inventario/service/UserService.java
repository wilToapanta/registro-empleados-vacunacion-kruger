package com.empleadovacunacion.inventario.service;

import com.empleadovacunacion.inventario.entity.UserEmployee;
import com.empleadovacunacion.inventario.repo.UserRepo;
import com.empleadovacunacion.inventario.repo.UserRepoUsr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private UserRepoUsr userLogin;

    public UserEmployee insert(UserEmployee user){
        return userRepo.save(user);
    }
    public List<UserEmployee> list(){
        return userRepo.findAll();
    }
    public UserEmployee update(UserEmployee emp){
        return userRepo.save(emp);
    }
    public void delete(Integer id){
        userRepo.deleteById(id);
    }

    public Object getUserById(Integer id){
        return userRepo.findById(id);
    }

   public UserEmployee login(UserEmployee usr){
        List<UserEmployee> usua=userLogin.findByUsuarioAndPassword(usr.getUsuario(),usr.getPassword());
        if(!usua.isEmpty()){
            return usua.get(0);
        }
        return null;
    }

}
