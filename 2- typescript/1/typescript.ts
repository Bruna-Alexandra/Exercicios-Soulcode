interface UserProps {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    cpf: string,
    contact: string,
    isAdmin: boolean
}

class User implements UserProps{
    firstName: string = '';
    lastName: string = '';
    username: string = '';
    email: string = '';
    password: string = '';
    cpf: string = '';
    contact: string = '';
    isAdmin: boolean = false;
//----------------------------------------------------------------------------
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
//----------------------------------------------------------------------------
    setFirstName(firstName:string) {
        this.firstName = firstName;
    }
    setLastName(lastName:string) {
        this.lastName = lastName;
    }
    setUsername(username:string) {
        this.username = username;
    }
    setEmail(email:string) {
        this.email = email;
    }
    setPassword(password:string) {
        this.password = password;
    }
    setCpf(cpf:string) {
        this.cpf = cpf;
    }
    setContact(contact:string) {
        this.contact = contact;
    }
    setIsAdmin(isAdmin:boolean) {
        this.isAdmin = isAdmin;
    }
}
