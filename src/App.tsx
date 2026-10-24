import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Solutions } from './pages/Solutions';
import { Industries } from './pages/Industries';
import { Work } from './pages/Work';
import { WorkDetail } from './pages/WorkDetail';
import { About } from './pages/About';
import { Insights } from './pages/Insights';
import { InsightDetail } from './pages/InsightDetail';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { PrivacyPolicy, Terms } from './pages/Legal';
import { NotFound } from './pages/NotFound';

interface AppProps {
  /** Desktop-only cursor companion. Off by default for a conventional pointer. */
  enableCustomCursor?: boolean;
}

export function App({ enableCustomCursor = false }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout enableCustomCursor={enableCustomCursor} />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}