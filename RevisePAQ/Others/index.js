 function save_user(){
   var user_name = document.getElementById('user_name').value;
   var instagram = document.getElementById('instagram').value;
   var paq_email = document.getElementById('paq_email').value;
   var user_email = document.getElementById('user_email').value;
   var subject = document.getElementById('subject').value;
   var message = document.getElementById('message').value;
  
   var uid = firebase.database().ref().child('users').push().key;
   
   var data = {
	user_name: user_name,
        instagram: instagram,
        paq_email: paq_email,
        user_email: user_email,
        subject:subject,
        message: message
   }
   
   var updates = {};
   updates['/users/' + uid] = data;
   firebase.database().ref().update(updates);
   
   alert('Your Request is Being Processed');
   reload_page();
  }
  
  function reload_page(){
   window.location.reload();
  }