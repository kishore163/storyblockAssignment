
import Header from '../storyblockComponents/Config/Header'
import Footer from '../storyblockComponents/Config/Footer'
import { Outlet } from 'react-router'


function App() {
  return (
   <>
      <Header />
      <Outlet/>
    <Footer/>
    
    </>
    
  )

  
  
}

export default App
