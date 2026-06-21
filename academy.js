// =====================
// PADOCK ACADEMY
// 共通管理ファイル
// =====================

// 現在ログイン中のユーザー取得

function getCurrentUser(){

return localStorage.getItem("currentUser");

}

// 修了登録

function completeCourse(course){

const user = getCurrentUser();

if(!user){

console.error("ログインユーザーが見つかりません");

return;

}

localStorage.setItem(
user + "_" + course,
"pass"
);

}

// 修了確認

function isCompleted(course){

const user = getCurrentUser();

if(!user){

return false;

}

return localStorage.getItem(
user + "_" + course
) === "pass";

}

// 修了率取得

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

let completed = 0;

courses.forEach(course=>{

if(isCompleted(course)){

completed++;

}

});

return Math.round(
(completed / courses.length) * 100
);

}

// 全コース修了判定

function isAcademyCompleted(){

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

return courses.every(
course => isCompleted(course)
);

}
