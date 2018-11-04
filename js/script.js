function initMap() {
        var uluru = {lat: 18.553476, lng: 73.946191};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
          // mapTypeId: 'satellite'
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}
function notempty1(){
    var fname = document.getElementById('fname').value;
    if(fname==''){
      document.getElementById('fname').style = "border:1px solid red";
    }
    else{
      document.getElementById('fname').style = "border:0px solid red";
    }
};
function focusaftererror1(){
  if(fname!=''){
  document.getElementById('fname').style = "border:0px solid red";
  }
};


function notempty2(){
    var phone = document.getElementById('phone').value;
    if(phone==''){
      document.getElementById('phone').style = "border:1px solid red";
    }
    else{
      document.getElementById('phone').style = "border:0px solid red";
    }
};
function focusaftererror2(){
  if(phone!=''){
  document.getElementById('phone').style = "border:0px solid red";
  }
};
function notempty3(){
    
    var email = document.getElementById('email').value;
    var numberTrueOrFalse = isNaN(email);
    if(numberTrueOrFalse==true || email==''){
      document.getElementById('email').style = "border:1px solid red";
    }
    else{
      document.getElementById('email').style = "border:0px solid red";

    }
};
function focusaftererror3(){
  if(email!=''){
  document.getElementById('email').style = "border:0px solid red";
  }
};



function notempty4(){
    var subject = document.getElementById('subject').value;
    if(subject==''){
      document.getElementById('subject').style = "border:1px solid red";
    }
    else{
      document.getElementById('subject').style = "border:0px solid red";
    }
};
function focusaftererror4(){
  if(subject!=''){
  document.getElementById('subject').style = "border:0px solid red";
  }
};

function notempty5(){
    var messageUs = document.getElementById('messageUs').value;
    if(messageUs==''){
      document.getElementById('messageUs').style = "border:1px solid red";
    }
    else{
      document.getElementById('messageUs').style = "border:0px solid red";
    }
};
function focusaftererror5(){
  if(messageUs!=''){
  document.getElementById('messageUs').style = "border:0px solid red";
  }
};
$(document).ready(function(){
        $('.photo_slider').slick({
            infinite: true,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
       });
        $('.photo_slider1').slick({
            infinite: true,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
       });
    });