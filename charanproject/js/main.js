const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function validate(){
	var name=document.getElementById("name").value;
	var pass=document.getElementById("password").value;
}
if(name.length<5){
	text="Enter valid User Name";
	alert(text);
}
if(pass.length<5){
	text="Enter valid password";
	alert(text);
}
