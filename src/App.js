import React, {useState, useEffect} from "react";
import { Layout } from 'antd';
import './psaStyle.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Checking from "./components/Checking/Checking";
import AddChild from "./components/Home/AddChild";
import LoginComponent from "./components/auth/Login";


const { Header, Content, Footer, Sider } = Layout;
function App() {
  const [user, setUser] = useState(null);
  const [state, setState] = useState({collapsed: false, user: null});


  const logout = () => {
    sessionStorage.removeItem('userProfile',);
    setUser(null);
  }

  const refreshUser = (data) => {

    data.Authorization=`Bearer ${data.jwt}`
    sessionStorage.setItem('userProfile', JSON.stringify(data));
    setUser(data);
  }


  useEffect(() => {
    if (sessionStorage.getItem('userProfile')) {
      setUser(JSON.parse(sessionStorage.getItem('userProfile')));
    }

  }, []);


  const onCollapse = collapsed => {
    setState({collapsed});
  };

  if (!user || user === {}) {
    return (
        <LoginComponent
            setUser={refreshUser}
            state={state}
            onCollapse={onCollapse}
            user={
              user
            }/>
    );
  }

  return <Home state={state}
                    onCollapse={onCollapse}
                    logout={logout}
                    user={
                      user
                    }/>;
}

export default App;
