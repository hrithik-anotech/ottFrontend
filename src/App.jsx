import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
// import LiveTVPage from './pages/LiveTVPage';
// import OnDemandPage from './pages/OnDemandPage';
import DiscoverPage from './pages/DiscoverPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-plex-dark text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/live-tv" element={<LiveTVPage />} /> */}
            {/* <Route path="/on-demand" element={<OnDemandPage />} /> */}
            <Route path="/discover" element={<DiscoverPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;