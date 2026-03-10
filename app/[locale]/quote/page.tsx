'use client';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
// import Autocomplete from 'react-google-autocomplete'; // Tiks aktivizēts, kad klients iedos Api atslēgu

const quoteSchema = z.object({
    loadingPlace: z.string().min(2, "Nepieciešama iekraušanas vieta"),
    unloadingPlace: z.string().min(2, "Nepieciešama izkraušanas vieta"),
    weight: z.string().min(1, "Norādiet svaru"),
    dimensions: z.string().min(1, "Norādiet izmērus"),
    cargoType: z.enum(['Standarta', 'ADR', 'Temperatūras režīms']),
    adrClass: z.string().optional(),
    unNumber: z.string().optional(),
    tnVed: z.string().optional(),
    name: z.string().min(2, "Norādiet vārdu vai uzņēmumu"),
    phone: z.string().min(5, "Norādiet telefonu"),
    email: z.string().email("Nepareizs e-pasta formāts"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function QuotePage() {
    const t = useTranslations('Navigation');

    const { register, handleSubmit, watch, control, formState: { errors, isSubmitting } } = useForm<QuoteFormValues>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {
            cargoType: 'Standarta'
        }
    });

    const cargoType = watch('cargoType');
    const isADR = cargoType === 'ADR';

    const onSubmit = async (data: QuoteFormValues) => {
        console.log("Form data submitted:", data);
        // Šeit nāk Email Automation loģika
        alert("Cenas pieprasījums nosūtīts!");
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-primary mb-4">Ātrais Cenas Pieprasījums</h1>
                <p className="text-xl text-gray-600">Aizpildiet formu un saņemiet precīzu piedāvājumu <span className="font-bold text-accent">stundas laikā!</span></p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                    {/* 1. Kravas Maršruts */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">1. Kravas Maršruts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Iekraušanas Vieta (Google Places Demo)</label>
                                <input {...register("loadingPlace")} type="text" className={`w-full border ${errors.loadingPlace ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:ring-primary focus:border-primary`} placeholder="Piemēram, Rīga, LV-1055" />
                                {errors.loadingPlace && <p className="text-red-500 text-xs mt-1">{errors.loadingPlace.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Izkraušanas Vieta (Google Places Demo)</label>
                                <input {...register("unloadingPlace")} type="text" className={`w-full border ${errors.unloadingPlace ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:ring-primary focus:border-primary`} placeholder="Piemēram, Berlīne, Vācija" />
                                {errors.unloadingPlace && <p className="text-red-500 text-xs mt-1">{errors.unloadingPlace.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* 2. Kravas Parametri un Specifika */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">2. Kravas Parametri</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Svars (kg / tonnas)</label>
                                <input {...register("weight")} type="text" className={`w-full border ${errors.weight ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} placeholder="Piem. 24t" />
                                {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Izmēri (G x P x A, m)</label>
                                <input {...register("dimensions")} type="text" className={`w-full border ${errors.dimensions ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} placeholder="Piem. 13.6 x 2.45 x 2.7" />
                                {errors.dimensions && <p className="text-red-500 text-xs mt-1">{errors.dimensions.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Kravas Tips</label>
                                <select {...register("cargoType")} className="w-full border border-gray-300 rounded-md p-3 bg-white">
                                    <option value="Standarta">Standarta</option>
                                    <option value="ADR">Bīstamā (ADR)</option>
                                    <option value="Temperatūras režīms">Temperatūras režīms</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Muitas Kods (TN VED - Neobligāti)</label>
                            <input {...register("tnVed")} type="text" className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-400" placeholder="Ja zināms..." />
                        </div>

                        {/* ADR Nosacījuma Formas Lauki (Conditional Logic) */}
                        <AnimatePresence>
                            {isADR && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    className="p-5 bg-orange-50/50 border border-orange-200 rounded-lg overflow-hidden"
                                >
                                    <h4 className="font-bold text-accent mb-3 text-sm uppercase tracking-wide">
                                        ADR Bīstamās Kravas Specifikācija
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1">ADR Klase</label>
                                            <input {...register("adrClass")} type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white" placeholder="Piem. 3 (Uzliesmojoši šķidrumi)" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1">UN Numurs</label>
                                            <input {...register("unNumber")} type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white" placeholder="Piem. UN 1202" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* 3. Klienta Dati */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">3. Kontaktinformācija</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Jūsu Vārds / Uzņēmums</label>
                                <input {...register("name")} type="text" className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Tālrunis (arī WhatsApp)</label>
                                <input {...register("phone")} type="tel" className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">E-pasts</label>
                                <input {...register("email")} type="email" className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4 text-center">
                        <button disabled={isSubmitting} type="submit" className="btn-accent w-full md:w-auto px-12 py-4 text-xl disabled:opacity-50">
                            {isSubmitting ? 'Nosūta Datus...' : 'Saņemt Piedāvājumu'}
                        </button>
                        <p className="text-xs text-gray-500 mt-4">* Droši dati. Mēs ar jums sazināsimies vistuvākajā laikā.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
