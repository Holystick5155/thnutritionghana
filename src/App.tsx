import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import ErrorBoundary from "@/components/ErrorBoundary";

import Home from "@/pages/home";
import About from "@/pages/about";
import Workshop from "@/pages/workshop";
import Partners from "@/pages/partners";
import Media from "@/pages/media";
import Register from "@/pages/register";
import Admin from "@/pages/admin";

const queryClient = new QueryClient();



function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/workshop" component={Workshop} />
        <Route path="/partners" component={Partners} />
        <Route path="/media" component={Media} />
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
