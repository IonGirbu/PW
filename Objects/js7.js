let person = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova',

    get namenew() {
        this.name = prompt("Introduceti numele:");
        return this.name;
    },
    get agenew() {
        nage = prompt("Introduceti varsta:");
        return this.age = Number(nage);
    },
    get salarynew() {
        nsalary = prompt("Introduceti salariul:");
        return this.salary = Number(nsalary);
    },
    get contactsnew() {
        nphonecon = prompt("Introduceti numarul de telefon:");
        nemail = prompt("Introduceti adresa electronica:");
        this.contacts.phone = Number(nphonecon);
        this.contacts.email = nemail;
    },
    get addressnew() {
        naddress = prompt("Introduceti adresa:");
        return this.address = naddress;
    }
};
console.log(person);