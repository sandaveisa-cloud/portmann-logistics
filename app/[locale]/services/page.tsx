import { useTranslations } from 'next-intl';

export default function ServicesPage() {
    const t = useTranslations('Navigation');
    const tServ = useTranslations('Services');

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
                    <h2 className="text-3xl font-bold text-accent mb-6 border-b pb-4">{tServ('title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">{tServ('adr1Title')}</h3>
                            <p>{tServ('adr1Desc')}</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">{tServ('adr2Title')}</h3>
                            <p>{tServ('adr2Desc')}</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">{tServ('adr3Title')}</h3>
                            <p>{tServ('adr3Desc')}</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">{tServ('adr4Title')}</h3>
                            <p>{tServ('adr4Desc')}</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3">{tServ('adr5Title')}</h3>
                            <p>{tServ('adr5Desc')}</p>
                        </div>
                        <div className="card bg-blue-50 border-primary">
                            <h3 className="text-xl font-bold mb-3 text-primary">{tServ('adr6Title')}</h3>
                            <p className="mb-4">{tServ('adr6Desc')}</p>
                            <button className="btn-accent w-full text-center">{tServ('adr6Btn')}</button>
                        </div>
                    </div>
                </section>

                {/* Citu pakalpojumu saraksts */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-6">{tServ('otherTitle')}</h2>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                        <li>{tServ('other1')}</li>
                        <li>{tServ('other2')}</li>
                        <li>{tServ('other3')}</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
