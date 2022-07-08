package com.empleadovacunacion.inventario.repo;

import com.empleadovacunacion.inventario.entity.UserEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepoUsr extends JpaRepository<UserEmployee, Integer> {
   //@Transactional(readOnly = true)
   public List<UserEmployee> findByUsuarioAndPassword(String usuario,String password);

}
