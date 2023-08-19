import Card from "../layouts/card";
function CardLoader(params) {
  const cards = [];
  function renderCards() {
    for (let i = 0; i < params.count; i++) {
      cards.push(<Card />);
    }
  }
  renderCards();

  return (
    <div className="cards_container">
      {cards.map((card) => {
        return card;
      })}
    </div>
  );
}

export default CardLoader;
