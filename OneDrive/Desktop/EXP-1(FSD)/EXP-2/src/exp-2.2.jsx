import React from "react";

function Exp21() {
  const cards = [
    {
      title: "Card One",
      text: "Cars",
      btn: "Read More",
      color: "primary",
    },
    {
      title: "Card Two",
      text: "Bike",
      btn: "Explore",
      color: "success",
    },
    {
      title: "Card Three",
      text: "Planes",
      btn: "Details",
      color: "danger",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 fw-bold">
        Experiment-2.2: Card-Based Layout Using Bootstrap
      </h2>

      <div className="row justify-content-center g-4">
        {cards.map((card, index) => (
          <div className="col-md-4 col-lg-3" key={index}>
            <div className="card good-card text-center">
              <div className="card-body d-flex flex-column justify-content-center">
                <h4 className="card-title fw-semibold mb-3">
                  {card.title}
                </h4>
                <p className="card-text fs-5 mb-4">
                  {card.text}
                </p>
                <button className={`btn btn-${card.color} btn-hover`}>
                  {card.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exp21;
