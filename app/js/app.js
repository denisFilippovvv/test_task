document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".room-card");

  cards.forEach(card => {
    const bookButton = card.querySelector(".room-card__button--book");

    let pendingSelect = false;

    bookButton.addEventListener("click", event => {
      event.stopPropagation();
      pendingSelect = true;
    });

    card.addEventListener("mouseleave", () => {
      if (pendingSelect) {
        card.classList.add("room-card--inactive");
        pendingSelect = false;
      }
    });

    card.addEventListener("click", () => {
      if (card.classList.contains("room-card--inactive")) {
        card.classList.remove("room-card--inactive");
      }
    });
  });
});
