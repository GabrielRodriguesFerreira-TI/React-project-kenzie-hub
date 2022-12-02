import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain as Routes } from "./routes"

function App() {


  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes />
    </>
  )
}

export default App
