import React, { useState, useEffect } from "react";
import Extra from "./components/Extra/Extra";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Setting from "./components/Extra/Setting/Setting";
import Profile from "./components/Extra/Profil/Profile";
import ListItem from "./components/List/ListItem";
import { Route, Routes, useParams, useLocation, useNavigate } from "react-router-dom";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
// react-router-dom v6 , private route
// useParams  , useNavigate , useLocation


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation()

  console.log(pathname);

  const [totalPage] = useState(10);
  const [auth, setAuth] = useState(false);



  const id = useParams();

  const firstIndexPost = currentPage * totalPage;
  const lastIndexPost = firstIndexPost - totalPage;

  const lastData = data.slice(lastIndexPost, firstIndexPost);

  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    setLoading(false);
    const request = await fetch(baseUrl);
    const result = await request.json();
    setData(result);
    setLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate()

  const user = {
    username: "admin123",
    password: "123456"
  }

  const useAuth = (params) => {

    if ((user.username === params.username && user.password === params.password)) {
        setAuth(true)
   
    }else{
       setAuth(false)
    }

    return auth ?

      navigate("/") : navigate('/login')

  }




  const paginate = (num) => {
    console.log(num);
    setCurrentPage(num);
  };

  console.log(data);

  return (
    <>

      {(pathname === "/login") ? "" : <Navbar setAuth={setAuth} useAuth={useAuth}/>}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Products
                loading={loading}
                paginate={paginate}
                lastData={lastData}
                data={data}
                totalPage={totalPage}
              />
            }
          />

          <Route path="/login" element={<Login isLogin={auth} login={useAuth} />} />

          <Route
            path="/list"
            element={
              <List
                loading={loading}
                paginate={paginate}
                lastData={lastData}
                data={data}
                totalPage={totalPage}
              />
            }
          />

          <Route path="/list/:id" element={<ListItem />} />




          <Route path="/extra" element={<Extra />}>
            <Route path="/extra/setting" element={<Setting />} />
            <Route path="/extra/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<Error />} />

        </Routes>
      </main>
      {(pathname === "/login") ? "" : <Footer />}

    </>
  );
};

export default App;
