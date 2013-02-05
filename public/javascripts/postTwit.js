$(function () {
  $('#formT').on('submit', function () {
    $.post("/tweets", $(this).serialize());
    //$.post("/tweets", newTwit);
    return false;
  });
});