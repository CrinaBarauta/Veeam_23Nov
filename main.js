$(document).ready(function(){
    $("#select1").on("click",function(){
      if ($("#usa").is(":selected")) {
        $("#select2").show();
      }
      if ($("#russia").is(":selected")) {
        $("#select2").hide();
      }
      if ($("#romania").is(":selected")) {
        $("#select2").hide();
      }
      if ($("#brazil").is(":selected")) {
        $("#select2").hide();
      }
      if ($("#uk").is(":selected")) {
        $("#select2").hide();
      }
    });
});

$(document).ready(function(){
    $("#select11").on("click",function(){
      if ($("#usa1").is(":selected")) {
        $("#select21").show();
      }
      if ($("#russia1").is(":selected")) {
        $("#select21").hide();
      }
      if ($("#romania1").is(":selected")) {
        $("#select21").hide();
      }
      if ($("#brazil1").is(":selected")) {
        $("#select21").hide();
      }
      if ($("#uk1").is(":selected")) {
        $("#select21").hide();
      }
    });
});
