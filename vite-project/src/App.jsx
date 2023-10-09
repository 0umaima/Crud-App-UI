import {Routes, Route} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AddEmployee from "./pages/AddEmployee";


const app = () => {
  return(
    <div>
      <Routes>
        <Route index element={<AdminPage/>}></Route>
        <Route path="/add" element={<AddEmployee/>}></Route>
      </Routes>
    </div>
  )
} 

export default app;