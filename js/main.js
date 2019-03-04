(function($) {

  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
      // HTMLFormElement
    formEl: document.getElementById("register-form"),
    userInterfaceOptions: {
      controlElementsInAnimationDelay: 250,
      robot: {
        robotResponseTime: 500,
        chainedResponseTime: 400
      },
      user:{
        showThinking: true,
        showThumb: true
      }
    },
    userImage: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    robotImage: "https://image.flaticon.com/icons/png/512/270/270137.png",
    flowStepCallback: function(dto, success, error) {
        if(dto.tag.id == "name"){
            if(dto.tag.value.trim() != ""){
                conversationalForm.addRobotChatResponse("If you need to make any change, Click on your messages.");
                return success();
            } else {
                return error();
            }
        }
        return success();
    },
    submitCallback: function(){
        // be aware that this prevents default form submit.
        var formDataSerialized = conversationalForm.getFormData(true);
        formDataSerialized['_token'] = $('input[type="hidden"]').val();
        // var url = "";
        // $.post(url, formDataSerialized,
        // function(data){
        //     if (data.status) {
        //         conversationalForm.addRobotChatResponse("We have received your submission, Thank You!!");
        //         conversationalForm.addRobotChatResponse("Get connected with us on our Facebook page to get updated with our other events.");

        //     } else {
        //         conversationalForm.addRobotChatResponse("Error, Please submit again");
        //     }
        // }, "json");
        conversationalForm.addRobotChatResponse("We have received your submission, Thank You!!");
    },
  });
})(jQuery);
