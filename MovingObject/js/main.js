function movingImg(e, objToMove){
	objToMove.style.left = e.clientX - objToMove.width / 2 + "px";
	objToMove.style.top = e.clientY  - objToMove.height / 2  + "px";
}


window.onload = function(){
	
	var serious = document.getElementById("seriousSam")
	
	serious.onmousedown = function(){
		
		var save = this;
		
		document.onmousemove = function(e){
			
			movingImg(e, save);
			
			};
		};
		
		document.onmouseup = function(){
			
			this.onmousemove = null;
		};
			
	//wyłącza podstawowe, wbudowane właściwości.
	
		serious.ondragstart = function(e)
		{
		
			e.preventDefault();
			
		};
	
};
