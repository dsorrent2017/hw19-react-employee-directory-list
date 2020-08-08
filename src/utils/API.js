import axios from "axios";


const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

//get a list of users that we can plug into our company
export default {
    search: function () {
       return axios.get(BASEURL);
  }
};

