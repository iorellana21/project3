import React from "react";
import './index.scss';

export default function SearchBar() {
  return (
    <form className="mt-4">
          {/* <div className="row mb-4">
            <div className="form-group col-md-9">
              <input id="exampleFormControlInput5" type="email" placeholder="What're you searching for?" className="form-control form-control-underlined">
            </div>
            <div className="form-group col-md-3">
              <button type="submit" className="btn btn-primary rounded-pill btn-block shadow-sm">Search</button>
            </div>
          </div> */}
          <div className="row">
          <div className="form-group col-12">
              <input id="exampleFormControlInput6" type="email" placeholder="What're you searching for?" className="form-control form-control-underlined" />
            </div>
            <div className="form-group col-12">
              <button type="submit" className="btn btn-primary rounded-pill btn-block shadow-sm search-button">Search</button>
            </div>
            
          </div>
        </form>
  );
}
 