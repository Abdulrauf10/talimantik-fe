import Link from 'next/link';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Asah Potensi Logika Anda
            <br />
            <span className="text-primary-glow">
              Hanya Rp10.000 — Akses Selamanya!
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Latihan logika sederhana namun menantang untuk melatih fokus,
            konsistensi, dan cara berpikir kritis. Mulai sekarang, investasi
            kecil untuk manfaat jangka panjang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href={
                'https://app.sandbox.midtrans.com/payment-links/1757154275073'
              }
              target="_blank"
            >
              <Button
                variant="secondary"
                size="lg"
                className=" px-10 py-6 h-auto text-xl bg-white text-primary hover:bg-white/90"
              >
                Beli Sekarang - Rp 10.000
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className=" px-10 py-6 h-auto text-xl bg-white text-primary hover:bg-white/90"
            >
              Lihat demo gratis
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white font-semibold">Sekali Bayar</div>
              <div className="text-white/80 text-sm">
                Akses selamanya, tanpa subscription
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-white font-semibold">Terbukti Efektif</div>
              <div className="text-white/80 text-sm">
                92% pengguna rasakan peningkatan
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <div className="text-white font-semibold">Garansi 30 Hari</div>
              <div className="text-white/80 text-sm">
                Uang kembali 100% jika tidak puas
              </div>
            </div>
          </div>

          <div className="mt-12 text-white/80 text-sm space-y-1">
            <p>✅ Pembayaran aman dengan enkripsi SSL</p>
            <p>✅ Akses instan setelah pembayaran</p>
            <p>✅ Support 24/7 dalam Bahasa Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
