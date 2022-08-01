const SEARCH_BTN = $("#search-btn");
const SEARCH_INPUT = $("#search-field");
const PLAYERS_CARDS_CONTAINER = $("#cards-container");
const PLAYER_ITEM_TEMPLATE = $("#players-item-template");

SEARCH_BTN.on("click", function () {
  let teamName = SEARCH_INPUT.val();
  $.get(`/teams/${teamName}`, function (response) {
    PLAYERS_CARDS_CONTAINER.empty();
    let source = PLAYER_ITEM_TEMPLATE.html();
    let template = Handlebars.compile(source);
    let playerHtmlItem = template({ players: response });
    PLAYERS_CARDS_CONTAINER.append(playerHtmlItem);
  });
});
