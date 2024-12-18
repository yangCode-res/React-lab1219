import React, { useState } from "react";
import './Header.css';

const Header: React.FC = () => {
  const [currentActivate, setCurrentActivate] = useState<number>(0);
  const [overlay, setOverlay] = useState<boolean>(false);
  const navItems = [
    "了解详情",
    "加入我们",
    "团队成果",
    "成员介绍",
    "就业展示",
    "最近通知",
    "技术支持",
  ];

  return (
    <header className="apple-header">
      <div className="apple-header-container">
        <nav className="apple-nav">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="/app"
              className={`nav-item ${currentActivate === index ? 'currentActive' : ''}`}
              onMouseEnter={() => {
                console.log('enter');
                
                setOverlay(true);
              }}
              onMouseDown={() => setCurrentActivate(index)}
            >
              {item}
            </a>
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
