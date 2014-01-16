// JavaScript Document
//  Cassandra Morath
//	ASDI 1401
//  01/06/14
// JavaScript Document
$('#home').on('pageinit', function () {
    (function ($) {
        $.fn.FormCache = function (options) {
            var settings = $.extend({}, options);

            function on_change(event) {
                var input = $(event.target);
                var key = input.parents('form:first').attr('name');
                var data = JSON.parse(localStorage[key]);

                if (input.attr('type') == 'radio' || input.attr('type') == 'checkbox') {
                    data[input.attr('name')] = input.is(':checked');
                } else {
                    data[input.attr('name')] = input.val();
                }

                localStorage[key] = JSON.stringify(data);
            }

            return this.each(function () {
                var element = $(this);

                if (typeof (Storage) !== "undefined") {
                    var key = element.attr('name');

                    var data = false;
                    if (localStorage[key]) {
                        data = JSON.parse(localStorage[key]);
                    }

                    if (!data) {
                        localStorage[key] = JSON.stringify({});
                        data = JSON.parse(localStorage[key]);
                    }
                    element.find('input, select').change(on_change);

                    element.find('input, select').each(function () {
                        if ($(this).attr('type') != 'submit') {
                            var input = $(this);
                            var value = data[input.attr('name')];
                            if (input.attr('type') == 'radio' || input.attr('type') == 'checkbox') {
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

    //Try this
    (function ($) {
        $.fn.FormCache = function (options) {
            var settings = $.extend({}, options);

            function on_change(event) {
                var input = $(event.target);
                var key = input.parents('form:first').attr('name');
                var data = JSON.parse(localStorage[key]);

                if (input.attr('type') == 'radio' || input.attr('type') == 'checkbox') {
                    data[input.attr('name')] = input.is(':checked');
                } else {
                    data[input.attr('name')] = input.val();
                }

                localStorage[key] = JSON.stringify(data);
            }

            return this.each(function () {
                var element = $(this);

                if (typeof (Storage) !== "undefined") {
                    var key = element.attr('name');

                    var data = false;
                    if (localStorage[key]) {
                        data = JSON.parse(localStorage[key]);
                    }

                    if (!data) {
                        localStorage[key] = JSON.stringify({});
                        data = JSON.parse(localStorage[key]);
                    }
                    element.find('input, select').change(on_change);

                    element.find('input, select').each(function () {
                        if ($(this).attr('type') != 'submit') {
                            var input = $(this);
                            var value = data[input.attr('name')];
                            if (input.attr('type') == 'radio' || input.attr('type') == 'checkbox') {
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
    $('form').FormCache();

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