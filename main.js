Name_of_the_student_array=[];
function submit(){
    var name1 = document.getElementById("name_of_the_student_1").value ;
    var name2 = document.getElementById("name_of_the_student_2").value ;
    var name3 = document.getElementById("name_of_the_student_3").value ;
    var name4 = document.getElementById("name_of_the_student_4").value ;
    Name_of_the_student_array.push(name1);
    Name_of_the_student_array.push(name2);
    Name_of_the_student_array.push(name3);
    Name_of_the_student_array.push(name4);
    console.log(Name_of_the_student_array);
    document.getElementById("display_names").innerHTML = Name_of_the_student_array;
    document.getElementById("submit").style.display= "none";
    document.getElementById("sort").style.display= "inline-block";


}
function sort(){
    Name_of_the_student_array.sort();
    console.log(Name_of_the_student_array);
    document.getElementById("display_names").innerHTML = Name_of_the_student_array;
}

