/*!
 * cKeyboard JavaScript Library v1.0.1
 * https://github.com/c42759/ckeyboard/
 *
 *
 * Copyright c42759 (Carlos Santos) and other contributors
 * Released under the MIT license
 *
 * Date: 2019-07-03
 */
var hideIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/></svg>';
var cKeyboard_config = {
	input_target : '#input-name',
	interation_mode : 'click', // touchstart
	target : '#keyboard',
	last_target : '#keyboard',
	capslock_state : false,
	layout : [
		{
			'q' : {name : 'q', text : 'q', class : 'cKKey'},
			'w' : {name : 'w', text : 'w', class : 'cKKey'},
			'e' : {name : 'e', text : 'e', class : 'cKKey'},
			'r' : {name : 'r', text : 'r', class : 'cKKey'},
			't' : {name : 't', text : 't', class : 'cKKey'},
			'y' : {name : 'y', text : 'y', class : 'cKKey'},
			'u' : {name : 'u', text : 'u', class : 'cKKey'},
			'i' : {name : 'i', text : 'i', class : 'cKKey'},
			'o' : {name : 'o', text : 'o', class : 'cKKey'},
			'p' : {name : 'p', text : 'p', class : 'cKKey'}
		},
		{
			'a' : {name : 'a', text : 'a', class : 'cKKey'},
			's' : {name : 's', text : 's', class : 'cKKey'},
			'd' : {name : 'd', text : 'd', class : 'cKKey'},
			'f' : {name : 'f', text : 'f', class : 'cKKey'},
			'g' : {name : 'g', text : 'g', class : 'cKKey'},
			'h' : {name : 'h', text : 'h', class : 'cKKey'},
			'j' : {name : 'j', text : 'j', class : 'cKKey'},
			'k' : {name : 'k', text : 'k', class : 'cKKey'},
			'l' : {name : 'l', text : 'l', class : 'cKKey'}
		},
		{
			'shift' : {name : 'shift', text : '', class : 'cKFunction'},
			'z' : {name : 'z', text : 'z', class : 'cKKey'},
			'x' : {name : 'x', text : 'x', class : 'cKKey'},
			'c' : {name : 'c', text : 'c', class : 'cKKey'},
			'v' : {name : 'v', text : 'v', class : 'cKKey'},
			'b' : {name : 'b', text : 'b', class : 'cKKey'},
			'n' : {name : 'n', text : 'n', class : 'cKKey'},
			'm' : {name : 'm', text : 'm', class : 'cKKey'},
			'backspace' : {name : 'backspace', text : '', class : 'cKFunction'}
		},
		{
			'numeric_switch' : {name : 'numeric-switch', text : '123', class : 'cKFunction'},
			'ar_switch' : {name : 'ar-switch', text : 'ا ب', class : 'cKFunction'},
			'@' : {name : '@', text : '@', class : 'cKKey'},
			'.' : {name : '.', text : '.', class : 'cKKey'},
			'space' : {name : 'space', text : ' ', class : 'cKKey'},
			'return' : {name : 'return', class : 'cKFunction' , text: hideIcon}
		}
	],

	target_numeric : '#keyboard_numeric',
	layout_numeric : [
		{
			'1' : {name : '1', text : '1', class : 'cKKey'},
			'2' : {name : '2', text : '2', class : 'cKKey'},
			'3' : {name : '3', text : '3', class : 'cKKey'},

			' 0 ' : {name : '0', text : '0', class : 'cKKey'},
			'.' : {name : '.', text : '.', class : 'cKKey'},
			',' : {name : ',', text : ',', class : 'cKKey'},
			'-' : {name : '-', text : '-', class : 'cKKey'},
			'@' : {name : '@', text : '@', class : 'cKKey'}
		},
		{
			'4' : {name : '4', text : '4', class : 'cKKey'},
			'5' : {name : '5', text : '5', class : 'cKKey'},
			'6' : {name : '6', text : '6', class : 'cKKey'},

			'/' : {name : '/', text : '/', class : 'cKKey'},
			':' : {name : ':', text : ':', class : 'cKKey'},
			'_' : {name : '_', text : '_', class : 'cKKey'},
			'*' : {name : '*', text : '*', class : 'cKKey'},
			'#' : {name : '#', text : '#', class : 'cKKey'}
		},
		{
			'7' : {name : '7', text : '7', class : 'cKKey'},
			'8' : {name : '8', text : '8', class : 'cKKey'},
			'9' : {name : '9', text : '9', class : 'cKKey'},

			'(' : {name : '(', text : '(', class : 'cKKey'},
			')' : {name : ')', text : ')', class : 'cKKey'},
			'$' : {name : '$', text : '$', class : 'cKKey'},
			'?' : {name : '?', text : '?', class : 'cKKey'},
			'!' : {name : '!', text : '!', class : 'cKKey'}
		},
		{
			'abc_switch' : {name : 'abc-switch', text : 'abc', class : 'cKFunction'},
			'space' : {name : 'space', text : ' ', class : 'cKKey'},
			'backspace' : {name : 'backspace', text : '', class : 'cKFunction'},
			'return' : {name : 'return', text : hideIcon, class : 'cKFunction'}
		}
	]
	
	
	
	
	,

	target_ar : '#keyboard_ar',
	layout_ar : [
		{
			'ض' : {name : 'ض', text : 'ض', class : 'cKKey'},
			'ص' : {name : 'ص', text : 'ص', class : 'cKKey'},
			'ث' : {name : 'ث', text : 'ث', class : 'cKKey'},
			'ق' : {name : 'ق', text : 'ق', class : 'cKKey'},
			'ف' : {name : 'ف', text : 'ف', class : 'cKKey'},
			'غ' : {name : 'غ', text : 'غ', class : 'cKKey'},
			'ع' : {name : 'ع', text : 'ع', class : 'cKKey'},
			'ه' : {name : 'ه', text : 'ه', class : 'cKKey'},
			'خ' : {name : 'خ', text : 'خ', class : 'cKKey'},
			'ح' : {name : 'ح', text : 'ح', class : 'cKKey'},
			'ج' : {name : 'ج', text : 'ج', class : 'cKKey'}
		},
		{
			'shift' : {name : 'shift', text : '', class : 'cKFunction'},
			'ش' : {name : 'ش', text : 'ش', class : 'cKKey'},
			'س' : {name : 'س', text : 'س', class : 'cKKey'},
			'ي' : {name : 'ي', text : 'ي', class : 'cKKey'},
			'ب' : {name : 'ب', text : 'ب', class : 'cKKey'},
			'ل' : {name : 'ل', text : 'ل', class : 'cKKey'},
			'ا' : {name : 'ا', text : 'ا', class : 'cKKey'},
			'ت' : {name : 'ت', text : 'ت', class : 'cKKey'},
			'ن' : {name : 'ن', text : 'ن', class : 'cKKey'},
			'م' : {name : 'م', text : 'م', class : 'cKKey'}
		},
		{
			
			'ئ' : {name : 'ئ', text : 'ئ', class : 'cKKey'},
			'ء' : {name : 'ء', text : 'ء', class : 'cKKey'},
			'ؤ' : {name : 'ؤ', text : 'ؤ', class : 'cKKey'},
			'ر' : {name : 'ر', text : 'ر', class : 'cKKey'},
			'لا' : {name : 'لا', text : 'لا', class : 'cKKey'},
			'ى' : {name : 'ى', text : 'ى', class : 'cKKey'},
			'ة' : {name : 'ة', text : 'ة', class : 'cKKey'},
			'و' : {name : 'و', text : 'و', class : 'cKKey'},
			'backspace' : {name : 'backspace', text : '', class : 'cKFunction'}
		},
		{
			'numeric_switch' : {name : 'numeric-switch', text : '123', class : 'cKFunction'},
			'@' : {name : '@', text : '@', class : 'cKKey'},
			'space' : {name : 'space', text : ' ', class : 'cKKey'},
			'return' : {name : 'return', text : hideIcon, class : 'cKFunction'}
		}
	]
	
	
	
	
	
	
	
	
	
	
};

