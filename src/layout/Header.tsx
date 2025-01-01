import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Header.css';
import {AppState} from '../store'
import { SET_CURRENT_ACTIVATE } from "../store";
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  const currentActivate=useSelector((state:AppState)=>state.currentActivate)
  const dispatch=useDispatch()
  const [overlay, setOverlay] = useState<boolean>(false);
  const handleClick = (index: number) => {
    dispatch({type:SET_CURRENT_ACTIVATE,payload:index})
  };
  useEffect(() => {
    console.log(currentActivate);  // 这里会在 currentActivate 更新后打印新的值
  }, [currentActivate]);  // 依赖于 currentActivate 状态
  const navItems = [
    {
      name:"了解详情",
      href:"/app"
    },
    {
      name:"加入我们",
      href:"/app/apply"
    },
    
  ];

  return (
    
    <header className="apple-header">
      <div className="apple-header-container">
        <nav className="apple-nav">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`nav-item ${currentActivate === index ? 'currentActive' : ''}`}
              onMouseEnter={() => {
                setOverlay(true);
              }}
              onClick={()=>{
                handleClick(index)
                console.log('this is index',index);
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
          
         
          <div className="apple-submenu">
            <div  className={`submenu-content ${overlay===true ? "activeSubmenu":""}` }>
            <div className="submenu-column">
              <h4>选购</h4>
              <a href="/">选购新品</a>
              <a href="/">Mac</a>
              <a href="/">iPad</a>
              <a href="/">iPhone</a>
              <a href="/">配件</a>
            </div>
            <div className="submenu-column">
              <h4>快捷链接</h4>
              <a href="/">查找门店</a>
              <a href="/">订阅服务</a>
            </div>
            <div className="submenu-column">
              <h4>专属选购</h4>
              <a href="/">教育优惠</a>
              <a href="/">企业采购</a>
            </div>
            </div>
          </div>
          <div className={`submenu-overlay ${overlay===true ? "activeSubmenu":""}` } onMouseEnter={() => {
                  // 延迟隐藏蒙层
                   setOverlay(false)
                   console.log('leave');
                   
                }}></div>
      
    </header>
  );
};

export default Header;
