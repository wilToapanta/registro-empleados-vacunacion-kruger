package com.empleadovacunacion.inventario.controller;

import com.empleadovacunacion.inventario.entity.Employee;
import com.empleadovacunacion.inventario.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/employee")
public class EmployeController {
    @Autowired
    private EmployeeService employeeService;
    @GetMapping
    public List<Employee>list(){
        return employeeService.list();
    }
    @PostMapping
    public Employee insert(@RequestBody Employee person){
        return employeeService.insert(person);
    }
    @PutMapping
    public Employee update(@RequestBody Employee person){
        return  employeeService.update(person);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id){
        employeeService.delete(id);
    }

}
