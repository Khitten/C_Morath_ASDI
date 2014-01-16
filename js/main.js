// JavaScript Document
//  Cassandra Morath
//	ASDI 1401
//  01/06/14
// JavaScript Document
// http://www.developerdrive.com/2013/08/jquery-plugin-for-caching-forms-using-html5-local-storage/

	//Waits for the page to initialize after JQM enhances the page.
	/*global $,jQuery,localStorage,alert,var5*/
$('#home').on('pageinit', function () {
	//Saves orm to local storage using JQuery and JSON
	//Starts the JQuery plug in wrapper, used to maintain chainability
    (function ($) {
        $.fn.FormCache = function (options) {
            var settings = $.extend({}, options);
			//Changes the data object back into a string
            function on_change(event) {
                var input = $(event.target);
                var key = input.parents('form:first').attr('name');
                var data = JSON.parse(localStorage[key]);
				
                if (input.attr('type') === 'radio' || input.attr('type') === 'checkbox') {
                    data[input.attr('name')] = input.is(':checked');
                } else {
                    data[input.attr('name')] = input.val();
                }

                localStorage[key] = JSON.stringify(data);
            }

            return this.each(function () {
                var element = $(this);
				//makes sure the broswer allows use of local storage
                if (typeof (Storage) !== "undefined") {
					
					//uses the name attribute to create a key, can also use ID instead
                    var key = element.attr('name');
                    var data = false;
                    if (localStorage[key]) {
						//parse the value
                        data = JSON.parse(localStorage[key]);
                    }

                    if (!data) {
						//stringify
                        localStorage[key] = JSON.stringify({});
                        data = JSON.parse(localStorage[key]);
                    }
					//Finds out when values are changed
                    element.find('input, select').change(on_change);

                    element.find('input, select').each(function () {
                        if ($(this).attr('type') !== 'submit') {
                            var input = $(this);
                            var value = data[input.attr('name')];
                            if (input.attr('type') === 'radio' || input.attr('type') === 'checkbox') {
                                if (value) {
                                    input.attr('checked', input.is(':checked'));
                                } else {
                                    input.removeAttr('checked');
                                }
                            } else {
                                input.val(value);
                            }
                        }
                    });


                } else {
                    alert('local storage is not available');
                }
            });
        };
    }(jQuery))
	//Call Function
    $('form').FormCache();
	

});
$('#addItem').on('pageinit', function () {
    //click events for display, save and clear
    var displayLink = $('#popupDisplay');
    displayLink.on('click', getData);
    var save = $('#save');
    save.on('click', validate);
    var clear = $('#clear');
    clear.on('click', clearLocal);

    $("#petForm").submit(function (event) {
        var returnValue = true;
        if ($("#phone").val().length === 0) {
            returnValue = false;
        }
        if (returnValue === true) {
            //serialize and save data
            var id = Math.floor(Math.random() * 100000000001);
            localStorage.setItem(id, $(this).serializeArray());
            alert("Pet saved!");
        }
        return returnValue;
    });
});

//any other code needed for addItem page goes here



//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function () {

};

var getData = function () {

};

var storeData = function (data) {

};

var deleteItem = function () {

};

var clearLocal = function () {
    localStorage.clear();

};

var validate = function () {

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