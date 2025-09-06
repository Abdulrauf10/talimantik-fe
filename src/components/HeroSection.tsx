import { Button } from '@/components/ui/button';
import heroBrain from '@/assets/hero-brain.png';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Tingkatkan IQ & Kekuatan Otak Kamu
            <br />
            <span className="text-primary">Hanya 10.000 Rupiah</span>
            <br />
            Akses Selamanya!
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Latih fokus, memori, dan performa kognitif dengan latihan
            interaktif. Sekali bayar, nikmati akses penuh tanpa biaya tambahan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href={
                'https://app.sandbox.midtrans.com/payment-links/1757154275073'
              }
              target="_blank"
            >
              <Button
                variant="default"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                Mulai Sekarang - Hanya 10rb
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Lihat Demo Gratis
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm">Pengguna Aktif</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">4.8★</div>
              <div className="text-sm">Rating App</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">92%</div>
              <div className="text-sm">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src={heroBrain}
              alt="Pelatihan otak untuk meningkatkan IQ dan fokus mental"
              className="w-full max-w-lg h-auto rounded-2xl shadow-xl"
              width={500}
              height={500}
            />
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
              Sekali Bayar!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
