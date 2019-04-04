

 $(document).ready(function () {
     
     $('#ExistingUser').click(function (e)
      {
         location.href = '@Url.Content("~/User/UserLogin/")';
         return false;
     });



     $('#button-save').click(function () {
         var emailAddressValue = $("#textboxEmailAddress").val();
         if (emailAddressValue == '') {
             $("#textboxpassword ").after('<span class="error">Email address is empty</span>');
             return false;
         }

         if (emailAddressValue.length < 6)
         {
             $("#textboxpassword ").after('<span class="error">Email address is too short</span>');
             return false;
         }

         if (emailAddressValue.length > 30) {
             $("#textboxpassword ").after('<span class="error">Email address is too long</span>');
             return false;
         }

         var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
         return pattern.test(emailAddressValue);



         var passwordValue = $("#textboxpassword").val();
         if (passwordValue == '') {
             $("#textboxpassword ").after('<span class="error">Please specify password</span>');
             return false;
         }

         if (passwordValue.length < 6) {
             $("#textboxpassword").after('<span class="error">Password is too short.</span>');
             return false;
         }

         if (passwordValue.length > 20) {
             $("#textboxpassword").after('<span class="error">Password is too long</span>');
             return false;
         }

         if (passwordValue.search(/\d/) == -1) {
             $("#textboxpassword").after('<span class="error">Password should contain atleast one digit</span>');
             return false;
         } else if (passwordValue.search(/[a-zA-Z]/) == -1) {
             $("#textboxpassword").after('<span class="error">Password should contain atleast one uppercase</span>');
             return false;
         } else if (passwordValue.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
             $("#textboxpassword").after('<span class="error">Password contains invalid charecter</span>');
             return false;
         }


         var addressValue = $("#textboxaddress").val();
         if (addressValue  == '') {
             $("#textboxaddress").after('<span class="error">Please specify address</span>');
             return false;
         }

         if (addressValue.length < 6) {
             $("#textboxaddress").after('<span class="error">address is too short.</span>');
             return false;
         }

         if (addressValue.length > 20) {
             $("#textboxaddress").after('<span class="error">address is too long</span>');
             return false;
         }




     });

         $("#btnShowModal").click(function () {
             $("#loginModal").modal('show');
         });

         $("#btnHideModal").click(function () {
             $("#loginModal").modal('hide');
         });
   
     $('div.emailclass').focusout(function () {

         var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
         return pattern.test(emailAddress);
     });

     function checkPwd(str) {
         if (str.length < 6) {
             return ("too_short password");
         } else if (str.length > 50) {
             return ("too_long password");
         } else if (str.search(/\d/) == -1) {
             return ("no_number in password");
         } else if (str.search(/[a-zA-Z]/) == -1) {
             return ("no_letter in password");
         } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
             return ("bad_char in password");
         }
         return true;
     }


     $('div.emailclass').keyup(function () {
         if ($("#Validatetextbox").val() == "") {
             alert("There is no value in textbox");
         }
     });  

 



 }
 );