import { z } from 'zod';

export const demoRequestSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Vorname muss mindestens 2 Zeichen haben')
    .max(50, 'Vorname darf maximal 50 Zeichen haben'),
  lastName: z
    .string()
    .min(2, 'Nachname muss mindestens 2 Zeichen haben')
    .max(50, 'Nachname darf maximal 50 Zeichen haben'),
  email: z
    .string()
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .refine(
      (email) => {
        const domain = email.split('@')[1]?.toLowerCase();
        return domain && domain.length > 0;
      },
      { message: 'Ungültige E-Mail-Domain' }
    ),
  phone: z
    .string()
    .regex(
      /^(\+49|0049|0)?[1-9]\d{1,14}$/,
      'Bitte geben Sie eine gültige deutsche Telefonnummer ein'
    )
    .optional()
    .or(z.literal('')),
  storeName: z
    .string()
    .min(2, 'Geschäftsname muss mindestens 2 Zeichen haben')
    .max(100, 'Geschäftsname darf maximal 100 Zeichen haben'),
  storeCity: z
    .string()
    .min(2, 'Stadt muss mindestens 2 Zeichen haben')
    .max(100, 'Stadt darf maximal 100 Zeichen haben'),
  catalogSize: z.enum(['under_1000', '1000_5000', '5000_20000', 'over_20000'], {
    message: 'Bitte wählen Sie eine Kataloggröße',
  }),
  currentSystem: z
    .string()
    .max(200, 'Aktuelle Lösung darf maximal 200 Zeichen haben')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .max(1000, 'Nachricht darf maximal 1000 Zeichen haben')
    .optional()
    .or(z.literal('')),
  gdprConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Bitte stimmen Sie der Datenschutzerklärung zu',
    }),
});

export type DemoRequestFormData = z.infer<typeof demoRequestSchema>;

export const catalogSizeOptions = [
  { value: 'under_1000', label: 'Unter 1.000 Artikel' },
  { value: '1000_5000', label: '1.000 - 5.000 Artikel' },
  { value: '5000_20000', label: '5.000 - 20.000 Artikel' },
  { value: 'over_20000', label: 'Über 20.000 Artikel' },
] as const;

export const contactSchema = z.object({
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  subject: z
    .string()
    .min(5, 'Betreff muss mindestens 5 Zeichen haben')
    .max(100, 'Betreff darf maximal 100 Zeichen haben'),
  message: z
    .string()
    .min(20, 'Nachricht muss mindestens 20 Zeichen haben')
    .max(2000, 'Nachricht darf maximal 2000 Zeichen haben'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
