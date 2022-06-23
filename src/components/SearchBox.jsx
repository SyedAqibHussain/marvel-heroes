import React from "react";

const SearchBox = ({ searchChange }) => {
	return (
		<div className="p-2">
			<input
				className="p-3 ba b--green"
				type="search"
				placeholder="Search"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
