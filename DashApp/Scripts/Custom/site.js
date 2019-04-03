

 $(document).ready(function () {
     
     $('#ExistingUser').click(function (e)
      {
         location.href = '@Url.Content("~/User/UserLogin/")';
         return false;
      });

     $('#emailid').focusout(function () {

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


     $('#emailclass').keyup(function () {
         if ($("#Validatetextbox").val() == "") {
             alert("There is no value in textbox");
         }
     });  

     function checkemail(str) {
         if (str.length < 6) {
             return ("too_short");
         }
         return true;
     }

     function checkaddress(str) {
         if (str.length < 10) {
             return ("too_short");
         }
         return true;
     }



 }
 );