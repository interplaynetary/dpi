import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Join from "@/pages/Join";
import NotFound from "@/pages/not-found";

// Get the base path from import.meta.env (set by Vite)
const base = import.meta.env.BASE_URL;

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/join" component={Join}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router base={base}>
          <ScrollToTop />
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
