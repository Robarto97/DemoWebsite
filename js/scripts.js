function openMenu() {
  	var x = document.getElementById("items");
  	if (x.style.display === "block") {
    	x.style.display = "none";
  	} else {
    	x.style.display = "block";
  	}
}

function toggle(x){
	x.classList.toggle("toggle")
}