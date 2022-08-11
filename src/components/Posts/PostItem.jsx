import React,{useState} from "react";
import { Link } from "react-router-dom";

const PostItem = ({ item }) => {

 

   return (
      <>
         <li className="collection-item">
           <Link to={`/list/${item.id}`}>
           <div>
               {item.title}
               <a href="#!" className="secondary-content">
                  <i className="material-icons">send</i>
               </a>
            </div>
           </Link>
         </li>
      </>
   );
};

export default PostItem;
