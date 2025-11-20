import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default App
