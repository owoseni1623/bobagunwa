import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GunwaProvider } from './Context/GunwaContext';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService/TermsOfService';
import CookiePolicy from './Components/CookiePolicy/CookiePolicy';

// Import components using React.lazy for code splitting
const Header = React.lazy(() => import('./Components/Header/Header'));
const Footer = React.lazy(() => import('./Components/Footer/Footer'));
const Home = React.lazy(() => import('./Components/Home/Home'));
const ExecutiveTeam = React.lazy(() => import('./Components/Executives/ExecutivePage'));
const Dashboard = React.lazy(() => import('./Components/Dashboard/Dashboard'));
const MemberPage = React.lazy(() => import('./Components/Member/MemberPage'));
const GalleryPage = React.lazy(() => import('./Components/Gallery/GalleryPage'));
const EventPage = React.lazy(() => import('./Components/Event/EventPage'));
const AboutUs = React.lazy(() => import('./Components/AboutUs/AboutUs'));
const RegistrationForm = React.lazy(() => import('./Components/Form/RegistrationForm'));
const RoyalCourtPage = React.lazy(() => import('./Components/RoyalCourtPage/RoyalCourtPage'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-xl font-semibold">Loading...</div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl text-red-600">
            Something went wrong. Please try refreshing the page.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <GunwaProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Suspense fallback={<LoadingFallback />}>
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <Home />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/executives" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <ExecutiveTeam />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/dashboard" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <Dashboard />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/members" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <MemberPage />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/gallery" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <GalleryPage />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/events" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <EventPage />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/about" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <AboutUs />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/join" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <RegistrationForm />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/royal" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <RoyalCourtPage />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/privacy" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <PrivacyPolicy />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/terms" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <TermsOfService />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/cookies" 
                    element={
                      <Suspense fallback={<LoadingFallback />}>
                        <CookiePolicy />
                      </Suspense>
                    } 
                  />
                </Routes>
              </main>
              <Footer />
            </Suspense>
          </div>
        </Router>
      </GunwaProvider>
    </ErrorBoundary>
  );
}

export default App;