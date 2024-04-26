import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Recruit from './pages/Recruit';
import Job_information from './pages/Jobinformation'
import AboutUs from './pages/About_Us'
import NewsPage from './pages/NewsPage'
import DetailsPage from './pages/Detailspage'
import Media_Kit_page from './pages/Media_kit_page'
import TermsPage from './pages/Termspage'
import FinancingPage from './pages/financingPage'
import IONsignaturePage from './pages/IONsignaturePage'
import Next_Year_page from './pages/Next_Year_page'
import Seed_Round_Page from './pages/Seed_Round_Page'
import Senior_Leadership_page from './pages/Senior_Leadership_page'
import Million_Seed_Round_page from './pages/Million_Seed_Round_page'
import High_rise_photos_Page from './pages/High_rise_photos_page'
import Picture_column_Page from './pages/Picture_column_page'
import Contact_us_page from './pages/Contact_us_page'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employment" element={<Recruit />} />
        <Route path="/job_information" element={<Job_information />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/NewsPage" element={<NewsPage />} />
        <Route path="/ION-Mobility-Introduces-M1-S-Electric-Motorcycle-at-IMOS-2022" element={<DetailsPage />} />
        <Route path="/media-kit" element={<Media_Kit_page />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/ION-Mobility-closes-US18-7-m-in-Series-A-funding" element={<FinancingPage />} />
        <Route path="/ION-Mobility-signs-MoU-with-PLN-on-EV-Motorcycle-Charging-Solutions-and-Servicesg" element={<IONsignaturePage />} />
        <Route path="/ION-Mobility's-First-Electric-Motorbike-to-Hit-the-Roads-in-Indonesia-Next-Year" element={<Next_Year_page />} />
        <Route path="/ION-Mobility-completes-US$6.8-million-Seed-Round" element={<Seed_Round_Page />} />
        <Route path="/ION-Mobility-Announces-Changes-to-Senior-Leadership" element={<Senior_Leadership_page />} />
        <Route path="/ION-Mobility-Raises-US$3.3-Million-Seed-Round" element={<Million_Seed_Round_page />} />
        <Route path="/media-kit/1" element={<High_rise_photos_Page />} />
        <Route path="/media-kit/2" element={<Picture_column_Page />} />
        <Route path="/contact-us" element={<Contact_us_page />} />


      </Routes>
    </Router>
  );
}

export default App;
