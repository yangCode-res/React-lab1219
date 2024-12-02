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
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};const App:React.FC=()=>{
  return(
    <Flex gap="middle" wrap>
    <Layout className='app-layout'>
      <Header style={headerStyle}><HeaderLayout/></Header>
      <Content style={contentStyle}><Outlet/></Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Flex>
  )
  
}
export default App;
