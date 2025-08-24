import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pricingPlan = {
  name: 'Talimantik',
  price: 'Rp 10.000',
  period: 'sekali bayar',
  description: 'Akses lengkap selamanya tanpa biaya tambahan',
  features: [
    '50+ soal logika menantang',
    'Tingkat kesulitan bertahap',
    'Beragam tipe soal logika',
    'Latihan untuk fokus & konsentrasi',
    'Melatih berpikir kritis & sistematis',
    'Sekali bayar, akses selamanya',
    'Update soal gratis selamanya',
  ],

  cta: 'Beli Sekarang - Rp 10.000',
  highlight: '💡 Investasi terbaik untuk otak Anda!',
};

const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Harga Sederhana & Terjangkau
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tanpa langganan, tanpa biaya tambahan. Sekali bayar, akses
            selamanya.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="relative p-8 shadow-xl border-2 border-primary">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
              {pricingPlan.highlight}
            </Badge>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {pricingPlan.name}
              </h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">
                  {pricingPlan.price}
                </span>
                <span className="text-muted-foreground ml-2">
                  {pricingPlan.period}
                </span>
              </div>
              <p className="text-muted-foreground">{pricingPlan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {pricingPlan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <span className="text-primary mr-3 text-lg">✓</span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="default"
              size="lg"
              className="w-full text-lg py-6 h-auto mb-4"
            >
              {pricingPlan.cta}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">💳 Pembayaran aman dengan enkripsi SSL</p>
              <p>🔄 30-hari money-back guarantee</p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Tanpa langganan</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Tanpa biaya tambahan</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Akses selamanya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
