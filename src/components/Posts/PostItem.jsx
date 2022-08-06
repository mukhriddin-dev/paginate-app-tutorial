import React from "react";

const PostItem = ({ item }) => {
   return (
      <>
         <li className="collection-item">
            <div>
               {item.title}
               <a href="#!" className="secondary-content">
                  <i className="material-icons">send</i>
               </a>
            </div>
         </li>
      </>
   );
};

export default PostItem;
