function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []
}

let student1 = new Student("Василиса", "женский", 19);

let student2 = new Student("Артём", "мужской", 25);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName; 
}

Student.prototype.addMarks = function (...marks) {
   if(this.marks){
    for(mark of marks)
    this.marks.push(mark)
    }
}

Student.prototype.getAverage = function () {
    if (this.marks.length === 0 || this.marks === undefined){
        return 0;
      }else{
        return (this.marks.reduce((a, b) => a + b, 0))/this.marks.length;
      }
}

Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject 
  this.excluded = reason
}
