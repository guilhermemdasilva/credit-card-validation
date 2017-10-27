import React from 'react';
import Panel from '../Panel/Panel';

const Page = () => {
  return (
    <div className="container">
      <div className="col-xs-12 col-sm-6 col-sm-offset-3">
        <div className="page-header">
          <h1>Order now</h1>
        </div>

        <Panel />
      </div>
    </div>
  );
};

export default Page;
