(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 65) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

});
  }(jQuery));

  // CONTACT FORM
  (function(){
  var myForm = document.getElementById('emailForm');
  var submitButton = document.getElementById('submitButton');

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var maxCharacters = document.getElementById('maxCharacters');

  messageInput.textContent = '';

  console.log(messageInput.attributes);

  nameInput.addEventListener('blur', function(event){
    var myName = nameInput.value;
    var validName = /^[0-9a-zA-Z\s]+$/.test(myName);
    if(!validName){
      nameInput.classList.add('danger');
      submitButton.disabled = true;
    } else {
      nameInput.classList.remove('danger');
      submitButton.disabled = false;
    }
  });

  emailInput.addEventListener('blur', function(event){
    var myEmail = emailInput.value;
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(myEmail);
    if(!validEmail){
      emailInput.classList.add('danger');
      submitButton.disabled = true;
    } else {
      emailInput.classList.remove('danger');
      submitButton.disabled = false;
    }
  });

  messageInput.addEventListener('keydown', function(event){
    maxCharacters.textContent = "Characters remaining: " + (messageInput.attributes.maxLength.value - messageInput.value.length);
  });



  myForm.addEventListener('submit', function(event) {
    document.getElementById('message').value.trim();
    myForm.setAttribute('action', 'https://formspree.io/ckepford@gmail.com');
  });
}());
