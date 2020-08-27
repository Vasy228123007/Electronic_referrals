$(function() {

let nomer = $("#nomer");
let likar;
let all_likar = ["Чума Светлана","Зубенко Михайло","Зуб Степан","Голомозий Петро","Кортопле Олег"];

$("#send").click(function() { 

if(nomer.val() == "")
	{alert("Ви не ввели номер телефону")}
else
	{
//console.log("Ваш номер: "+nomer.val());
$(".phone_form").fadeOut(() => {$(".likar_form").fadeIn();});
return false;
	}
});

$("#sendlikar").click(function() { 

likar=$("#likar").val();
//console.log("Ваш лікар: "+all_likar[likar]);
 
$(".likar_form").fadeOut(() => {$(".chat_form").fadeIn();});
$(".info1").html("Ваш номер: <b>"+nomer.val()+"</b>");
$(".info2").html("Ваш лікар: <b>"+all_likar[likar]+"</b>");

return false; });

});

