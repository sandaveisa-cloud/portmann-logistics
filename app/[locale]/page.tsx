import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, ShieldCheck, Globe, Truck, Anchor, Warehouse } from 'lucide-react';

export default function Home() {
  const t = useTranslations('Navigation');
  const tIndex = useTranslations('Index');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-48 flex items-center min-h-[85vh]">
        <div className="absolute inset-0 bg-[url('/daf-adr-hero-bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gray-900/50 sm:bg-gradient-to-r sm:from-gray-900/90 sm:via-gray-900/40 sm:to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center lg:text-left w-full">
          <div className="inline-block bg-accent/20 border border-accent/30 px-5 py-2 rounded-full text-accent font-black tracking-widest uppercase text-xs sm:text-sm mb-8 shadow-sm backdrop-blur-sm">
            {tIndex('trustDesc')}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white leading-tight">
            {tIndex('title')}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mb-12 sm:mb-16 mx-auto lg:mx-0 font-medium">
            {tIndex('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link href="/quote" className="btn-accent px-10 py-4 text-lg sm:text-xl font-extrabold rounded-xl shadow-2xl shadow-accent/40 hover:scale-[1.03] transform transition-all flex justify-center items-center gap-3 group">
              {tIndex('getQuote')}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/services" className="px-10 py-4 text-lg sm:text-xl font-extrabold bg-white/10 text-white backdrop-blur-md border tracking-wide border-white/20 rounded-xl hover:bg-white/20 hover:scale-[1.03] transform transition-all flex justify-center items-center">
              {tIndex('ourServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-white border-b border-gray-100 py-12 relative -mt-8 z-20 max-w-6xl mx-auto rounded-3xl shadow-xl px-8 flex flex-col md:flex-row gap-8 justify-between items-center text-center md:text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl">
            <Globe size={32} />
          </div>
          <div>
            <h3 className="font-extrabold text-lg text-gray-900">{tIndex('trust1Title')}</h3>
            <p className="text-sm text-gray-500 font-medium">{tIndex('trust1Desc')}</p>
          </div>
        </div>
        <div className="hidden md:block w-px h-16 bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-green-50 text-green-600 flex items-center justify-center rounded-2xl">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h3 className="font-extrabold text-lg text-gray-900">{tIndex('trust2Title')}</h3>
            <p className="text-sm text-gray-500 font-medium">{tIndex('trust2Desc')}</p>
          </div>
        </div>
        <div className="hidden md:block w-px h-16 bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-orange-50 text-orange-600 flex items-center justify-center rounded-2xl">
            <Truck size={32} />
          </div>
          <div>
            <h3 className="font-extrabold text-lg text-gray-900">{tIndex('trust3Title')}</h3>
            <p className="text-sm text-gray-500 font-medium">{tIndex('trust3Desc')}</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">{tIndex('servicesTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{tIndex('servicesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group overflow-hidden border-t-4 border-t-transparent hover:border-t-primary flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/daf-land-freight.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col relative">
                <div className="w-16 h-16 bg-white text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-lg border-4 border-gray-50 absolute -top-12 left-8">
                  <Truck size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-4">{tIndex('service1Title')}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{tIndex('service1Desc')}</p>
                <Link href="/services" className="text-primary font-bold flex items-center gap-2 group-hover:text-accent transition-colors mt-auto">
                  {tIndex('service1Btn')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group overflow-hidden border-t-4 border-t-transparent hover:border-t-primary flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/customs_warehouse.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col relative">
                <div className="w-16 h-16 bg-white text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-lg border-4 border-gray-50 absolute -top-12 left-8">
                  <Warehouse size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-4">{tIndex('service2Title')}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{tIndex('service2Desc')}</p>
                <Link href="/services" className="text-primary font-bold flex items-center gap-2 group-hover:text-accent transition-colors mt-auto">
                  {tIndex('service2Btn')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group overflow-hidden border-t-4 border-t-transparent hover:border-t-primary flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/sea_air_freight.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col relative">
                <div className="w-16 h-16 bg-white text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-lg border-4 border-gray-50 absolute -top-12 left-8">
                  <Anchor size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-4">{tIndex('service3Title')}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{tIndex('service3Desc')}</p>
                <Link href="/services" className="text-primary font-bold flex items-center gap-2 group-hover:text-accent transition-colors mt-auto">
                  {tIndex('service3Btn')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
