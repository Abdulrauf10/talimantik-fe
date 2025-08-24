import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Bagaimana cara kerja Talimantik?',
    answer:
      'Talimantik menyediakan latihan numerik, logika, dan spasial dalam bentuk soal latihan. Pengguna bisa mengerjakan soal secara online atau mencetaknya dalam format PDF, kemudian memeriksa hasil dengan kunci jawaban yang tersedia.',
  },
  {
    question: 'Mengapa hanya ada satu paket harga?',
    answer:
      'Kami ingin membuatnya sederhana. Semua latihan bisa diakses dengan sekali bayar Rp 10.000, tanpa paket tambahan atau biaya tersembunyi.',
  },
  {
    question: 'Apakah aplikasi ini bisa meningkatkan IQ saya?',
    answer:
      'Talimantik tidak dirancang untuk mengukur atau meningkatkan IQ. Tujuan utama aplikasi ini adalah memberikan latihan soal agar Anda lebih terbiasa menghadapi tes numerik, logika, dan spasial.',
  },
  {
    question: 'Apakah pembayaran saya aman?',
    answer:
      'Ya. Pembayaran diproses melalui penyedia layanan pembayaran yang aman. Kami tidak menyimpan data kartu atau informasi sensitif Anda.',
  },
  {
    question: 'Bagaimana jika saya tidak puas?',
    answer:
      'Jika dalam 30 hari Anda merasa aplikasi ini tidak sesuai dengan kebutuhan, Anda bisa meminta refund penuh dengan menghubungi tim support kami.',
  },
  {
    question: 'Apakah akan ada biaya tambahan nanti?',
    answer:
      'Tidak. Cukup sekali bayar Rp 10.000, dan Anda akan mendapat akses permanen ke semua latihan dan kunci jawaban.',
  },
  {
    question: 'Bisakah digunakan di beberapa perangkat?',
    answer:
      'Ya. Anda bisa login dengan akun yang sama di smartphone, tablet, atau komputer.',
  },
  {
    question: 'Apakah ada batas waktu untuk mengakses soal?',
    answer:
      'Tidak ada batas waktu. Setelah membeli, Anda bisa mengakses dan mencetak soal kapan saja sesuai kebutuhan.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Punya pertanyaan tentang Talimantik? Temukan jawabannya di sini.
            Jika belum terjawab, hubungi tim support kami yang siap membantu
            24/7.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-0 shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
