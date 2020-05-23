let yourName = prompt ("Как вас зовут?", "");


if (yourName == "" || yourName == null) {
	alert ("Добро пожаловать на наш сайт!");
}
else {
	alert ("Здравствуйте " + yourName + ". Добро пожаловать на наш сайт!");
}
