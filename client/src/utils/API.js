import axios from "axios";

export default {
  // Gets all books
  getBands: function() {
    return axios.get("/api/bands");
  },
  // Gets the band with the given id
  getBand: function(id) {
    return axios.get("/api/bands/" + id);
  },
  // Deletes the band with the given id
  deleteBand: function(id) {
    return axios.delete("/api/bands/" + id);
  },
  // Saves a band to the database
  saveBand: function(bandData) {
    return axios.post("/api/bands", bandData);
  }
};
