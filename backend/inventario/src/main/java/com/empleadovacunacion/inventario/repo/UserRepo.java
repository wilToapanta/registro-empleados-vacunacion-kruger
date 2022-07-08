package com.empleadovacunacion.inventario.repo;

import com.empleadovacunacion.inventario.entity.UserEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserEmployee,Integer> {


}
