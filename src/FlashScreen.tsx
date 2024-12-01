import React, { useEffect, useState } from 'react';
import './FlashScreen.css';
import { useNavigate } from 'react-router-dom';
const FlashScreen: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
        setShowAnimation(true);
      }, 4000); // 4秒后触发淡出 
    const timer = setTimeout(() => {
      navigate('/app')
    }, 5000); // 动画持续时间（毫秒）

    return () => {clearTimeout(timer) 
        clearTimeout(fadeOutTimer)};
  }, [navigate]);

  return (
    <div className={`flash-screen ${showAnimation ? 'animate' : ''}`}>
      {/* 这里可以放内容 */}
      <h1>Welcome to Lab 1219</h1>
    </div>
  );
};

export default FlashScreen;
