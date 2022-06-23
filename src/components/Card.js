import React from "react";

const Card = ({ hero }) => {
	return (
		<div className="bg-black inline-block br-3 p-3 m-2 grow bw-2 shadow-5 card-div">
			<img
				alt="hero"
				src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}
				className="card-image"
			/>
			<div>
				<h2 className="text-white">{hero.name}</h2>
				<p className="text-white card-description">{hero.description}</p>
			</div>
		</div>
	);
};

export default Card;
