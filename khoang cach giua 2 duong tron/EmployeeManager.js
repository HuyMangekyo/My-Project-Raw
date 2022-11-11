var GENDER;
(function (GENDER) {
    GENDER["male"] = "male";
    GENDER["female"] = "female";
    GENDER["other"] = "other";
})(GENDER || (GENDER = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, email, birthday, phone) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
        Employee.count++;
    }
    Employee.prototype.getGender = function () {
        return this.gender;
    };
    Employee.count = 0;
    return Employee;
}());
function showEmployee(employee) {
    console.log("nhan vien ".concat(employee.name, ",gioi tinh ").concat(employee.getGender(), ", ngay sinh ").concat(employee.birthday, ", email ").concat(employee.email));
}
var employee1 = new Employee("nguyen van a", GENDER.male, "abc@gmail.com");
var employee2 = new Employee("nguyen thi b", GENDER.female, "bca@gmail.com");
var employee3 = new Employee("nguyen thi c", GENDER.female, "cba@gmail.com");
var listEmployee = [];
function addEmployee(employee) {
    listEmployee.push(employee);
}
function delEmployee(i) {
    listEmployee.splice(i - 1, 1);
}
employee1.name = "Nguyen Van D";
addEmployee(employee1);
addEmployee(employee2);
addEmployee(employee3);
listEmployee.forEach(function (value) { return showEmployee(value); });
delEmployee(2);
console.log(Employee.count);
// listEmployee.forEach(value => showEmployee(value))
