import React from "react";
import PostItem from "./PostItem";

const Posts = ({ data, totalPage, num, paginate }) => {
  let dot = [];


  for (let i = 1; i <= Math.ceil(num.length / totalPage); i++) {
    dot.push(i);
  }



  return (
    <div className="w-75 mx-auto mt-5">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>All posts</h4>
        </li>
        {data.map((item, index) => {
          return <PostItem key={item.id} item={item} />;
        })}
      </ul>

      <ul className="pagination w-50 mx-auto  d-flex justify-content-center">
        <li className="disabled">
          <a href="#!">
            <i class="material-icons">chevron_left</i>
          </a>
        </li>

        {dot.map((dot, index) => {
          return (
            <li className="waves-effect" onClick={() => paginate(dot) }>
              <a href="#!">{dot}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
