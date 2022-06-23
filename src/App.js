import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import CardList from "./components/CardList";
import { useDispatch } from "react-redux";
import { getHeroesAction } from "./redux/actions";

function App() {
	const dispatch = useDispatch();
	const [searchField, setSearchField] = useState("");

	useEffect(() => {
		dispatch(getHeroesAction({ name: "" }));
	}, []);

	useEffect(() => {
		dispatch(getHeroesAction({ name: searchField }));
	}, [searchField]);

	const { processing, heroes } = useSelector((state) => state.heroesList);

	const handleSearchInput = (event) => {
		setSearchField(event.target.value);
	};

	return (
		<div className="flex flex-column vh-100">
			<SearchBox searchChange={handleSearchInput} />
			{processing === false && heroes !== undefined ? (
				<Scroll>
					<CardList heroes={heroes} />
				</Scroll>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}

export default App;
