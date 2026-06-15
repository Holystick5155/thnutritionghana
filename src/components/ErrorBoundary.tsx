import { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full">
          {/* PAGE HEADER */}
          <section className="relative bg-primary py-16 md:py-28 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
                  Error
                </p>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 md:mb-6">
                  Something Went Wrong
                </h1>
                <div className="w-20 h-1 bg-accent mb-6 md:mb-8" />
                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                  An unexpected error occurred while loading this page. Our team
                  has been notified.
                </p>
              </div>
            </div>
          </section>

          {/* ERROR CONTENT */}
          <section className="py-14 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-24 h-24 rounded-full bg-destructive/10 border-2 border-dashed border-destructive/30 flex items-center justify-center mx-auto mb-8">
                  <AlertTriangle className="text-destructive" size={36} />
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  An Error Occurred
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-lg mx-auto">
                  We encountered an unexpected error. Please try one of the
                  options below to continue.
                </p>

                {this.state.error && (
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-8 max-w-lg mx-auto text-left">
                    <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-2">
                      Error Details
                    </p>
                    <p className="text-sm text-muted-foreground font-mono break-all">
                      {this.state.error.message}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold"
                    onClick={this.handleReset}
                  >
                    <RefreshCw className="mr-2" size={18} />
                    Try Again
                  </Button>
                  <Link href="/">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold"
                    >
                      <Home className="mr-2" size={18} />
                      Go to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    return this.props.children;
  }
}