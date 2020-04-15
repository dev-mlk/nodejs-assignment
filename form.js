var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var student = require('./student');


http.createServer(function (req, res) {
   
    if(req.url == '/createStudent' && req.method === 'post'){
        console.log('create student')
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            if(error) throw error;
            console.log(JSON.stringify(files));

            var newStudent = new student.newStudent();
            newStudent.name = fields.nameOfstudent;
            newStudent.age = fields.ageOfstudent;
            newStudent.course = fields.courseStudent;
            newStudent.email = fields.emailStudent
            newStudent.level = fields.levelOfStudent
            newStudent.gender = fields.genderOfStudent
            newStudent.amountPaid = fields.amountPaidOfStudent
           console.log(newStudent.saveStudentToFile())
           res.end('Student Created')
           console.log(newStudent.getStudentInformation())
        });
    }else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');

        res.write('<label for="studentPict"> Student Picture</label><br>');
        res.write('<input type="file" id="studentPict" name="studentPict"><br>');

        res.write('<label for="name">Name</label><br>');
        res.write('<input type="text" id="name" name="nameOfStudent"><br>');

        res.write('<label for="age">Age</label><br>');
        res.write('<input type="text" id="age" name="ageOfStudent"><br>');

        res.write('<label for="level">Level</label><br>');
        res.write('<input type="number" id="level" name="levelOfStudent"><br>');

        res.write('<label for="email">Email</label><br>');
        res.write('<input type="email" id="email" name="emailOfStudent"><br>');

        res.write('<label for="course">Course</label><br>');
        res.write('<input type="text" id="course" name="courseOfStudent"><br>');

        res.write('<label for="id">Id</label><br>');
        res.write('<input type="number" id="id" name="idOfStudent"><br>');

        res.write('<label for="amountPaid">AmountPaid</label><br>');
        res.write('<input type="number" id="amountPaid" name="amountPaidOfStudent"><br>');

        res.write('<label for="gender">Gender</label><br>');
        res.write('<input type="text" id="gender" name="genderOfStudent"><br>');

        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }

    

}).listen(2035);
console.log('Your server load on localhost:2035');