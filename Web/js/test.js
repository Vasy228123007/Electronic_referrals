$(function() {

let nomer = $("#nomer");
let likar;
let all_likar = ["Чума Светлана","Зубенко Михайло"];

$("#send").click(function() { 

console.log("Ваш номер: "+nomer.val());
$(".likar_form").show();
$(".phone_form").hide();
return false; });

$("#sendlikar").click(function() { 

likar=$("#likar").val();
console.log("Ваш лікар: "+all_likar[likar]);
 
return false; });

});

