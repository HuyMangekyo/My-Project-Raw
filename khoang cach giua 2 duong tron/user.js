var int;
(function (int) {
    int[int["admin"] = 1] = "admin";
    int[int["user"] = 2] = "user";
})(int || (int = {}));
var user = /** @class */ (function () {
    function user(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    user.prototype.getinfo = function () {
        return "user ".concat(this.name, ", email: ").concat(this.email);
    };
    user.prototype.isAdmin = function () {
        if (this.role == 1) {
            console.log("admin");
        }
        else {
            console.log("user");
        }
    };
    return user;
}());
var user1 = new user("okchoac", "okchoac@gmail.com", 2);
console.log(user1.getinfo());
user1.isAdmin();
