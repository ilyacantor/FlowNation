import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Index from "./pages/Index";
import EventDiscovery from "./pages/EventDiscovery";
import BuddyCommunity from "./pages/BuddyCommunity";
import DashboardInsights from "./pages/DashboardInsights";
import ProfileSettings from "./pages/ProfileSettings";
import PersonaDemo from "./pages/PersonaDemo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/discover" element={<EventDiscovery />} />
          <Route path="/community" element={<BuddyCommunity />} />
          <Route path="/dashboard" element={<DashboardInsights />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/persona" element={<PersonaDemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
