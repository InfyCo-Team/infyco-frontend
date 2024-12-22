import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-2xl border border-border/50">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-gray-400">Join InfyCo to connect with mentors and grow your career</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm" htmlFor="fullName">Full Name</label>
              <Input id="fullName" placeholder="John Doe" className="bg-background" />
            </div>

            <div className="space-y-2">
              <label className="text-sm" htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="name@example.com" className="bg-background" />
            </div>

            <div className="space-y-2">
              <label className="text-sm" htmlFor="password">Password</label>
              <Input id="password" type="password" className="bg-background" />
            </div>

            <div className="space-y-2">
              <label className="text-sm">I want to</label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mentee">Find a Mentor</SelectItem>
                  <SelectItem value="mentor">Become a Mentor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full rounded-full" size="lg">Create account</Button>
          </form>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;