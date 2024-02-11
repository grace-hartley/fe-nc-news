import React from "react";

const Sorting = ({ onSortByChange, onSortOrderChange }) => {
  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    onSortByChange(selectedSortBy);
  };

  const handleSortOrderChange = (event) => {
    const selectedSortOrder = event.target.value;
    onSortOrderChange(selectedSortOrder);
  };

  return (
    <div className="sorting">
      <label htmlFor="sortByDropdown">Sort By: </label>
      <select
        id="sortByDropdown"
        onChange={handleSortByChange}
        className="sort"
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>

      <label htmlFor="sortOrderDropdown" className="order">
        Order:{" "}
      </label>
      <select
        id="sortOrderDropdown"
        onChange={handleSortOrderChange}
        className="sort"
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default Sorting;
