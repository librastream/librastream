import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link className="btn btn-primary" to="/list">
      Transactions List
    </Link>
    <Link className="btn btn-primary" to="/new-item">
      Add New
    </Link>
  </div>
);
