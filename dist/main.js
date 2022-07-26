$("#search-btn").on("click", function () {
  let teamName = $("#search-field").val();
  $.get(`/teams/${teamName}`, function (response) {
    $("#cards-container").empty();
    let source = $("#players-item-template").html();
    let template = Handlebars.compile(source);
    let playerHtmlItem = template({ players: response });
    $("#cards-container").append(playerHtmlItem);
  });
});
