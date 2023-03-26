var modalSearchBtn = Document.getElementById('modalSearchBtn');
var modalSearchContainer = Document.getElementById('modalSearchContainer');
var closeModalSearch = Document.getElemntById('close');

modalSearchContainer.onclick = function(){
	modalSearchContainer.style.display = "block";
}

window.onclick = function(event){
	if(event.target == modalSearchContainer)
		modalSearchContainer.style.display = 'none';
}