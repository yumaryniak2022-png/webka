function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
};
function Course(title) {
    this.title = title;
    this.students = [];
}
Course.prototype.addStudent = function (student) {
    this.students.push(student);
    student.addCourse(this); 
};
function Teacher(name) {
    Person.call(this, name);  
    this.courses = [];
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.addCourse = function (course) {
    this.courses.push(course);
};
function Student(name) {
    Person.call(this, name);
    this.courses = [];
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.addCourse = function (course) {
    this.courses.push(course);
};

Student.prototype.viewCourses = function () {
    return this.courses.map(c => c.title);
};
const course1 = new Course("JavaScript Basics");
const course2 = new Course("Frontend Development");

const teacher = new Teacher("Іван Петрович");

teacher.addCourse(course1);
teacher.addCourse(course2);

const student1 = new Student("Юра");
const student2 = new Student("Тарас");

course1.addStudent(student1);
course1.addStudent(student2);
course2.addStudent(student1);

console.log("Викладач:", teacher.getName());
console.log("Курси викладача:", teacher.courses.map(c => c.title));

console.log("Студент:", student1.getName());
console.log("Курси студента:", student1.viewCourses());

console.log("Студенти на курсі JS:", course1.students.map(s => s.getName()));
