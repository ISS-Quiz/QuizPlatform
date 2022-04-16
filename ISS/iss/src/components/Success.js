import React from 'react';

export default function Success({success}) {
    return(
        <div className="alert alert-success">
         {success}
       </div>
    );
}