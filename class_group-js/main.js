function University(name, location, classes = []) {
    this.name = name;
    this.location = location;
    this.classes = classes;

    this.Transfer = (student, Classname) => {
        let olduguqrup = this.classes.find((item) => {
            return item.students.some(telebe => telebe.pin === student.pin)
        });
        olduguqrup.removeStudent(student.pin);
        Classname.addStudent(student);
    }
}
function Class(name, degree, currentYear, students = []) {
    this.name = name;
    this.degree = degree;
    this.currentYear = currentYear;
    this.students = students;
    this.addStudent = (student) => {
        this.students.push(student);
    };
    this.removeStudent = (pin) => {
        this.students = this.students.filter((student) => student.pin !== pin)
    };
    this.FindStu = (point) => {
        return this.students = this.students.filter((students) => students.gpa > point)
    };

}
// Add GPA property
function Student(name, surname, paid, pin, gpa) {
    this.firstName = name;
    this.lastName = surname;
    this.paid = paid;
    this.pin = pin;
    this.gpa = gpa;

    this.getFullName = () => {
        return this.firstName + ' ' + this.lastName;
    }
}
const stu1 = new Student('Simara', 'Maharramli', 'Dovlet sifarishi', 1, 89.9)
const stu2 = new Student('Dilara', 'Maharramli', 'Dovlet sifarishi', 2, 65.5)
const stu3 = new Student('Fatima', 'Bayramova', 'Dovlet sifarishi', 3, 77)
const stu4 = new Student('behmankes', 'behmankesova', '2100', 4, 55)
const stu5 = new Student('flankes', 'flankesova', '1800', 5, 98)

const Newclass1 = new Class('KE020S', 'bakalavr', 2019);
const Newclass2 = new Class('KE021S', 'master', 2022);


Newclass1.addStudent(stu4);
Newclass1.addStudent(stu5);
Newclass1.addStudent(stu1);
Newclass1.addStudent(stu2);
Newclass1.addStudent(stu3);
// console.log(Newclass1);
// console.log(Newclass1.removeStudent(1));

console.log(Newclass1.FindStu(80));

