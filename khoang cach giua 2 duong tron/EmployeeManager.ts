enum GENDER {male="male",female="female",other="other"}
class Employee {
    name:string;
    private gender: GENDER;
    email: string;
    birthday?: Date;
    phone?: string;
    static count:number=0
    constructor(name: string,gender:GENDER, email: string,birthday?: Date,phone?: string){
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
        Employee.count++
    }
    getGender(){
        return this.gender
    }
}
function showEmployee(employee:Employee):void{
    console.log(`nhan vien ${employee.name},gioi tinh ${employee.getGender()}, ngay sinh ${employee.birthday}, email ${employee.email}`)
}
let employee1 = new Employee("nguyen van a",GENDER.male, "abc@gmail.com")
let employee2 = new Employee("nguyen thi b",GENDER.female, "bca@gmail.com")
let employee3 = new Employee("nguyen thi c",GENDER.female, "cba@gmail.com")

let listEmployee: Employee[] =[]
function addEmployee(employee:Employee):void{
    listEmployee.push(employee);
}
function delEmployee(i:number):void{
    listEmployee.splice(i-1,1)
}
employee1.name = "Nguyen Van D"
addEmployee(employee1)
addEmployee(employee2)
addEmployee(employee3)
listEmployee.forEach(value => showEmployee(value))
delEmployee(2)
console.log(Employee.count)
// listEmployee.forEach(value => showEmployee(value))