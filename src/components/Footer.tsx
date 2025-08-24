const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-glow">
              Talimantik
            </h3>
            <p className="text-background/80 leading-relaxed">
              Aplikasi pelatihan otak terdepan untuk menghadapi tes numerik,
              logika, dan spasial.
            </p>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a
                  href="mailto:talimantik.info@gmail.com"
                  className="hover:text-primary-glow transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6287749122036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-glow transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/talimantik"
                className="text-background/60 hover:text-primary-glow transition-colors"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@professor.generalist"
                className="text-background/60 hover:text-primary-glow transition-colors"
                target="_blank"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2025 Talimantik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
