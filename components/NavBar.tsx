'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, Truck, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Valodu pārslēgšana
    const locales = ['lv', 'en', 'ru', 'de'];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">

                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/portmann-logo.png" alt="Portmann Logo" width={220} height={60} className="w-auto h-12 sm:h-14 object-contain" priority />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('home')}
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('services')}
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('about')}
                        </Link>
                        <Link href="/careers" className="text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('careers')}
                        </Link>
                        <Link href="/contacts" className="text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('contacts')}
                        </Link>

                        {/* Language Switcher Dropdown Placeholder */}
                        <div className="flex gap-2 text-sm font-semibold uppercase text-gray-600">
                            {locales.map((l) => (
                                <Link
                                    key={l}
                                    href={pathname}
                                    locale={l}
                                    className="hover:text-primary transition-colors cursor-pointer"
                                >
                                    {l}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link href="/quote" className="btn-accent px-5 py-2 rounded-lg font-bold">
                            <span className="hidden lg:inline">Cenas Pieprasījums</span>
                            <span className="lg:hidden">Cena</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden gap-4">
                        {/* Mobile CTA */}
                        <Link href="/quote" onClick={() => setIsOpen(false)} className="btn-accent px-4 py-2 text-sm rounded-lg font-bold">
                            Pieprasīt Cenu
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
                        <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 border-l-4 border-transparent hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors">
                            {t('home')}
                        </Link>
                        <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 border-l-4 border-transparent hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors">
                            {t('services')}
                        </Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 border-l-4 border-transparent hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors">
                            {t('about')}
                        </Link>
                        <Link href="/careers" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 border-l-4 border-transparent hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors">
                            {t('careers')}
                        </Link>
                        <Link href="/contacts" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 border-l-4 border-transparent hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors">
                            {t('contacts')}
                        </Link>

                        <div className="px-3 py-3 mt-4 border-t border-gray-100 flex gap-4 uppercase font-bold text-gray-500">
                            {locales.map((l) => (
                                <Link key={l} href={pathname} locale={l} onClick={() => setIsOpen(false)}>
                                    {l}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
