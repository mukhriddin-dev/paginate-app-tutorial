import React from 'react';
import { useParams } from 'react-router-dom';
const ListItem = () => {

   const {id}=useParams();

   return (
      <div className="card p-5 mx-auto bg-primary w-75" >
         "list item"  {id}
      </div>
   );
};

export default ListItem;