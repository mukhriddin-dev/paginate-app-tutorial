import React,{useState,useEffect} from 'react';
import { useParams , useNavigate, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
const ListItem = () => {

   const {id}=useParams();
   const [ loading, setLoading]=useState(true);
   const [post,setPost]=useState([]);

   const back=useNavigate();
   const loc=useLocation();


   console.log(loc);

   console.log(back);

   console.log(id);

const postData=async()=>{
   setLoading(false)
   const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const result=await response.json();
   setPost(result)
   setLoading(true)

}

useEffect(()=>{
   postData()
},[id])


console.log(post);

   return (
      <div className="card p-5 mx-auto bg-primary w-75" >
         {
            loading ?  <>
            <h2>{ !(typeof(post.title)=== 'undefined') ? post.title : "MA'LUMOT TOPILMADI" }</h2>
            <p>{ !(typeof(post.body)=== 'undefined') ? post.body : ""}</p>
            </> :

            <Loader/>

         }
        
        <button className="btn btn-light" onClick={()=>back(-1)}>
           go back
        </button>
      </div>
   );
};

export default ListItem;