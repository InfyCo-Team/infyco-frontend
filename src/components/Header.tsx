import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">InfyCo</Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/mentors" className="text-sm text-gray-300 hover:text-white transition-colors">Find Mentors</Link>
          <Link to="/peers" className="text-sm text-gray-300 hover:text-white transition-colors">Peers</Link>
          <Link to="/events" className="text-sm text-gray-300 hover:text-white transition-colors">Events</Link>
        </nav>

        <Button 
          variant="default" 
          size="sm" 
          className="bg-primary hover:bg-primary/90 rounded-full"
          onClick={handleSignUpClick}
        >
          Sign up
        </Button>
      </div>
    </header>
  );
};