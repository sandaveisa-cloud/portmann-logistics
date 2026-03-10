import { useTranslations } from 'next-intl';

export default function ContactsPage() {
    const t = useTranslations('Navigation');

    return (
        <div className="w-full">
            {/* Page Banner */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden shadow-md mb-12">
                <div className="absolute inset-0 bg-[url('/contacts-banner.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-primary/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">{t('contacts')}</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Adreses un rekvizīti */}
                    <div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-primary">SIA "PORTMANNS UN KO"</h3>
                            <div className="space-y-4 text-lg text-gray-700">
                                <p><strong>Biroja Adrese:</strong><br />Muižas iela 11, Ādaži, Ādažu nov., LV-2164</p>
                                <p><strong>Noliktava:</strong><br />Muižas iela 11a, Ādaži</p>
                                <p><strong>Reģistrācijas Nr:</strong> 40003399086</p>
                            </div>
                        </div>

                        {/* Personificēti kontakti kā norādīts analīze */}
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Operatīvie Kontakti</h3>
                            <p className="text-sm text-gray-500 mb-6">Sazinieties ar savu tiešo menedžeri ātrākai apkalpošanai.</p>

                            <div className="space-y-6">
                                <div className="border-b pb-4">
                                    <p className="font-bold text-lg">Sauszemes Kravu Nodaļa (Auto)</p>
                                    <a href="tel:+37129123456" className="text-accent hover:underline text-lg font-semibold block">+371 29 123 456</a>
                                    <a href="mailto:auto@portmann.lv" className="text-gray-600 hover:text-primary">auto@portmann.lv</a>
                                    {/* WhatsApp badge Placeholder */}
                                    <span className="inline-block mt-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">WhatsApp Pieejams</span>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Muitas un Noliktavas Pakalpojumi</p>
                                    <a href="tel:+37129123457" className="text-accent hover:underline text-lg font-semibold block">+371 29 123 457</a>
                                    <a href="mailto:customs@portmann.lv" className="text-gray-600 hover:text-primary">customs@portmann.lv</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-xl min-h-[400px] flex items-center justify-center text-gray-500">
                        [Google Maps Integrācija Teiksies Šeit]
                    </div>
                </div>
            </div>
        </div>
    );
}
