var person = {
  firstname: 'Hello',
  lastname: 'World',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function() {
  console.log('logged: ' + this.getFullName());
}

logName = logName.bind(person);
logName();
