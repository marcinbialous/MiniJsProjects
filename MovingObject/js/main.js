window.onload = function(){
	
	var serious = document.getElementById("seriousSam")
	
	serious.onmousedown = function(){
		
		serious.onmousemove = function(e){
			
			this.style.left = e.clientX - this.width / 2 + "px";
			this.style.top = e.clientY  - this.height / 2  + "px";
			};
		};
		
		serious.onmouseup = function(){
			
			this.onmousemove = null;
		};
			
		serious.ondragstart = function(e)
		{
		
			e.preventDefault();
			
		};
	
};