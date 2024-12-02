import './Home.css'
const Home: React.FC = () => {
  return (<div className="mainContainer">
    <div className='postContainer'>
      <div className='leftBox'>
      <div className='imageBox'>
        <img src='../src/assets/kangyan.svg'  width={100} height={150}>
        </img>
      </div>
      <span className='SpanLeft'> 导师：康雁</span>
      <span className='SpanLeft'> 联系方式:1378055043@qq.com</span>
      </div>
     
      
       
    
    </div>
    <div className='secPostContainer'>
      this is second
    </div>

  </div>);
};

export default Home;
