package com.empleadovacunacion.inventario.repo;

import com.empleadovacunacion.inventario.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository <Employee,Integer>{

}
