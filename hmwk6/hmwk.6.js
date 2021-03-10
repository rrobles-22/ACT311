async function fetchCourse(){
    let response = await fetch('csmp.json');
    let data = await response.json();
    console.log(response);

    let instructors = [];
    let htmlthing = "";

    data.forEach((object) => {
      

        let duplicate = false;
        instructors.forEach((Inst) => {
            
            if(object.instructor == Inst){
              
                duplicate = true;
            }
        })
        
        if(duplicate == false){
            
            instructors.push(object.instructor);
            htmlthing += ("<option value='" + object.instructor + "'>"+ object.instructor+ "</option>");
        
        }
    })
    
    document.getElementById("Instructor").innerHTML = htmlthing;
}


async function findCourses(){
   
    let response = await fetch('csmp.json');
    let data = await response.json();
    let courses = "";
    let tableInnerHtml = ""
    data.forEach((object) => {
        if(object.instructor == document.getElementById("Instructor").value){
            courses += ("<li>"+object.course+"-"+object.sec+"</li>");
            tableInnerHtml += "<tr style='background-color: #FFFF00'><td>course</td><td>"+object.course+"-"+object.sec+"</td></tr><tr><td>crn num</td><td>"+object.crn+"</td></tr><tr><td>days</td><td>"+object.days+"</td></tr><tr><td>times</td><td>"+object.times+"</td></tr><tr><td>room</td><td>"+object.room+"</td></tr><tr><td>hours</td><td>"+object.hours+"</td></tr><tr><td>term</td><td>"+object.course_term+"</td></tr><tr><td>Seats left</td><td>"+object.course_enrollment[ 'Section Seats Available' ]+"</td></tr>"
        }
    })
    
    document.getElementById("courseList").innerHTML = courses;
    document.getElementById("courseTable").innerHTML = tableInnerHtml;

}





