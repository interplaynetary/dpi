import { Github, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Free-Association Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-semibold text-xl">Free-Association</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Technology for Better Global Coordination
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://docs.openassociation.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid="link-footer-docs"
                >
                  Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://news.openassociation.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid="link-footer-news"
                >
                  News <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/interplaynetary/free-association" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid="link-footer-github"
                >
                  GitHub <Github className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://free.openassociation.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid="link-footer-demo"
                >
                  Live Demo <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://github.com/interplaynetary/dpi/blob/main/CONTRIBUTING.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-contributing"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/interplaynetary/dpi/blob/main/CODE_OF_CONDUCT.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-conduct"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/interplaynetary/dpi/blob/main/GOVERNANCE.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-governance"
                >
                  Governance
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/interplaynetary/dpi/blob/main/LICENSE.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-license"
                >
                  License (MIT)
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="mailto:info@openassociation.org"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid="link-footer-email-info"
                >
                  info@openassociation.org
                </a>
              </li>
              <li>
                <a 
                  href="mailto:coalition@openassociation.org"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid="link-footer-email-coalition"
                >
                  coalition@openassociation.org
                </a>
              </li>
              <li>
                <a 
                  href="https://opencollective.com/free-association" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid="link-footer-funding"
                >
                  Open Collective <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a 
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Source - MIT License"
              >
                <img 
                  src="https://img.shields.io/badge/Open%20Source-MIT-blue?style=flat-square&logo=opensourceinitiative" 
                  alt="Open Source - MIT License"
                  className="h-5"
                />
              </a>
              
              <a
                href="https://github.com/interplaynetary/free-association"
                target="_blank"
                rel="noopener noreferrer"
                title="Peer-to-Peer Architecture"
              >
                <img 
                  src="https://img.shields.io/badge/P2P-Architecture-purple?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMSAxNy45M2MtMy45NS0uNDktNy0zLjg1LTctNy45MyAwLS42Mi4wOC0xLjIxLjIxLTEuNzlMOSAxNXYxYzAgMS4xLjkgMiAyIDJ2MS45M3ptNi45LTIuNTRjLS4yNi0uODEtMS0xLjM5LTEuOS0xLjM5aC0xdi0zYzAtLjU1LS40NS0xLTEtMUg4di0yaDJjLjU1IDAgMS0uNDUgMS0xVjdoMmMxLjEgMCAyLS45IDItMnYtLjQxYzIuOTMgMS4xOSA1IDQuMDYgNSA3LjQxIDAgMi4wOC0uOCAzLjk3LTIuMSA1LjM5eiIvPjwvc3ZnPg==" 
                  alt="P2P Architecture"
                  className="h-5"
                />
              </a>
              
              <a
                href="https://github.com/interplaynetary/free-association/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Stars"
              >
                <img 
                  src="https://img.shields.io/github/stars/interplaynetary/free-association?style=flat-square&logo=github&color=yellow" 
                  alt="GitHub stars"
                  className="h-5"
                />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 Free Association Coalition</p>
              <span className="hidden md:inline">•</span>
              <a 
                href="https://github.com/interplaynetary/dpi/blob/main/LICENSE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Licensed under MIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
