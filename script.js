$(document).ready(function(){
  $("#radio1").click(function(){
    $("#sub1").hide();
    $("#sub2").hide();

  });
});

$(document).ready(function(){
    $("#radio2").click(function(){
      $("#sub1").show();
      $("#sub2").hide();
    });
  });

  $(document).ready(function(){
    $("#radio3").click(function(){
      $("#sub1").show();
      $("#sub2").show();
    });
  });