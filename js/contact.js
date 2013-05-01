$(document).ready(function() {

	$('.error').hide(); //Hide error messages 
	$('#MainResult').hide(); //we will hide this right now
	$('#form-wrapper').show(); //show main form
	$(".contact-btn").click(function() { //User clicks on Submit button
	 
	 // Fetch data from input fields.
	 var js_name = $("#name").val();
	 var js_email = $("#email").val();
	 var js_phone = $("#phone").val();
	 var js_message = $("#message").val();
	 
	 // Do a simple validation
	 if(js_name==""){
	 	 $("#nameLb .error").show(); // If Field is empty, we'll just show error text inside <span> tag.
		 return false;}
	 if(js_email==""){
	 	 $("#emailLb .error").show();
		 return false;}
	 if(js_phone==""){
	 	 $("#phoneLb .error").show();
		 return false;}
	 if(js_message==""){
	 	$("#messageLb .error").show();
		return false;}
	
		//let's put all data together
	  var myData = 'postName='+ js_name + '&postEmail=' + js_email + '&postPhone=' + js_phone + '&postMessage=' + js_message;
	  
            jQuery.ajax({
                type: "POST",
                url: "contact.php",
                dataType:"html",
                data:myData,
                success:function(response){
                    $("#MainResult").html('<fieldset class="response">'+response+'</fieldset>');
					$("#MainResult").slideDown("slow"); //show Result 
					$("#MainContent").hide(); //hide form div slowly
                },
                error:function (xhr, ajaxOptions, thrownError){
					$("#ErrResults").html(thrownError);
                }    
            });
		return false;
	});
	
});