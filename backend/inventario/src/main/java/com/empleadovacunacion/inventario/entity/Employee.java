package com.empleadovacunacion.inventario.entity;
import javax.persistence.*;
@Entity
@Table(name="employee")
public class Employee {
@Id
@GeneratedValue(strategy = GenerationType.TABLE)
@Column(columnDefinition = "serial")
    private Integer id_employe;
    private String identification;
    private String names;
    private String lastNames;
    private String mail;
    private String birthDate;
    private String address;
    private String phone;
    private String vaccinationStatus;
    private String vaccinationType;

    public Integer getId_employe() {
        return id_employe;
    }

    public void setId_employe(Integer id_employe) {
        this.id_employe = id_employe;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getNames() {
        return names;
    }

    public void setNames(String names) {
        this.names = names;
    }

    public String getLastNames() {
        return lastNames;
    }

    public void setLastNames(String lastNames) {
        this.lastNames = lastNames;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getVaccinationStatus() {
        return vaccinationStatus;
    }

    public void setVaccinationStatus(String vaccinationStatus) {
        this.vaccinationStatus = vaccinationStatus;
    }

    public String getVaccinationType() {
        return vaccinationType;
    }

    public void setVaccinationType(String vaccinationType) {
        this.vaccinationType = vaccinationType;
    }

    public Employee(Integer id_employe, String identification, String names, String lastNames, String mail, String birthDate, String address, String phone, String vaccinationStatus, String vaccinationType) {
        this.id_employe = id_employe;
        this.identification = identification;
        this.names = names;
        this.lastNames = lastNames;
        this.mail = mail;
        this.birthDate = birthDate;
        this.address = address;
        this.phone = phone;
        this.vaccinationStatus = vaccinationStatus;
        this.vaccinationType = vaccinationType;
    }

    public Employee() {

    }
}
