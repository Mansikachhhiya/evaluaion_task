$(document).ready(function () {
  $('#form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        name_: true,
        maxlength:25
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

      // day:{

      // }
      // pickupTime4: {
      //   required: true
      // },
      // pickupTime5: {
      //   required: true
      // },

      // pickupTime6: {
      //   required: true
      // },
      // pickupTime7: {
      //   required: true
      // },
      // sunday:{

      //   required:true
      // },
      // monday:{
      //   required:true
      // },
      checkbox_1: {
        required: true,
        // nextday_val:true,
        // nextday_val2:true
        
      },
      pickupTime1: {
        
        fun1: true
      },
      pickupTime2: {
        fun2: true
      },
      pickupTime3: {
        fun3: true
      },
      pickupTime4: {
        fun4: true
      },
      pickupTime5: {
        fun5: true
      },

      pickupTime6: {
        fun6: true
      },
      pickupTime7: {
        fun7: true
      }
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.insertAfter("#other");
      }
      else if (element.is("#checkbox_1")) {
        error.insertAfter("#nextday");
      }
      else if (element.is(":checkbox")) {
        error.insertAfter(".presentdivnextday")
      }

      else { // This is the default behavior of the script for all fields
        error.insertAfter(element);
      }
    },


  })
  $.validator.addMethod('name_', function (value) {
    return /^[a-zA-Z]+(\s{0,1}[a-zA-Z]\s{0,1})*$/.test(value);
  }, 'Please enter a valid name');
  $.validator.addMethod('age_val', function (value) {
    return /^[0-9]*$/.test(value);
  }, "Please enter a valid age");
  $.validator.addMethod('email_pattern', function (value) {
    return /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@tntra([\.])io/.test(value);
  }, "Please enter a valid Email address");
  $.validator.addMethod('phone_val', function (value) {
    return /[7-9]{1}[0-9]{9}$/.test(value);
  }, 'Please enter a valid phone number');
  $.validator.addMethod('fun1', function (value) {
    // event.preventDefault();
    return $('#sunday').val() == 'on' && $('#pickupTime1').val() != ' ';
  }, 'Please enter Pick up time');
  $.validator.addMethod('fun2', function (value) {
    // event.preventDefault();
    return $('#monday').val() == 'on' && $('#pickupTime2').val() != ' ';
  }, 'Please enter Pick up time');
  $.validator.addMethod('fun3', function (value) {
    // event.preventDefault();
    return $('#tuesday').val() == 'on' && $('#pickupTime3').val() != ' ';
  }, 'Please enter Pick up time');
  $.validator.addMethod('fun4', function (value) {
    // event.preventDefault();
    return $('#Wendesday').val() == 'on' && $('#pickupTime4').val() != ' ';
  }, 'Please enter Pick up time');
  $.validator.addMethod('fun5', function (value) {
    // event.preventDefault();
    return $('#thursday').val() == 'on' && $('#pickupTime5').val() != ' ';
  }, 'Please enter Pick up time');
  $.validator.addMethod('fun6', function (value) {
    // event.preventDefault();
    return $('#friday').val() == 'on' && $('#pickupTime6').val() != ' ';
  }, 'Please enter Pick up time');
  $.validator.addMethod('fun7', function (value) {
    // event.preventDefault();
    return $('#saturday').val() == 'on' && $('#pickupTime7').val() != ' ';
  }, 'Please enter Pick up time');

  // $.validator.addMethod('nextday_val', function (value) {
  //   // event.preventDefault();
  //   if ($('#nextday').checked == true && $('.day input[type=checkbox').checked!=true) {
      
  //   }
  // },'plase select the day');
  // $.validator.addMethod('nextday_val2', function (value) {
  //   // event.preventDefault();
  //   if ($('#nextday').checked !=true && $('.day input[type=checkbox').checked==true) {
      
  //   }
  // });

  // $.validator.addMethod("validation_on_day",function(){
  //    if($('#sun2').val()==" "|| $('.mon1').val()==" "||$('.tue1').val()==" "||$('.wed1').val()==" "||$('.thur1').val()==" "||$('.fri1').val()==" " ||$('.sat1').val()==" "){
  //      document.getElementById("p1").innerHTML="please select the "
  //    }
  //   },"please select one of the day show in below" );
  // for next day checkbox disable/enable
  $(document).on('click', '#nextday input[type=checkbox]', function (event) {
    if ($(this).is(':checked')) {
      $('.day input[type=checkbox]').attr('disabled', false)

    }
    else {
      $('.day input[type=checkbox]').attr('disabled', true).prop('checked', false).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').find('select').val(" ");
    }
  });
  // for all days checkbox disable /enable
  $(document).on('click', '.day input[type=checkbox]', function (event) {
    if ($(this).is(':checked')) {
      console.log($(this).parent().parent().siblings().children());
      $(this).parent().parent().siblings('.time').children().attr('disabled', false).closest('div.time').find('select').val(" ");

    }
    else {
      // $(this).siblings('.time').closest('select').attr('disabled',true);
      $(this).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').find('select').val(" ");
    }
  });
  //for error hide if next day check box is disable
  $(document).on('click', '#nextday input[type=checkbox]', function (event) {
    if (!$(this).is(':checked')) {
      $('.day input[type=checkbox]').attr('disabled', true).prop('checked', false).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').children(".error").closest("label").hide();

    }
  });
  //for error hide if days are disable
  $(document).on('click', '.day input[type=checkbox]', function (event) {
    if (!$(this).is(':checked')) {
      console.log($(this).parent().parent().siblings().children());
      $(this).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').children(".error").closest("label").hide();

    }
  
  });
  $(document).on('click', '.day input[type=checkbox]', function (event) {
    if (!$(this).is(':checked')) {
      console.log($(this).parent().parent().siblings().children());
      $(this).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').children(".error").closest("");

    }
  
  });
  

})
$("#form").submit(function (event) {
  event.preventDefault();
  localStorage.clear();
  
if($('.day input[type=checkbox]').is(':checked')){
  var flag = true;
}
else {
  flag=false;
}
for (let i = 1; i < 8; i++) {
  if ($('#pickupTime' + i).parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime' + i).val() ===' ') {
 flag = false;
}
}
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
    $("#phoneno").valid() && $("#checkbox_1").valid()
    && $("input[name='gender']:checked") != undefined && flag) 
    {
    // if the days checkbox is checked and the value of pickupTime is null then  flag will be set at false
       
    console.log($('#pickupTime1').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime1').val() == " ");
    console.log($('#pickupTime2').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime2').val() == " ");
    console.log($('#pickupTime3').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime3').val() == " ");
    console.log($('#pickupTime4').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime4').val() == " ");
    console.log($('#pickupTime5').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime5').val() == " ");
    console.log($('#pickupTime6').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime6').val() == " ");
    console.log($('#pickupTime7').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime7').val() == " ");

   
      console.log({ name, age, email, phoneno, gender })

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

