import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

const Vehicle = ({ launch: { id, name, date_local, success } }) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4 className='text-warning'>Mission:{' '} 
            <span 
            className={classNames({
              'text-success': success,
              'text-danger': !success,
            })}>
              { name }
            </span>
          </h4>
          <p>
            Date: <Moment format='YYYY-MM-DD HH:mm'>{ date_local }</Moment>
          </p>
        </div>
     
        <div className="col-md-3">
          <Link 
            to={`/launch/${id}`} 
            className='btn btn-secondary'>
              Launch Details
          </Link>          
        </div>
      </div>      
    </div>
  );
};

export default Vehicle;