var a = '<a class="toggle-keyboard" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-keyboard" viewBox="0 0 16 16">'+
				'<path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"/>'+
				'<path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z"/>'+
				'</svg></a>';
function cKeyboard () {
	
	$("body").append('<div class="col">'+
					'<div id="keyboard" class="keyboard row"></div>'+
					'<div id="keyboard_numeric" class="keyboard row"></div>'+
					'<div id="keyboard_ar" class="keyboard row"></div>'+
			'</div>');
	


$('body').on(cKeyboard_config.interation_mode, '.toggle-keyboard', function () {
		$(cKeyboard_config.last_target).toggle();
		
	});
	
		$('textarea,input').on('focus', function() {
			$(this).parent().append(  $(a).clone()   ) ;
			cKeyboard_config.input_target = this;  
  });
  
	  $('textarea,input').on('blur', function() {
		cKeyboard_config.input_target = this;
		//lastFocus = this;
		//selStart = this.selectionStart;
		//selEnd = this.selectionEnd;
	});
	
	
	// KEYBOARD CREATOR
	$.each(cKeyboard_config.layout, function (i, e) {
		$(cKeyboard_config.target).append('<ul class="cK cKLine"></ul>');  // CREATE LINE
		var line_target = $(cKeyboard_config.target + ' ul')[i];

		$.each( e, function (ia, ea) {
			$(line_target).append('<li class="cK ' + ea.class + ' cKey-' + ea.name + '">' + ea.text + '</li>');
		});
	});
	
	// ar 
	
	$.each(cKeyboard_config.layout_ar, function (i, e) {
		$(cKeyboard_config.target_ar).append('<ul class="cK cKLine"></ul>');  // CREATE LINE
		console.log(e)
		var line_target = $(cKeyboard_config.target_ar + ' ul')[i];

		$.each( e, function (ia, ea) {
			$(line_target).append('<li class="cK ' + ea.class + ' cKey-' + ea.name + '">' + ea.text + '</li>');
		});
	});
	

	// KEYBOARD NUMERIC CREATOR
	$(cKeyboard_config.target_numeric).hide();
	$.each(cKeyboard_config.layout_numeric, function (i, e) {
		$(cKeyboard_config.target_numeric).append('<ul class="cK cKLine"></ul>');  // CREATE LINE

		var line_target = $(cKeyboard_config.target_numeric + ' ul')[i];

		$.each( e, function (ia, ea) {
			$(line_target).append('<li class="cK ' + ea.class + ' cKey-' + ea.name + '">' + ea.text + '</li>');
		});
	});
	
	
	

	// KEY CLICK
	$('body').on(cKeyboard_config.interation_mode, '.cK.cKKey', function () {
		//console.log($(this).html());
		
		//$focused = $(':focus');
		if (cKeyboard_config.capslock_state) {
			$(cKeyboard_config.input_target).val(
				$(cKeyboard_config.input_target).val() + $(this).html().toUpperCase()
			);
		} else {
			$(cKeyboard_config.input_target).val(
				$(cKeyboard_config.input_target).val() + $(this).html()
			);
		}
	});

	// UPPERCASE SHIFT CLICK
	$('body').on(cKeyboard_config.interation_mode, '.cK.cKFunction.cKey-shift', function () {
		cKeyboard_config.capslock_state = !cKeyboard_config.capslock_state;
		if (cKeyboard_config.capslock_state) {
			$('.cK.cKKey').addClass('uppercase');
		} else {
			$('.cK.cKKey').removeClass('uppercase');
		}
	});

	// UPPERCASE BACKSPACE CLICK
	$('body').on(cKeyboard_config.interation_mode, '.cK.cKFunction.cKey-backspace', function () {
		$(cKeyboard_config.input_target).val($(cKeyboard_config.input_target).val().slice(0, -1));
	});

	// UPPERCASE SHIFT CLICK
	$('body').on(cKeyboard_config.interation_mode, '.cK.cKFunction.cKey-numeric-switch', function () {
		$.when($(".keyboard").fadeOut()).done(function () {
			cKeyboard_config.last_target = cKeyboard_config.target_numeric;
			$(cKeyboard_config.target_numeric).fadeIn();
		});
	});
	
	
	// UPPERCASE SHIFT CLICK
	$('body').on(cKeyboard_config.interation_mode, '.cK.cKFunction.cKey-ar-switch', function () {
		$.when($(".keyboard").fadeOut()).done(function () {
			cKeyboard_config.last_target = cKeyboard_config.target_ar;
			$(cKeyboard_config.target_ar).fadeIn();
		});
	});
	

	// UPPERCASE SHIFT CLICK 
	$('body').on(cKeyboard_config.interation_mode, '.cK.cKFunction.cKey-abc-switch', function () {
		$.when($(".keyboard").fadeOut()).done(function () {
			cKeyboard_config.last_target = cKeyboard_config.target;
			$(cKeyboard_config.target).fadeIn();
		});
	});
	
	// UPPERCASE SHIFT CLICK 
	$('body').on(cKeyboard_config.interation_mode, '.cK.cKFunction.cKey-return', function () {
		$.when($(".keyboard").fadeOut()).done(function () {
		});
	});
	
}


