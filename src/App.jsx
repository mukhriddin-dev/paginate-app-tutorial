import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [totalPage] = useState(10);




  const firstIndexPost = currentPage * totalPage;
  const lastIndexPost = firstIndexPost - totalPage;


  const lastData = data.slice(lastIndexPost, firstIndexPost);









  const baseUrl = "https://jsonplaceholder.typicode.com/posts"

  const fetchData = async () => {
    setLoading(false)
    const request = await fetch(baseUrl);
    const result = await request.json();
    setData(result)
    setLoading(true)
  }


  useEffect(() => {
    fetchData()
  }, [])


  console.log(data);


  const paginate = (num) => {
    console.log(num);
    setCurrentPage(num)
  }







  return (
    <>
      <Navbar />
      <main>
        {
          loading ? <Posts paginate={paginate} data={lastData} num={data} totalPage={totalPage} /> : <Loader />
        }


      </main>
      <Footer />
    </>
  );
};

export default App;