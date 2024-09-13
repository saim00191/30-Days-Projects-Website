
import Navbar from "./components/navbar/navbar"
import MainPage from "./components/mainpage/mainpage"
import Footer from "./components/footer/footer"

export default function Home (){
  return (
    <div>
      <Navbar/>
      <MainPage />   
      <Footer/>
    </div>
  )
}