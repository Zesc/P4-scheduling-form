window.onload = function () {
	var btnSubmit = document.getElementById("btn-submit");

	//helper functions
	var isEmpty = function (input) {
		var str = input;
		if (str === null) {
			return false;
		}
		var length = str.length;

		for (var i=0; i< length; i++) {
			if(str[i] != " ") {
		  		return false;
			}
		}
		return true;	
	};

	var isEmailAddress = function (input) {
		var list = input.split("");
		var i= 0;
		for(i; i<list.length; i++){
			if(list[i] === "@"){
	  			return true;
			}
		};
  		return false;
	};

	btnSubmit.addEventListener('click', function (event) {
		//validation code goes here
		var fDate = document.getElementById('f-date');
		var fTime = document.getElementById('f-time');
		var fTimeZone = document.getElementById('f-tzone');
		var fMessage = document.getElementById('f-message');
		var fPnumb = document.getElementById('f-pnumb');
		var fEmail = document.getElementById('f-email');

		if(isEmpty(fDate.value)) {
			fDate.className = 'm-invalid';
			fDate.setCustomValidity('Please enter a date.');
		}else {
			fDate.className = 'm-valid';
			fDate.setCustomValidity('');
		}

		if(isEmpty(fTime.value)) {
			fTime.className = 'm-invalid';
			fTime.setCustomValidity('Please enter a time.');
		}else {
			fTime.className = 'm-valid';
			fTime.setCustomValidity('');
		}

		if(fTimeZone.value === 'Select your time zone') {
			fTimeZone.className = 's-invalid';
			fTimeZone.setCustomValidity('Please choose a time zone.');
		}else {
			fTimeZone.className = 's-valid';
			fTimeZone.setCustomValidity('');
		}

		if(isEmpty(fMessage.value)) {
			fMessage.className = 'm-invalid';
			fMessage.setCustomValidity('Please write your message');
		}else {
			fMessage.classname = 'm-valid';
			fMessage.setCustomValidity('');
		}

		if(isEmpty(fPnumb.value)) {
			fPnumb.className = 'm-invalid';
			fPnumb.setCustomValidity('Please enter your phone  number.');
		}else {
			fPnumb.classname = 'm-valid';
			fPnumb.setCustomValidity('');
		}

		if(isEmailAddress(fEmail.value)) {
			fEmail.className = 'm-valid';
			fEmail.setCustomValidity('');
		}else {
			fEmail.className = 'm-invalid';
			fEmail.setCustomValidity('Please enter your email address');
		}
	});
};