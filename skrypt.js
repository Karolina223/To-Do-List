$(function(){
    $('.close2').click(function(){
        $('li').remove();
    }); 
    
    $('.form').on('click', '.close', function(){
    $(this).parent('li').remove();
    return false;
});
})

var addli = document.querySelector(".add");


addli.addEventListener("click", function() {
    var li = document.createElement("li");
	var list = document.querySelector(".form");
	var input = document.querySelector(".field");
	
	
	li.innerHTML = input.value + '<span class="close">X</span>';
	input.value = "";
	list.appendChild(li);
	li.className += "add_new";
    
    
}, false);


