import React from "react";
import "./SearchResults.css";

const SearchResults = props =>
  <div className="row" style={{ marginTop: 30 }}>
    <div className="col-sm-12">
        <div className="card">
            <div className="card-header"><center>Top 10 Articles</center></div>

            <div className="card-body">

              {props.results.slice(0, 10).map(
                (result) =>
                    <div className = "outline" key={result.id}>
                      <table>
                        <tbody>
                        <tr>
                        <td><img src={"https://nytimes.com/" + result.multimedia[1].url} alt="" /></td>
                          <td>
                          <table>
                          <tr><td><h3>{result.headline.main}</h3></td></tr>                            
                          <tr><td><h4>{result.snippet}</h4></td></tr>
                          <tr><td><h5>{result.byline.original}  |  Publish Date: {result.pub_date})</h5></td></tr>
                          
                          <tr><td>
                          <button type="button" className="btn btn-primary btn-sm btnPad">Save Article</button >                            
                            </td></tr>
                          
                          </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
             
      
                    </div>
                 )                
                 }


            </div>
        </div>
    </div>
  </div>


export default SearchResults;