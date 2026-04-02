//your JS code here. If required.
let select  = document.getElementById("colorSelect");
let button = document.querySelector('input[type="button"]');

button.addEventListener("click" , function(){
	const choosen = select.selectedIndex;
	if(choosen != -1){
		select.remove(choosen);
	}
})