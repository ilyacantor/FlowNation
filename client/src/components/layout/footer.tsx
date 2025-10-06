import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-lg font-bold">FlowNation</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting professionals for meaningful collaboration and growth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 FlowNation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xl">𝕏</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xl">in</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xl">f</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
