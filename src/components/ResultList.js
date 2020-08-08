import React from "react";

/**
 * Process a list of properties in props by mapping the FirstName, LastName and Age
 * 
 * 
 * @param {any} props
 */

function ResultList(props) {
    debugger;
    console.log("ResultListProps");
  return (
    <table className="table">

      {/* <ul className="list-group"> */}
      {props.results.map(result => (
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td >
            <td>Smith</td>
            <td>50</td>
          </tr>
        </table>
        // <li className="list-group-item" key={result.id}>

        //   {/* <img alt={result.title} className="img-fluid" src={result.images.original.url} /> */}

        // </li>
      ))}
      {/* </ul> */}
    </table>
  );
}

export default ResultList;
