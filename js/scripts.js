$(document).ready(function() {
  $("form#values").submit(function(event) {
    event.preventDefault();
    var value = $("input:radio[name=value]:checked").val();

    if (value === "yes") {
      $(".community").show();
      $(".no-community").hide();
      $("#values").hide();
    }

    if (value === "no") {
      $(".no-community").show();
      $(".community").hide();
    }
  });
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var taxes = parseInt($("#taxes").val());
    var vehicle = parseInt($("#vehicle").val());
    var job = parseInt($("#job").val());
    var food = parseInt($("#food").val());
    var place = parseInt($("#place").val());
    var pet = parseInt($("#pet").val());
    var total = taxes + vehicle + job + food + place + pet;

    if (total < 10) {
      $(".conservative").show();
      $(".liberal").hide();
      $(".moderate").hide();
    };

    if ((total >= 10) && (total <= 14)) {
      $(".moderate").show();
      $(".conservative").hide();
      $(".liberal").hide();
    };

    if (total > 14) {
      $(".liberal").show();
      $(".moderate").hide();
      $(".conservative").hide();
    };
  });
});
