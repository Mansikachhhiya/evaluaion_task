
$(document).ready(function () {
  $('#form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        name_: true
      },
      age: {
        required: true,
        min: 18,
        max: 25,
        age_val: true

      },
      email: {
        required: true,
        email: true,
        email_pattern: true
      },
      phoneno: {
        required: true,
        maxlength: 10,
        minlength: 10,
        phone_val: true
      },
      gender: {
        required: true
      },
      pickupTime1 :{

        fun1 : true
      },
      pickupTime2 :{
        fun2 : true
      },
      pickupTime3 :{
        fun3 : true
      },
      pickupTime4 :{
        fun4 : true
      },
      pickupTime5 :{
        fun5 : true
      },
      
      pickupTime6 :{
        fun6 : true
      },
      pickupTime7 :{
        fun7 : true
      },
      nextday:{
        required:true
        // nextday_val:true
      }
    },
    messages: {
      name: {
        required: "please enter Name",
        minlength: "Name should be at least 3 characters"
      },
      age: {
        required: "please enter age",
        minlength: "please enter age between 18 to 25",
        maxlength: "please enter age between 18 to 25"
      },
      email: {
        required: "please enter email id",
        minlength: "In-valid email id"
      },
      phoneno: {
        required: "please enter phone number",
        maxlength: "Phone number should be at least 10 characters"

      },
      gender: {
        required: "select gender"
      },
      pickupTime1:{
        required:"this filed requried"
      },
      pickupTime2:{
        required:"this filed requried"
      },
      pickupTime3:{
        required:"this filed requried"
      },
      pickupTime4:{
        required:"this filed requried"
      },
      pickupTime5:{
        required:"this filed requried"
      },
      pickupTime6:{
        required:"this filed requried"
      },
      pickupTime7:{
        required:"this filed requried"
      },
      
     
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.insertAfter("#other");
      }
      else { // This is the default behavior of the script for all fields
        error.insertAfter(element);
      }
    },
    

  })

  

  $.validator.addMethod('name_', function (value) {
    return /^[a-zA-Z ]*$/.test(value);
  }, 'Please enter a valid name');
  $.validator.addMethod('age_val', function (value) {
    return /^[0-9]*$/.test(value);
  }, "Please enter a valid age");
  $.validator.addMethod('email_pattern', function (value) {
    return /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@tntra([\.])io/.test(value);
  }, "Please enter a valid Email address");
  $.validator.addMethod('phone_val', function (value) {
    return /[1-9]{1}[0-9]{9}$/.test(value);
  }, 'Please enter a valid phone number');
  $.validator.addMethod('fun1',function(value){
    // event.preventDefault();
    return $('#sunday').val()=='on' && $('#pickupTime1').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun2',function(value){
  // event.preventDefault();
  return $('#monday').val() == 'on' && $('#pickupTime2').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun3',function(value){
  // event.preventDefault();
  return $('#tuesday').val() == 'on' && $('#pickupTime3').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun4',function(value){
  // event.preventDefault();
  return $('#wednesday').val() == 'on' && $('#pickupTime4').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun5',function(value){
  // event.preventDefault();
  return $('#thrusday').val() == 'on' && $('#pickupTime5').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun6',function(value){
  // event.preventDefault();
  return $('#friday').val() == 'on' && $('#pickupTime6').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun7',function(value){
  // event.preventDefault();
  return $('#saturday').val() == 'on' && $('#pickupTime7').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('nextday_val',function(value){
  // event.preventDefault();
  if ($('#nextday').checked == true ){
      return false;
  }

}, 'Please select time');
  
  $('.sun').attr('disabled', true);
  $('.selected').change(function () {
    $('.sun').attr('disabled', !this.checked);
  });
  $('.sun2').attr('disabled', true);
  $('.sun').change(function () {
    $('.sun2').attr('disabled', !this.checked);
  });

  $('.mon').attr('disabled', true);

  $('.selected').change(function () {
    $('.mon').attr('disabled', !this.checked);
  });
  $('.mon1').attr('disabled', true);

  $('.mon').change(function () {
    $('.mon1').attr('disabled', !this.checked);
  });
  $('.tue').attr('disabled', true);
  $('.selected').change(function () {
    $('.tue').attr('disabled', !this.checked);
  });
  $('.tue1').attr('disabled', true);
  $('.tue').change(function () {
    $('.tue1').attr('disabled', !this.checked);
  });

  $('.wed').attr('disabled', true);
  $('.selected').change(function () {
    $('.wed').attr('disabled', !this.checked);
  });
  $('.wed1').attr('disabled', true);
  $('.wed').change(function () {
    $('.wed1').attr('disabled', !this.checked);
  });

  $('.thur').attr('disabled', true);
  $('.selected').change(function () {
    $('.thur').attr('disabled', !this.checked);
  });
  $('.thur1').attr('disabled', true);
  $('.thur').change(function () {
    $('.thur1').attr('disabled', !this.checked);
  });
  $('.fri').attr('disabled', true);
  $('.selected').change(function () {
    $('.fri').attr('disabled', !this.checked);
  });
  $('.fri1').attr('disabled', true);
  $('.fri').change(function () {
    $('.fri1').attr('disabled', !this.checked);
  });

  $('.sat').attr('disabled', true);
  $('.selected').change(function () {
    $('.sat').attr('disabled', !this.checked);
  });
  $('.sat1').attr('disabled', true);
  $('.sat').change(function () {
    $('.sat1').attr('disabled', !this.checked);
  });
})

$("#form").submit(function (event) {
  event.preventDefault();
  let name = $('#name').val();
  let age = $('#age').val();
  let email = $("#email").val();
  let phoneno = $("#phoneno").val();
  let gender = $('input[type=radio][name=gender]:checked').val();

  let sun = $('.sun2').val();
  let mon = $('.mon1').val();
  let tue = $('.tue1').val();
  let wed = $('.wed1').val();
  let thur = $('.thur1').val();
  let fri = $('.fri1').val();
  let sat = $('.sat1').val();

  if ($('#name').valid() &&
    $('#age').valid() &&
    $("#email").valid() &&
    $("#phoneno").valid()&& (sun!=" " || mon!=" " || tue!=" " || wed!=" "||thur!=" " || fri!=" " ||sat!=" ")&&
    $("input[name='gender']:checked") != undefined) {
    
    // let checked = $("input[type=checkbox][name=checkbox]:checked").val(); 
    console.log({ name, age, email, phoneno, gender ,sun,mon,tue})

    const data = {
      'name_': name,
      'age': age,
      'email': email,
      'phoneno': phoneno,
      'gender': gender,
      'sunday': sun,
      'monday': mon,
      'tuesday': tue,
      'wendesday': wed,
      'thurday': thur,
      'friday': fri,
      'saturday': sat


    }
    const userData = localStorage.setItem("data", JSON.stringify(data));
    console.log('userData', userData);
    window.open("../html/Data.htm")

}

})


