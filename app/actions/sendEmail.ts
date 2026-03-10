'use server';

// Tiek izmantots server-side resend izsūtījumam, lai nesalauztu Next.js klienta maršrutus un saglabātu API atslēgas noslēpumā.
// varēs pievienot 
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteEmail(data: any) {
    try {
        console.log("-> 📧 SERVERIS SAŅĒMA [CENAS] PIEPRASĪJUMU:", data);

        // Šeit nāk Resend API kods:
        // await resend.emails.send({
        //   from: 'No-Reply <onboarding@resend.dev>',
        //   to: 'hello@portmann.lv',
        //   subject: `Jauns Cenas Pieprasījums no ${data.name}`,
        //   html: `<p>Klienta numurs: ${data.phone}</p><p>Kravas informācija...</p>`
        // });

        // Simulēta nosūtīšanas aizture
        await new Promise(resolve => setTimeout(resolve, 1000));

        return { success: true };
    } catch (error) {
        console.error("E-pasta kļūda:", error);
        return { success: false, error: "Neizdevās nosūtīt" };
    }
}

export async function sendCareerApplication(data: any) {
    try {
        console.log("-> 📧 SERVERIS SAŅĒMA [KARJERAS] PIETEIKUMU:", data);

        // Simulēta nosūtīšanas aizture
        await new Promise(resolve => setTimeout(resolve, 1000));

        return { success: true };
    } catch (error) {
        console.error("E-pasta kļūda:", error);
        return { success: false, error: "Neizdevās nosūtīt" };
    }
}
