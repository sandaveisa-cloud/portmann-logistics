'use client';
import { useTranslations } from 'next-intl';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Award } from 'lucide-react';

export default function AboutPage() {
    const t = useTranslations('Navigation');
    const tAbout = useTranslations('About');
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <div className="w-full">
            {/* Page Banner */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-[url('/about-banner.png')] bg-cover bg-center parallax"></div>
                <div className="absolute inset-0 bg-primary/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">{t('about')}</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Adazi Base */}
                <section className="mb-16">
                    <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-xl relative group">
                        <div className="absolute inset-0 bg-[url('/adazi-base.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                            <h3 className="text-white text-3xl md:text-4xl font-black mb-3">{tAbout('baseTitle')}</h3>
                            <p className="text-gray-300 max-w-2xl text-lg md:text-xl font-semibold">{tAbout('baseDesc')}</p>
                        </div>
                    </div>
                </section>

                {/* Vēsture un Flotes Skaitītāji */}
                <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-lg text-gray-700 space-y-6">
                        <h2 className="text-3xl font-bold text-accent mb-6 border-b pb-4">{tAbout('expTitle')}</h2>
                        <p>{tAbout('expP1')}</p>
                        <p>{tAbout('expP2')}</p>
                    </div>

                    <div ref={ref} className="bg-primary text-white p-8 rounded-2xl shadow-xl border-t-8 border-accent grid grid-cols-2 gap-8 text-center p-12">
                        <div>
                            <div className="text-5xl font-black mb-2">
                                {inView ? <CountUp end={26} duration={2.5} /> : '0'}<span className="text-accent">+</span>
                            </div>
                            <p className="text-gray-300 font-semibold uppercase tracking-wider text-sm">{tAbout('stats1')}</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">
                                {inView ? <CountUp end={45} duration={2.5} /> : '0'}
                            </div>
                            <p className="text-gray-300 font-semibold uppercase tracking-wider text-sm">{tAbout('stats2')}</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">
                                {inView ? <CountUp end={100} duration={2.5} /> : '0'}%
                            </div>
                            <p className="text-gray-300 font-semibold uppercase tracking-wider text-sm">{tAbout('stats3')}</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2 flex justify-center items-center">
                                <span className="text-3xl font-extrabold mt-1">€</span>{inView ? <CountUp end={600} duration={2.5} /> : '0'}k
                            </div>
                            <p className="text-gray-300 font-semibold uppercase tracking-wider text-sm">{tAbout('stats4')}</p>
                        </div>
                    </div>
                </section>

                {/* Sertifikātu Download Center */}
                <section id="insurance-cert" className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 border-y border-gray-200">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-primary mb-4">{tAbout('certsTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{tAbout('certsSubtitle')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Cert 1 */}
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{tAbout('cmrTitle')}</h3>
                                <p className="text-gray-500 text-sm mb-6 flex-grow">{tAbout('cmrDesc')}</p>
                                <button className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                                    <Download size={18} /> {tAbout('cmrBtn')}
                                </button>
                            </motion.div>

                            {/* Cert 2 */}
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{tAbout('sqasTitle')}</h3>
                                <p className="text-gray-500 text-sm mb-6 flex-grow">{tAbout('sqasDesc')}</p>
                                <button className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                                    <Download size={18} /> {tAbout('sqasBtn')}
                                </button>
                            </motion.div>

                            {/* Cert 3 */}
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{tAbout('isoTitle')}</h3>
                                <p className="text-gray-500 text-sm mb-6 flex-grow">{tAbout('isoDesc')}</p>
                                <button className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                                    <Download size={18} /> {tAbout('isoBtn')}
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
