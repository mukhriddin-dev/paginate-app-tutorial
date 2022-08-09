import React from 'react';
import Loader from '../Loader/Loader';
import Posts from "../Posts/Posts";
import "./product.scss"
const Products = ({loading,paginate,lastData,data,totalPage}) => {
   return (
      <div className='product w-100 p-4'>
         {
          loading ? <Posts paginate={paginate} data={lastData} num={data} totalPage={totalPage} /> : <Loader />
        }
 
      </div>
   );
};

export default Products;