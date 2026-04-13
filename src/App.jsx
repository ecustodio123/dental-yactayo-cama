import { Navigate, Route, Routes } from "react-router-dom";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import LanguageSwitcher from "./components/layout/LanguageSwitcher";
import ScrollToTop from "./components/layout/ScrollToTop";
import ComponentsPage from "./pages/ComponentsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <SiteHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/resenas" element={<Navigate to="/nosotros" replace />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <SiteFooter />
      <LanguageSwitcher />
    </>
  );
}

export default App;
