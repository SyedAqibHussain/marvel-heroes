import React from "react";
import Card from "./Card";

const CardList = ({ heroes }) => {
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{heroes.length === 0 ? (
				<h1>No heroes found!!</h1>
			) : (
				heroes.map((hero, index) => {
					return <Card key={index} hero={hero} />;
				})
			)}
		</div>
	);
};

export default CardList;
