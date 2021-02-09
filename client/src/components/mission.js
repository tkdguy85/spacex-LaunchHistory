import React, { useContext } from 'react';
import { FilterContext } from '../contexts/filter';

const Mission = () => {
  const { successFilter, failFilter, handleSuccessFilter } = useContext( 
    FilterContext 
  );


const handleCheckbox = (e) => {
  handleSuccessFilter(e.target.name);
};

return (
  <div className="my-3">
    <div className="form-check">
      <input 
        type="checkbox" 
        className="form-check-input"
        name='success'
        onChange={handleCheckbox}
        checked={successFilter}
      />
      <label className="form-check-label">
        <span className="px-3 mr-2 bg-success" />
          = Success
      </label>
      </div>
      <div className="form-check">
      <input 
        type="checkbox" 
        className="form-check-input"
        name='fail'
        onChange={handleCheckbox}
        checked={failFilter}
      />
      <label className="form-check-label">
        <span className="px-3 mr-2 bg-danger" />
          = Failed/Not Launched
      </label>
    </div>
  </div>         
  );
};

export default Mission;
