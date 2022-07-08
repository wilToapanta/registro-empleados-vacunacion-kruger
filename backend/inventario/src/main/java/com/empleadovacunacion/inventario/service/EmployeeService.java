package com.empleadovacunacion.inventario.service;

import com.empleadovacunacion.inventario.entity.Employee;
import com.empleadovacunacion.inventario.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;
    public Employee insert(Employee person){
        return employeeRepo.save(person);
    }
    public Employee update(Employee person){
        return employeeRepo.save(person);
    }
    public List<Employee> list(){
        return employeeRepo.findAll();
    }
    public void delete(Integer id){

        employeeRepo.deleteById(id);
    }

    public Object employeeById(Integer id){
        return employeeRepo.findById(id);
    }
}
