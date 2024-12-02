import './Home.css'
const Home: React.FC = () => {
    return (<div className="mainContainer">
      <div className='postContainer'>
        <div className='imageBox'>
        <img src='../src/assets/kangyan.svg' >
        </img>
       
        </div>
        <div>
          <span> 导师：康雁</span>
        </div>
      </div>
      <div className='secPostContainer'>
        this is second
      </div>

    </div>);
  };
  
export default Home;
  