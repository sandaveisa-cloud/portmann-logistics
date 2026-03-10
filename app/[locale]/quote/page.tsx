'use client';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
// import Autocomplete from 'react-google-autocomplete'; // Tiks aktivizēts, kad klients iedos Api atslēgu

export default function QuotePage() {
    const t = useTranslations('Navigation');
    const tQuote = useTranslations('Quote');

    const quoteSchema = z.object({
        loadingPlace: z.string().min(2, tQuote('errLoad')),
        unloadingPlace: z.string().min(2, tQuote('errUnload')),
        weight: z.string().min(1, tQuote('errWeight')),
        dimensions: z.string().min(1, tQuote('errDim')),
        cargoType: z.enum(['Standarta', 'ADR', 'Temperatūras režīms']),
        adrClass: z.string().optional(),
        unNumber: z.string().optional(),
        tnVed: z.string().optional(),
        name: z.string().min(2, tQuote('errName')),
        phone: z.string().min(5, tQuote('errPhone')),
        email: z.string().email(tQuote('errEmail')),
    });

    type QuoteFormValues = z.infer<typeof quoteSchema>;

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
        alert(tQuote('successAlert'));
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-primary mb-4">{tQuote('title')}</h1>
                <p className="text-xl text-gray-600" dangerouslySetInnerHTML={{ __html: tQuote('subtitle') }}></p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                    {/* 1. Kravas Maršruts */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">{tQuote('routeTitle')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('loadingPlace')}</label>
                                <input {...register("loadingPlace")} type="text" className={`w-full border ${errors.loadingPlace ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:ring-primary focus:border-primary`} placeholder={tQuote('loadingPlaceholder')} />
                                {errors.loadingPlace && <p className="text-red-500 text-xs mt-1">{errors.loadingPlace.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('unloadingPlace')}</label>
                                <input {...register("unloadingPlace")} type="text" className={`w-full border ${errors.unloadingPlace ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:ring-primary focus:border-primary`} placeholder={tQuote('unloadingPlaceholder')} />
                                {errors.unloadingPlace && <p className="text-red-500 text-xs mt-1">{errors.unloadingPlace.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* 2. Kravas Parametri un Specifika */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">{tQuote('paramsTitle')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('weight')}</label>
                                <input {...register("weight")} type="text" className={`w-full border ${errors.weight ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} placeholder={tQuote('weightPlaceholder')} />
                                {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('dimensions')}</label>
                                <input {...register("dimensions")} type="text" className={`w-full border ${errors.dimensions ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} placeholder={tQuote('dimensionsPlaceholder')} />
                                {errors.dimensions && <p className="text-red-500 text-xs mt-1">{errors.dimensions.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('cargoType')}</label>
                                <select {...register("cargoType")} className="w-full border border-gray-300 rounded-md p-3 bg-white">
                                    <option value="Standarta">{tQuote('ctStandard')}</option>
                                    <option value="ADR">{tQuote('ctAdr')}</option>
                                    <option value="Temperatūras režīms">{tQuote('ctTemp')}</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('tnved')}</label>
                            <input {...register("tnVed")} type="text" className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-400" placeholder={tQuote('tnvedPlaceholder')} />
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
                                        {tQuote('adrSpec')}
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1">{tQuote('adrClass')}</label>
                                            <input {...register("adrClass")} type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white" placeholder={tQuote('adrClassPlaceholder')} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1">{tQuote('unNumber')}</label>
                                            <input {...register("unNumber")} type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white" placeholder={tQuote('unNumberPlaceholder')} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* 3. Klienta Dati */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">{tQuote('contactTitle')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('name')}</label>
                                <input {...register("name")} type="text" className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('phone')}</label>
                                <input {...register("phone")} type="tel" className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{tQuote('email')}</label>
                                <input {...register("email")} type="email" className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-3`} />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4 text-center">
                        <button disabled={isSubmitting} type="submit" className="btn-accent w-full md:w-auto px-12 py-4 text-xl disabled:opacity-50">
                            {isSubmitting ? tQuote('submitting') : tQuote('submitBtn')}
                        </button>
                        <p className="text-xs text-gray-500 mt-4">{tQuote('privacyMsg')}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
