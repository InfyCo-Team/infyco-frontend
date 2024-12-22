import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-2xl border border-border/50">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-gray-400">Enter your credentials to access your account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm" htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="name@example.com" className="bg-background" />
            </div>

            <div className="space-y-2">
              <label className="text-sm" htmlFor="password">Password</label>
              <Input id="password" type="password" className="bg-background" />
            </div>

            <Button className="w-full rounded-full" size="lg">Sign in</Button>
          </form>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;