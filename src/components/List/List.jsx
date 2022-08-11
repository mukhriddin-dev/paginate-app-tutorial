import React from 'react';
import "./list.scss";
import Loader from '../Loader/Loader';
import Posts from "../Posts/Posts";
import { Outlet, useParams } from 'react-router-dom';

const List = ({ loading, paginate, lastData, data, totalPage }) => {




   const id = useParams();

   console.log(id);

   return (
      <div className='list w-100 p-4 bg-warning'>

         {
            (loading) ? <Posts paginate={paginate} data={lastData} num={data} totalPage={totalPage} /> : <Loader />
         }


         <Outlet />

      </div>

   );
};

export default List;