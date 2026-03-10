'use client';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function CareersPage() {
    const t = useTranslations('Navigation');
    const tCar = useTranslations('Careers');
    const [isSuccess, setIsSuccess] = useState(false);

    const driverSchema = z.object({
        fullName: z.string().min(2, tCar('errName')),
        phone: z.string().min(5, tCar('errPhone')),
        categories: z.array(z.string()).min(1, tCar('errCat')),
        experienceYears: z.string().min(1, tCar('errExp')),
        hasAdr: z.enum(['Jā', 'Nē']),
        message: z.string().optional(),
    });

    type DriverFormValues = z.infer<typeof driverSchema>;

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<DriverFormValues>({
        resolver: zodResolver(driverSchema),
        defaultValues: {
            hasAdr: 'Nē',
            categories: ['CE']
        }
    });

    const onSubmit = async (data: DriverFormValues) => {
        console.log("Driver application:", data);
        // TODO: Send data to HR email
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
    };

    return (
        <div className="w-full">
            {/* Page Banner */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden shadow-md mb-8">
                <div className="absolute inset-0 bg-[url('/careers-banner.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gray-900/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase mb-4">{tCar('title')}</h1>
                    <p className="text-xl text-gray-200" dangerouslySetInnerHTML={{ __html: tCar('subtitle') }}></p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100">

                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-6"
                            >

                                {/* Pamatinformācija */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">{tCar('fullName')}</label>
                                        <input {...register("fullName")} type="text" className={`w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 text-lg focus:ring-primary focus:border-primary`} placeholder={tCar('fullNamePlaceholder')} />
                                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">{tCar('phone')}</label>
                                        <input {...register("phone")} type="tel" className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 text-lg focus:ring-primary focus:border-primary`} placeholder={tCar('phonePlaceholder')} />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                    </div>
                                </div>

                                {/* Kvalifikācija */}
                                <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-100 space-y-5">
                                    <h3 className="font-bold text-primary mb-2">{tCar('qualification')}</h3>

                                    {/* Pieredze */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">{tCar('experience')}</label>
                                        <select {...register("experienceYears")} className="w-full border border-gray-300 rounded-lg p-3 bg-white text-lg">
                                            <option value="">{tCar('selectOption')}</option>
                                            <option value="Mazāk par 1 gadu">{tCar('exp1')}</option>
                                            <option value="1-3 gadi">{tCar('exp2')}</option>
                                            <option value="3-5 gadi">{tCar('exp3')}</option>
                                            <option value="Vairāk par 5 gadiem">{tCar('exp4')}</option>
                                        </select>
                                        {errors.experienceYears && <p className="text-red-500 text-xs mt-1">{errors.experienceYears.message}</p>}
                                    </div>

                                    {/* ADR un Kategorijas divās kolonnās mobilajā */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">{tCar('adrCert')}</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center gap-2 cursor-pointer p-2 border border-gray-200 rounded-lg w-full justify-center bg-white hover:border-primary transition-colors">
                                                    <input {...register("hasAdr")} type="radio" value="Jā" className="w-4 h-4 text-primary focus:ring-primary" />
                                                    <span className="font-bold">{tCar('yes')}</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer p-2 border border-gray-200 rounded-lg w-full justify-center bg-white hover:border-primary transition-colors">
                                                    <input {...register("hasAdr")} type="radio" value="Nē" className="w-4 h-4 text-primary focus:ring-primary" />
                                                    <span className="font-bold">{tCar('no')}</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">{tCar('categories')}</label>
                                            <div className="flex gap-3">
                                                <label className="flex items-center gap-2">
                                                    <input {...register("categories")} type="checkbox" value="C" className="w-4 h-4 rounded text-primary focus:ring-primary" /> C
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <input {...register("categories")} type="checkbox" value="CE" className="w-4 h-4 rounded text-primary focus:ring-primary" /> CE
                                                </label>
                                            </div>
                                            {errors.categories && <p className="text-red-500 text-xs mt-1">{errors.categories.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Papildus */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">{tCar('messageLabel')}</label>
                                    <textarea {...register("message")} rows={3} className="w-full border border-gray-300 rounded-lg p-3 text-base focus:ring-primary focus:border-primary" placeholder={tCar('messagePlaceholder')} />
                                </div>

                                {/* Fake Upload Button for UX */}
                                <button type="button" className="w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition-colors font-medium">
                                    <Upload size={20} />
                                    {tCar('cvBtn')}
                                </button>

                                {/* Submit */}
                                <div className="pt-4">
                                    <button disabled={isSubmitting} type="submit" className="btn-accent w-full py-4 text-xl rounded-xl font-bold shadow-lg shadow-accent/30 disabled:opacity-50 flex justify-center">
                                        {isSubmitting ? tCar('submitting') : tCar('submitBtn')}
                                    </button>
                                    <p className="text-xs text-center text-gray-400 mt-4">{tCar('privacyMsg')}</p>
                                </div>

                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12 space-y-6"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h2 className="text-3xl font-extrabold text-gray-900">{tCar('successTitle')}</h2>
                                <p className="text-lg text-gray-600 max-w-md mx-auto">
                                    {tCar('successDesc')}
                                </p>
                                <button type="button" onClick={() => setIsSuccess(false)} className="mt-8 text-primary font-bold hover:underline">
                                    {tCar('sendAnother')}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
