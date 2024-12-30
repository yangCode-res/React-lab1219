import React, { useState } from "react";
import "./ImageWithBlank.css";

interface ImageWithBlankProps {
  imageSrc: string;
  altText: string;
  blankHeight: string;
  imgHeight: string;
  width: string;
}

const ImageWithBlank: React.FC<ImageWithBlankProps> = ({
  imageSrc,
  altText,
  blankHeight,
  imgHeight,
  width,
}) => {
  const [isActivate, setIsActivate] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false); // 控制翻转状态

  const handleClick = () => {
    setIsFlipping(true); // 开始翻转动画
    setTimeout(() => {
      setIsActivate(!isActivate); // 动画完成后切换视图
      setIsFlipping(false); // 重置翻转状态
    }, 400); // 动画持续时间与 CSS 保持一致
  };

  return (
    <div
      className={`container ${isFlipping ? "flipping" : ""} ${
        isActivate ? "front" : "back"
      }`}
      style={{
        width: width,
        
        perspective: "1000px", // 3D 透视效果
      }}
      onClick={handleClick}
    >
      {isActivate ? (
        <div
          className="image-with-blank"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: width,
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 4px 6px rgba(190, 189, 167, 0.1)",
            backgroundColor: "white",
          }}
        >
          {/* 图片部分 */}
          <img
            src={imageSrc}
            alt={altText}
            style={{
              width: width,
              height: imgHeight,
              objectFit: "cover",
            }}
          />
          {/* 黑色空白部分 */}
          <div
            style={{
              height: blankHeight,
              backgroundColor: "rgba(221, 220, 245, 1)",
              width: width,
              display:"flex",
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'row'
            }}
          >
            <span className="text-dark-600">杨明健</span>
          </div>
        </div>
      ) : (
        <div
          className="SecondImageWitBlank"
          style={{
            width: width,
            backgroundColor: "rgb(245, 245, 220)",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(190, 189, 167, 0.1)",
          }}
        >
          this is second
        </div>
      )}
    </div>
  );
};

export default ImageWithBlank;
