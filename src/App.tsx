import {  Outlet } from 'react-router-dom';
import { Flex, Layout } from 'antd';
import './App.css'
import HeaderLayout from './layout/Header'
const { Header, Footer, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '40px',
  
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  minHeight:120,
  color: '#fff',
  backgroundColor: '#111111', 
  overflowY:'auto'
};

const footerStyle: React.CSSProperties = {
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  color: '#fff',
  backgroundColor: 'rgb(202, 206, 207)',
  height:'40px'
};const App:React.FC=()=>{
  return(
    <Flex gap="middle" wrap>
    <Layout className='app-layout'>
      <Header style={headerStyle}><HeaderLayout/></Header>
      <Content style={contentStyle}><Outlet/></Content>
      <Footer style={footerStyle}>Welcome to Lab-1219</Footer>
    </Layout>
  </Flex>
  )
  
}
export default App;
