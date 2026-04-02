//your JS code here. If required.
let select  = document.getElementById("colorSelect");
let button = document.querSelector('input[type="button"');

button.addEventListner("click" , function(){
	const choosen = select.selectedIndex;
	if(choosen != null){
		select.remove(choosen);
	}
})