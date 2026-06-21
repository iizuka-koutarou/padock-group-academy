// 現在ログイン中ユーザー

function getCurrentUser(){

return localStorage.getItem("currentUser");

}

// 修了登録

function completeCourse(course){

const user = getCurrentUser();

if(!user) return;

localStorage.setItem(
user + "_" + course,
"pass"
);

}

// 修了確認

function isCompleted(course){

const user = getCurrentUser();

if(!user) return false;

return localStorage.getItem(
user + "_" + course
) === "pass";

}

// 修了率計算

function getProgress(){

const courses = [

"appearance",
"phone",
"cleaning",
"customer_check",
"hearing",
"questionnaire",
"welcome_drink",
"estimate",
"assessment",
"contract",
"delivery",
"after_follow"

];

let complete = 0;

courses.forEach(course=>{

if(isCompleted(course)){

complete++;

}

});

return Math.round(
(complete / courses.length) * 100
);

}
