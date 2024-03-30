/*

Script  : Contact Form
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/

$(function() {

    "use strict";


   /* ================================================
   jQuery Validate - Reset Defaults
   ================================================ */

    $.validator.setDefaults({
        ignore: [],
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        //errorElement: 'small',
        //errorClass: 'help-block red_left',
        errorElement: 'p',
        errorClass: 'error',
        errorPlacement: function (error, element) {
            var className = element.attr('class');
            if (className == 'iagree')
            {
                error.insertBefore(".btn-primary");
            }
            else {
                if (element.parent('.input-group').length || element.parent('label').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
            
        }
    });

    /* 
    VALIDATE
    -------- */

    $("#contact_form").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
            , bandcode: "required"
            //,agree: "required"
        },
        submitHandler: function(form) {

            $("#js-contact-btn").attr("disabled", true);
            $("#js-contact-btn").attr('style', 'opacity: 0.8');
            $("#js-contact-btn").attr('style', 'cursor: no-drop');

            /* 
            CHECK PAGE FOR REDIRECT (Thank you page)
            ---------------------------------------- */

            var redirect = $('#contact_form').data('redirect');
            var phpurl   = $('#contact_form').attr('action');

            var noredirect = false;
            if (redirect == 'none' || redirect == "" || redirect == null) {
                noredirect = true;
            }

            $("#js-contact-btn").attr("disabled", true);
             $('#js-contact-result').fadeIn('slow').html('<div class="error-msg">Please wait</div>');

            /* 
            FETCH SUCCESS / ERROR MSG FROM HTML DATA-ATTR
            --------------------------------------------- */

            var success_msg = $('#js-contact-result').data('success-msg');
            var error_msg = $('#js-contact-result').data('error-msg');

            var dataString = $(form).serialize();

            /* 
             AJAX POST
             --------- */

            $.ajax({
                type: "POST",
                data: dataString,
                url: phpurl,
                cache: false,
                success: function(d) {
                    $(".form-group").removeClass("has-success");
                    var fullres = d.split('~');
                    d = fullres[0];
                    var redirecturl = fullres[1];
                    if (d == 'success') {
                        if (noredirect) {
                            //$('.submitform').fadeOut('slow');
                            //$('.thanksmessage').fadeIn('slow');
                            $('#contact_form')[0].reset();
                            window.location.href = redirecturl;
                        } else {
                        
                            window.location.href = redirect;
                        }
                    } else if (d == 'InvalidUTMCode') {
                        $('.submitform').fadeOut('slow');
                        $('.invalidutmcodemessage').fadeIn('slow');
                       // alert('Incorrect Code. Please try again.');
                        //document.getElementById('captchaerror').style.display = 'block';

                        //$('#js-contact-result').fadeIn('slow').html('<div class="alert alert-danger error-msg">' + error_msg + '</div>').delay(3000).fadeOut('slow');

                    }
                    else if (d == 'EmailExceedLimit') {
                        // alert('EmailExceedLimit. Please try again.');
                        $('.submitform').fadeOut('slow');
                        $('.emailexceedlimitmessage').fadeIn('slow');
                        //document.getElementById('captchaerror').style.display = 'block';

                        //$('#js-contact-result').fadeIn('slow').html('<div class="alert alert-danger error-msg">' + error_msg + '</div>').delay(3000).fadeOut('slow');

                    }
                    else if (d == 'EmailError') {
                       // alert('Email error. Please contact admin.');
                        //document.getElementById('captchaerror').style.display = 'block';
                        $('.submitform').fadeOut('slow');
                        $('.emailerrormsg').fadeIn('slow');
                        //$('#js-contact-result').fadeIn('slow').html('<div class="alert alert-danger error-msg">' + error_msg + '</div>').delay(3000).fadeOut('slow');

                    }
                    else if (d == 'PhotoRetrivalError') {
                        // alert('Email error. Please contact admin.');
                        //document.getElementById('captchaerror').style.display = 'block';
                        $('.submitform').fadeOut('slow');
                        $('.commonerrormessage').fadeIn('slow');
                        //$('#js-contact-result').fadeIn('slow').html('<div class="alert alert-danger error-msg">' + error_msg + '</div>').delay(3000).fadeOut('slow');

                    }
                    else {
                        // alert('Incorrect captcha. Please try again.');
                        //document.getElementById('captchaerror').style.display = 'block';

                        $('#js-contact-result').fadeIn('slow').html('<div class="alert alert-danger error-msg">' + error_msg + '</div>').delay(3000).fadeOut('slow');

                    }

                   setTimeout(function(){
                       $("#js-contact-btn").attr("disabled", false);
                       $("#js-contact-btn").attr('style', 'opacity: 1');
                       $("#js-contact-btn").attr('style', 'cursor: pointer');
                }, 1000);
                },
                error: function(d) {
                    $('#js-contact-result').fadeIn('slow').html('<div class="alert alert-danger error-msg"> Cannot access Server </div>').delay(3000).fadeOut('slow');
                    setTimeout(function(){
                        $("#js-contact-btn").attr("disabled", false);
                        $("#js-contact-btn").attr('style', 'opacity: 1');
                        $("#js-contact-btn").attr('style', 'cursor: pointer');
                }, 1000);
               
                }
            });
            return false;

        }
    });

})
