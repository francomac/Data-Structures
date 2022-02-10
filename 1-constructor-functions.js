

function User(fisrtName, lastName, age, gender) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

let user1 = new User('franco', 'mac', '35', 'male');
// console.log(user1);

let user200 = new User('user', '200', '300', 'binary')
// console.log(user200);

User.prototype.emailDomain = "@facebook.com";
// console.log(user200.emailDomain)

User.prototype.getEmailAddress = function() {
    return this.fisrtName + this.lastName + this.emailDomain;
}
// console.log(user200.getEmailAddress())

module.exports = {
  User
}