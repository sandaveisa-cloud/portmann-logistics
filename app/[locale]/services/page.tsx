import { useTranslations } from 'next-intl';

export default function ServicesPage() {
    const t = useTranslations('Navigation'); // vēlāk izveidosim Services JSON

    return (
        <div className="w-full">
            {/* Page Banner */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden shadow-md mb-12">
                <div className="absolute inset-0 bg-[url('/services-banner.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-primary/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">{t('services')}</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* 6 Bloku ADR struktūra */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-accent mb-6 border-b pb-4">Bīstamo Kravu (ADR) Pārvadājumi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">1. Klasifikācija un Tipi</h3>
                            <p>Pārvadājam visas 9 bīstamības klases, ieskaitot uzliesmojošas vielas un ķīmiju.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">2. Pieredze un Sertifikācija</h3>
                            <p>Mūsu šoferiem ir starptautiski ADR sertifikāti un stāžs drošā pārvadāšanā.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">3. Specializētais Autoparks</h3>
                            <p>Pielāgotas cisternas, regulāras tehniskās pārbaudes ADR prasībām.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">4. Drošība un Apdrošināšana</h3>
                            <p>Papildus CMR apdrošināšanai piedāvājam spec-risku segumu.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">5. Muitas un Dokumenti</h3>
                            <p>Sarežģītu maršrutu saskaņošana un TN VED kodu apstrāde.</p>
                        </div>
                        <div className="card bg-blue-50 border-primary">
                            <h3 className="text-xl font-bold mb-3 text-primary">6. Cenas Pieprasījums</h3>
                            <p className="mb-4">Aprēķiniet ADR kravas izmaksas tūlītēji.</p>
                            <button className="btn-accent w-full text-center">Uzzināt cenu</button>
                        </div>
                    </div>
                </section>

                {/* Citu pakalpojumu saraksts */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-6">Citi Pakalpojumi</h2>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                        <li>Sauszemes kravas Eiropā (EURO-6, MEGA treileri)</li>
                        <li>Jūras kravu ekspedīcija</li>
                        <li>Noliktavas un muitas noliktavas pakalpojumi Ādažos</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
