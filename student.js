var fs = require("fs");

exports.newStudent = class Student {

    constructor(id, email, name, gender, picture, age, level, course, amountPaid) {
        this.name = name;
        this.picture = picture;
        this.age = age;
        this.level = level;
        this.course = course;
        this.amountPaid = amountPaid;
        this.id = id;
        this.email = email;
        this.gender = gender;
    }




    ///returns student's information
    getStudentInformation() {
        return JSON.stringify(this);
    }

    //saves student to file
    saveStudentToFile() {
        fs.writeFile(this.name + ".txt", this.getStudentInformation(), function (error) {
            if (error) throw error;
            console.log(saveStudentToFile);
        });
    }


    //receives new name and update
    updateStudentName(name){
        //set new name
        //update File
        this.saveStudentToFile();
    }

};