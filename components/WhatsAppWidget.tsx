'use client';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WhatsAppWidget() {
    const t = useTranslations('Navigation'); // Var izmantot vispārīgu t() ja nepieciešams

    // Paraugs numuram
    const whatsappNumber = "+37120000000";
    const message = "Sveiki! Es vēlos uzzināt vairāk par Portmanns & Ko pakalpojumiem.";

    const href = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-sm font-semibold text-gray-700 hidden sm:block"
            >
                Vajadzīga palīdzība? Rakstiet mums! <span className="text-xl ml-1">👋</span>
            </motion.div>

            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
            >
                <MessageCircle size={32} />
            </a>
        </motion.div>
    );
}
