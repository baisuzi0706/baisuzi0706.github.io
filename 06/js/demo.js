function enter() {
	var sever = prompt("请在此选择您所需的服务", "并输入服务代号1，2，3");
	switch (sever) {
		
		case "1":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/01.png'><br/><img src='images/011.png'></div>";
			break;
		case "2":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/02.png'><br/><img src='images/022.png'></div>";
			break;
		case "3":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/03.png'></div>";
			break;
		
		default: alert('请检查您输入的服务代号是否正确？');
	}
}
function abandon() {
	
	alert('您确定不使用我们这样专业的团队？\n 快去选择您所需的服务吧！');
	
} 