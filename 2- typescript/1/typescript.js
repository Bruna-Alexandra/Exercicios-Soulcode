"use strict";
class User {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.cpf = '';
        this.contact = '';
        this.isAdmin = false;
    }
    //----------------------------------------------------------------------------//
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getUsername() {
        return this.username;
    } 
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.lastName;
    }
    getCpf() {
        return this.cpf;
    }
    getContact() {
        return this.contact;
    }
    getIsAdmin() {
        return this.isAdmin;
    }
    //----------------------------------------------------------------------------//
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setUsername(username) {
        this.username = username;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setContact(contact) {
        this.contact = contact;
    }
    setIsAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
}
