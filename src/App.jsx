import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NoPage from "./pages/NoPage/NoPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import VacancyPage from "./pages/Admin/VacancyPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/vacancy" element={<VacancyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
