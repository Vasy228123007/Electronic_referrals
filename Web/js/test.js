$(function() {

let nomer = $("#nomer");
let likar;
let all_likar = ["Чума Светлана","Зубенко Михайло","Зуб Степан","Голомозий Петро","Кортопле Олег"];

$("#send").click(function() { 

if(nomer.val() == "")
	{alert("Ви не ввели номер телефону")}
else
	{
console.log("Ваш номер: "+nomer.val());
$(".likar_form").show();
$(".phone_form").hide();
return false;
	}
});

$("#sendlikar").click(function() { 

likar=$("#likar").val();
//console.log("Ваш лікар: "+all_likar[likar]);
 
$(".chat_form").show();
$(".likar_form").hide();
$(".info").html("Ваш лікар: <b>"+all_likar[likar]+"</b>");

return false; });

});

