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
		
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}
		
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
	
	//any other code needed for addItem page goes here
	
});

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
	