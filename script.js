$(".start").click(function() {
  $(".Part-Two-Yes").show();
  $(".begin").hide();
});
$(".wait").click(function() {
  $(".speed-no").show();
  $(".Part-Two-Yes").hide();
});

$(".no-button").click(function() {
      $(".Part-Two-No").show();
      $(".begin").hide();
});

$(".speed1").click(function() {
  $(".speed-yes").show();
  $(".Part-Two-Yes").hide();
});

$(".risk").click(function() {
  $(".risk-yes").show();
  $(".speed-yes").hide();
});

$(".safe").click(function() {
  $(".risk-no").show();
  $(".speed-yes").hide();
});

$(".reset").dblclick(function() {
  $(".begin").show();
  $(".Part-Two-Yes, .Part-Two-No, .speed-yes, .speed-no, .risk-no, .risk-yes").hide();
});