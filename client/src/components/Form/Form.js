import React from "react";
import "./Form.css";

const Form = props => 
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header success">
            <center>Search Parameters</center>
          </div>

          <div className="card-body">

          <div className="row">

          <form>
          <div className="col-lg-6 floatItem">

            <div className="form-group floatItem">
              <label>Search Term</label>
              <input
                type="text"
                className="form-control"
                name="searchTerm"
                value={props.searchTerm}
                onChange={props.handleInputChange}
              />
            </div>
            </div>
            <div className="col-lg-3 floatItem">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="MM/DD/YYYY"
                name="startDate"
                value={props.startyr}
                onChange={props.handleInputChange}
              />
            </div>
            </div>
            <div className="col-lg-3 floatItem">
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={props.endyr}
                onChange={props.handleInputChange}
              />
            </div>
          </div>

            <center><button type ="submit" className="btn btn-secondary" onClick={props.handleFormSubmit}>Search</button></center>

          </form>
          </div>
          </div>
        </div>
    </div> 
  </div> 



export default Form;