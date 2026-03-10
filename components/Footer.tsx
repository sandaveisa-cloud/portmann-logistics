'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Truck, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('Navigation');

    return (
        <footer className="bg-primary text-gray-300 py-12 border-t border-secondary/20 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand & Intro */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-extrabold text-white tracking-tight uppercase">PORTMANNS UN KO</span>
                        </Link>
                        <p className="text-base text-gray-300 mb-4 leading-relaxed">
                            Starptautiskie loģistikas un muitas noliktavu pakalpojumi no droša Latvijas partnera. Kopš 1998. gada.
                        </p>
                    </div>

                    {/* Quick Links / SEO */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Ātrās Saites</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-accent transition-colors">{t('home')}</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">{t('services')}</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">{t('about')}</Link></li>
                            <li><Link href="/contacts" className="hover:text-accent transition-colors">{t('contacts')}</Link></li>
                        </ul>
                    </div>

                    {/* Specifiskie SEO Keywords / Info */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Noderīga Informācija</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services#incoterms" className="hover:text-accent transition-colors" title="Starptautiskie tirdzniecības noteikumi">Incoterms atsauces</Link></li>
                            <li><Link href="/services#customs" className="hover:text-accent transition-colors" title="Muitas klasifikators">Muitas kodi (TN VED)</Link></li>
                            <li><Link href="/about#insurance-cert" className="hover:text-accent transition-colors" title="Bīstamās kravas drošība">Kravu apdrošināšana (CMR)</Link></li>
                        </ul>
                    </div>

                    {/* Contact Minified */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Saziņa</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-accent" />
                                <span>+371 29 123 456</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-accent" />
                                <a href="mailto:info@portmann.lv" className="hover:text-white">info@portmann.lv</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="text-accent mt-1" />
                                <span>Muižas iela 11, Ādaži,<br />LV-2164, Latvija</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-600/50 mt-12 pt-8 text-center text-sm text-gray-300">
                    © {new Date().getFullYear()} SIA "PORTMANNS UN KO". Visas tiesības aizsargātas. Izstrādāts Next.js ekosistēmā.
                </div>
            </div>
        </footer>
    );
}
