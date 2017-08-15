import React from 'react';


const NoMatch = ({ location }) => (
  <div>
    <h1>404</h1>
    <h4>No Match for <code>{location.pathname}</code></h4>
  </div>
);

export default NoMatch;
