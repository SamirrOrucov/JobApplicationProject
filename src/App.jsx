import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NoPage from "./pages/NoPage/NoPage";
import Companies from "./pages/Companies/Companies";
import CompaniesDetail from "./pages/Companies/CompaniesDetail/CompaniesDetail";


import SignInPage from "./pages/SignInPage/SignInPage";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import VacancyPage from "./pages/Admin/VacancyPage";
import UsersPage from "./pages/Admin/UsersPage";
import UserDetail from "./pages/Admin/UsersPage/UserDetail";
import CompanyPage from "./pages/Admin/CompanyPage";
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
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/vacancy" element={<VacancyPage />} />
            <Route path="/admin/users" element={<UsersPage />} />
            <Route path="/admin/users/detail" element={<UserDetail />} />
            <Route path="/admin/companies" element={<CompanyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
