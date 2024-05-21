import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import MainLayout from "./layouts/MainLayout/MainLayout";
import CompanyPage from "./pages/Admin/CompanyPage";
import UsersPage from "./pages/Admin/UsersPage";
import UserDetail from "./pages/Admin/UsersPage/UserDetail";
import VacancyPage from "./pages/Admin/VacancyPage";
import AddVacancy from "./pages/Admin/VacancyPage/AddVacancy";
import Companies from "./pages/Companies/Companies";
import CompaniesDetail from "./pages/Companies/CompaniesDetail/CompaniesDetail";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NoPage from "./pages/NoPage/NoPage";
import SignInPage from "./pages/SignInPage/SignInPage";

import VacancyDetail from "./pages/VacancyDetail/VacancyDetail";

import Vacancy from "./pages/Vacancy";

import UserInformationPage from "./pages/UserInformationPage/UserInformationPage";
import VacancyApply from "./pages/VacancyApply";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/detail" element={<CompaniesDetail />} />
            <Route path="/vacancy/detail" element={<VacancyDetail />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/user-information" element={<UserInformationPage />} />
            <Route path="/register" element={<SignInPage />} />
            <Route path="/login" element={<LoginPage />} />
             <Route path="/vacancies" element={<Vacancy/>}/>
            <Route path="/vacancyDetail/:id" element={<VacancyDetail />} />
            <Route path="/vacancyApply" element={<VacancyApply />} />
            <Route path="/userProfile" element={<Profile/>}/>

          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/vacancy" element={<VacancyPage />} />
            <Route path="/admin/vacancy/add" element={<AddVacancy />} />
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
