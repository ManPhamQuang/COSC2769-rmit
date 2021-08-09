import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import dynamic from 'next/dynamic'

// Use dynamic import NextJS
const AuthNavBar = dynamic(() => import('./AuthNavBar'), {ssr: false});
const RegularNavbar = dynamic(() => import('./RegularNavbar'), {ssr: false});

const MainNavBar = () => {
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
      {state.user ? <AuthNavBar categories={categories} user={state.user} /> : <RegularNavbar categories={categories}/>}
    </div>
  )
};

export default MainNavBar;