import { Card } from '@/components/ui/card';
import featureIQ from '@/assets/feature-iq.jpg';
import featureFocus from '@/assets/feature-focus.png';
import featureProgress from '@/assets/feature-progress.jpg';
import Image from 'next/image';

const features = [
  {
    icon: featureIQ,
    title: 'Latihan Logika Terstruktur',
    description:
      'Kumpulan soal logika dengan berbagai tingkat kesulitan untuk melatih cara berpikir kritis dan sistematis.',
  },
  {
    icon: featureFocus,
    title: 'Asah Fokus & Konsentrasi',
    description:
      'Kerjakan latihan logika yang membantu menjaga fokus dan meningkatkan daya konsentrasi kamu.',
  },
  {
    icon: featureIQ,
    title: 'Tantangan Bertahap',
    description:
      'Soal-soal disusun mulai dari dasar hingga tingkat lanjut, sehingga Anda bisa belajar dan berkembang secara bertahap.',
  },
  {
    icon: featureFocus,
    title: 'Beragam Tipe Soal',
    description:
      'Nikmati variasi soal logika, mulai dari pola, penalaran, hingga pemecahan masalah sehari-hari.',
  },
  {
    icon: featureProgress,
    title: 'Akses Selamanya',
    description:
      'Sekali bayar, nikmati semua latihan tanpa batas waktu dan tanpa biaya tambahan.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mengapa Talimantik Berbeda?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bukan sekadar soal latihan biasa. Talimantik menyajikan beragam
            tantangan logika yang dirancang untuk mengasah cara berpikir kritis,
            melatih konsistensi, dan meningkatkan kemampuan pemecahan masalah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card border shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
