$(function () {
  var
    $quickLinksToggle = $('#quick-links--toggle--btn'),
    $quickLinksList = $('#quick-links--list');

  $quickLinksToggle.click(function () {
    $quickLinksList.toggle("slide", {
      direction: "left"
    }, 700);
  });
});
