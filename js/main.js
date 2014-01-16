// JavaScript Document
//  Cassandra Morath
//	ASDI 1401
//  01/06/14
// JavaScript Document

$('#home').on('pageinit', function(){

});		
$('#addItem').on('pageinit', function(){
	//click events for display, save and clear
		var displayLink = $('#popupDisplay');
		displayLink.on('click', getData);
		var save = $('#save');
		save.on('click', validate);
		var clear = $('#clear');
		clear.on('click', clearLocal);
		
		$("#petForm").submit(function(event){
			
			if ($("#phone").val().length ===0){
				alert("Here!");
				return false;
			}
			else{alert($("#phone").val());}
		});
});	
	
	//any other code needed for addItem page goes here
	


//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

var validate = function(){

};

//form validate
	/*	var myForm = $('#formId');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	}); */
	