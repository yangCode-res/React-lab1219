import { StrictMode,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Home from './page/Home/Home.tsx'
import FlashScreen from './FlashScreen.tsx'
import Apply from './page/Apply/apply.tsx'
import 'animate.css';
import 'virtual:windi.css'
import { Provider } from 'react-redux';
import {store} from './store'
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
    <BrowserRouter>
    <Suspense
        fallback={
          <div style={{ height: '100vh', background: '#000', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Loading...
          </div>
        }
      >
      <Routes>
      <Route path='/' element={<FlashScreen/>}></Route>
      <Route path='/app' element={<App/>}>
      <Route index element={<Home/>}></Route>
      <Route path='apply' element={<Apply/>}></Route>
      </Route>
      

    </Routes>
      </Suspense>
    
    
    </BrowserRouter>
  </StrictMode>
  </Provider>
)
