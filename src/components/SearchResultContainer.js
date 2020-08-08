import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import "../styles/Result.css";
const MaxResults = 20;

class SearchResultContainer extends Component {

  debugger;
  

  state = {
    result: [],
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: ""

  };

    // onsafe_componentWillMount()
    componentDidMount() {
        debugger; console.log("componentDidMount");
    API.search()
      .then(res => {
        console.log(res)
        this.setState({
          result: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.age,
            key: i
          }))

        })
     
      })
      .catch(err => console.log(err));
  }

  filterEmployees = (searchkey) => {
    console.log("filterEmployees by searchKey .... Uses State");
    console.log(searchkey);
    console.log(this.state.result);
    // this.state.result = this.state.result.filter(this.state.result => this.state.result.includes(searchkey));
    var filterResult = this.state.result.filter(person => person.firstName === searchkey)


    /*****
     https://reactjs.org/docs/react-component.html#setstate
     setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. 
     This is the primary method you use to update the user interface in response to event handlers and server responses.
    *****/
    this.setState({  //use React API setState
      result:filterResult
      
    })

   
  }


    handleFormSubmit = event => {
        debugger; console.log("handleFormSubmit")
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);
    //filter function here
    this.filterEmployees(value);
    this.setState({

      [name]: value

    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);

  };


    handleInputChange = event => {
        debugger; console.log("handleInputChange");
    event.preventDefault();
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);

    this.setState({

      [name]: value

    });
        
  };

    render() {
        debugger; console.log("render() -- remember to remove uneeded comments");
        console.log("use iterator over Employee collection : [...this.state.result].map((item)");
        console.log('this is the old Java hasNext iteration in disguise');
    return (
      <div className="container">
        <div className="row"> 
          <div className="col-md-12"> 
            <h2>Employee Directory</h2>
          </div>
            </div>
        {/* <!-- this row takes 1/2 page width and contains the seach form. It contains 2 function references --> */}

        <div className="row">
          <div className="col-md-6">
            <SearchForm
              value={this.state.search}
               handleInputChange={this.handleInputChange}
               handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
        <div className="row">
          {/* <div > */}
          <table className="table">
            <tr>
              <th scope="col">Photo</th>
                        <th>First Name</th>

              {/*  <!-- React convention to place comments inside of races to perform operations which are DOM Nodes.  
                *  Sorting is a requirement for this assignment--> 
                */}

              {/* <th onClick={this.onSortChange}>First Name   */}
              {/* <button onClick={this.onSortChange}> ^
								</button> 
                */}
              {/* </th> */}
              <th scope="col">Last Name </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
                    {/* foreach(EmployeeCard item in this.state.result.sortedMap fill in the fields for an EmployeeCard) { 
                     * Lay out the presentation - html;
                     * Map in the data from the EmployeeCard Item from the sortedMap
                     * }
                     */}
            {/* { [...this.state.result].sort(this.sortTypes[this.state.currentSort].fn).map((item) =>  */}
            {/* {this.state.result.length > 0 ? (
                <div>
                  {this.state.result.map(item => (
                    <EmployeeCard
                      picture={item.picture}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      email={item.email}
                      phone={item.phone}
                      key={item.key}
                    />
                  ))}
                </div>
              ) : (<div />)} */}
            {[...this.state.result].map((item) =>
              <EmployeeCard
                picture={item.picture}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />
            )}

          </table>
        </div>


      </div>
    );
  }
}

export default SearchResultContainer;