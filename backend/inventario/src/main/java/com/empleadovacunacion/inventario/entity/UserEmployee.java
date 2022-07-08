package com.empleadovacunacion.inventario.entity;

import javax.persistence.*;

@Entity
@Table(name="userEmployee")
public class UserEmployee {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(columnDefinition = "serial")
    private Integer id_user;
    private Integer id_employee;
    private String usuario;
    private String password;
    private String rol;

    public Integer getId_user() {
        return id_user;
    }

    public void setId_user(Integer id_user) {
        this.id_user = id_user;
    }

    public Integer getId_employee() {
        return id_employee;
    }

    public void setId_employee(Integer id_employee) {
        this.id_employee = id_employee;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public UserEmployee(Integer id_user, Integer id_employee, String usuario, String password, String rol) {
        this.id_user = id_user;
        this.id_employee = id_employee;
        this.usuario = usuario;
        this.password = password;
        this.rol = rol;
    }

    public UserEmployee() {

    }
}
