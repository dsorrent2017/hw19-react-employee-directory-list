import React from "react";

/**
 * Set up a Search Control button and Input text control
 * @param {any} props
 */

function SearchForm(props) {
    debugger; console.log("SearchForm(props)");
  return (
    <form>
          <div className="form-group">
              {/* for( search in html-form-elements {
                */
              }
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
