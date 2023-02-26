const courseModel= require('../models/courseModel');

module.exports.getAllCourses= async function(){
    return await courseModel.find({});

}
module.exports.createCourse= async function(){
    const courses=await courseModel(courseInput);
    await course.save();

}
module.exports.updateCourse= async function(courseId, courseInput){
    await courseModel.findOneAndUpdate({_id : courseId, courseInput});

}

module.exports.createFirstCourse= async function(){
    const courses=await courseModel.find({});
    if(courses&&courses.length==0){

        const firstCourseInput ={
            "title" :" bz DSA",
            "level" :"easy",
        };

        const course = new courseModel(firstCourseInput);
        await course.save();
    }

}