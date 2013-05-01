$(document).ready(function() {

	$('.serror').hide(); //Hide error messages 
	$('#sResult').hide(); //we will hide this right now
	$('#sub-wrapper').show(); //show main form
	$(".sub-btn").click(function() { //User clicks on Submit button
	 
	 // Fetch data from input fields.;
	 var js_email = $("#smail").val();
	 
	 // Do a simple validation
	 if(js_email==""){
	 	 $("#smailLb .error").show();
		 return false;}
	
		//let's put all data together
	  var myData =  '&postEmail=' + js_email ;
	  
            jQuery.ajax({
                type: "POST",
                url: "subscribe.php",
                dataType:"html",
                data:myData,
                success:function(response){
                    $("#sResult").html('<fieldset class="response">'+response+'</fieldset>');
					$("#sResult").slideDown("slow"); //show Result 
					$("#sContent").hide(); //hide form div slowly
                },
                error:function (xhr, ajaxOptions, thrownError){
					$("#sErrResults").html(thrownError);
                }    
            });
		return false;
	});
	
});