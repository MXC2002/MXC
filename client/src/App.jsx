import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRoutes"

function App() {

  return (
    <BrowserRouter>
      {/* Header */}
      <Header />

      {/* Routes */}
      <AppRoutes />
      
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
