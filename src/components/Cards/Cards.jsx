import React from "react";
import "./cards.css";
import StarRatings from "react-star-ratings";

const Cards = ({ recibeData, fethIndata }) => {
    console.log(recibeData);
    return (
        <section className="CardSection">
            {recibeData.map((object, key) => {
                return (
                    <div key={key} className="cards">
                        <div className="imageCredits">
                            <img
                                className="imageSize"
                                src={`https://mytablemesa.com${object.imageUrl}`}
                                alt="cards of the course"
                            />
                            <p className="credits">
                                {object.maximumCredits} CREDITS
                            </p>
                        </div>
                        <div className="Card__Details">
                            <div className="text__Details">
                                <p className="title">
                                    <strong>{object.imageText}</strong>
                                </p>
                                <p className="descriptionP">
                                    {object.provider.name}
                                </p>
                            </div>
                            <div className="StarPrice">
                                <p className="color">
                                    {object.price === 0 ? "FREE" : object.price}
                                </p>
                                <StarRatings
                                    rating={object.rating}
                                    starDimension="10px"
                                    starSpacing="0.8px"
                                    starRatedColor="yellow"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
            <button onClick={fethIndata}>Next Page</button>
        </section>
    );
};
export default Cards;
