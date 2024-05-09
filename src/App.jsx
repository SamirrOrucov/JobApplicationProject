import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login"; 
import NoPage from "./pages/NoPage/NoPage";
import Companies from "./pages/Companies/Companies";
import CompaniesDetail from "./pages/Companies/CompaniesDetail/CompaniesDetail";


function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/companies"  element={<Companies/>}  />
                <Route path="/companiesDetail"  element={<CompaniesDetail />}  />
                <Route path="/*" element={<NoPage />} />
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
