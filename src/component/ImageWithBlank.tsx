import React from "react";

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
  return (
    <div
      className="image-with-blank" // 添加 className 以便应用样式
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: width,
        borderRadius: "10px", // 设置圆角
        overflow: "hidden", // 确保圆角不会被子元素覆盖
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // 可选：添加阴影效果
      }}
    >
      {/* 图片部分 */}
      <img
        src={imageSrc}
        alt={altText}
        style={{
          width: width,
          height: imgHeight,
          objectFit: "cover", // 确保图片按比例填充容器
        }}
      />
      {/* 黑色空白部分 */}
      <div
        style={{
          height: blankHeight,
          background: "black",
          width: width,
        }}
      ></div>
    </div>
  );
};

export default ImageWithBlank;
