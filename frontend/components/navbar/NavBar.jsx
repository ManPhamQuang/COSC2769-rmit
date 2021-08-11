import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import dynamic from 'next/dynamic'

// Use dynamic import NextJS
const NavNonAuth = dynamic(() => import('./NavNonAuth'), {ssr: false});
const NavAuth = dynamic(() => import('./NavAuth'), {ssr: false});

const NavBar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/categories")
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {state.user ? <NavAuth categories={categories} user={state.user} /> : <NavNonAuth categories={categories}/>}
    </div>
  )
};

export default NavBar;