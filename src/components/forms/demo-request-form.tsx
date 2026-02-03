'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { demoRequestSchema, type DemoRequestFormData, catalogSizeOptions } from '@/lib/schemas';
import { submitDemoRequest } from '@/actions/submit-demo-request';
import { Button, Input, Textarea, Select, Checkbox } from '@/components/ui';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Kontakt', description: 'Ihre Daten' },
  { id: 2, title: 'Geschäft', description: 'Ihr Laden' },
  { id: 3, title: 'Details', description: 'Mehr über Sie' },
];

export function DemoRequestForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<DemoRequestFormData>({
    resolver: zodResolver(demoRequestSchema),
    mode: 'onBlur',
    defaultValues: {
      gdprConsent: false,
    },
  });

  const nextStep = async () => {
    const fieldsToValidate: (keyof DemoRequestFormData)[][] = [
      ['firstName', 'lastName', 'email', 'phone'],
      ['storeName', 'storeCity', 'catalogSize'],
      ['currentSystem', 'message', 'gdprConsent'],
    ];

    const isValid = await trigger(fieldsToValidate[currentStep - 1]);
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: DemoRequestFormData) => {
    setSubmitError(null);
    startTransition(async () => {
      const result = await submitDemoRequest(data);
      if (result.success && result.data?.redirectUrl) {
        router.push(result.data.redirectUrl);
      } else {
        setSubmitError(result.message);
      }
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300',
                  currentStep > step.id
                    ? 'bg-gold text-vinyl-black'
                    : currentStep === step.id
                    ? 'bg-gold/20 text-gold border-2 border-gold'
                    : 'bg-vinyl-black/50 text-warm-gray border border-off-white/10'
                )}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              <div className="mt-2 text-center hidden sm:block">
                <div
                  className={cn(
                    'text-sm font-medium',
                    currentStep >= step.id ? 'text-off-white' : 'text-warm-gray'
                  )}
                >
                  {step.title}
                </div>
                <div className="text-xs text-warm-gray">{step.description}</div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'w-12 sm:w-20 h-0.5 mx-2 transition-colors duration-300',
                  currentStep > step.id ? 'bg-gold' : 'bg-off-white/10'
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="card-3d p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Contact */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Vorname"
                  {...register('firstName')}
                  error={errors.firstName?.message}
                  placeholder="Max"
                  required
                />
                <Input
                  label="Nachname"
                  {...register('lastName')}
                  error={errors.lastName?.message}
                  placeholder="Mustermann"
                  required
                />
              </div>
              <Input
                label="E-Mail"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                placeholder="max@schallplattenladen.de"
                hint="Geschäftliche E-Mail-Adressen werden bevorzugt"
                required
              />
              <Input
                label="Telefon"
                type="tel"
                {...register('phone')}
                error={errors.phone?.message}
                placeholder="+49 30 12345678"
                hint="Optional, für schnellere Kontaktaufnahme"
              />
            </motion.div>
          )}

          {/* Step 2: Business */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <Input
                label="Name des Geschäfts"
                {...register('storeName')}
                error={errors.storeName?.message}
                placeholder="Vinyl Dreams Berlin"
                required
              />
              <Input
                label="Stadt"
                {...register('storeCity')}
                error={errors.storeCity?.message}
                placeholder="Berlin"
                required
              />
              <Select
                label="Kataloggröße"
                {...register('catalogSize')}
                error={errors.catalogSize?.message}
                options={catalogSizeOptions.map((o) => ({
                  value: o.value,
                  label: o.label,
                }))}
                placeholder="Wählen Sie eine Option"
                required
              />
            </motion.div>
          )}

          {/* Step 3: Details */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <Input
                label="Aktuelle Lösung"
                {...register('currentSystem')}
                error={errors.currentSystem?.message}
                placeholder="z.B. Excel, Papier, anderes System"
                hint="Wie verwalten Sie aktuell Ihren Bestand?"
              />
              <Textarea
                label="Nachricht"
                {...register('message')}
                error={errors.message?.message}
                placeholder="Erzählen Sie uns von Ihrem Laden und Ihren Anforderungen..."
                hint="Optional, aber hilfreich für eine maßgeschneiderte Demo"
              />
              <Checkbox
                label={
                  <>
                    Ich stimme der{' '}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      className="text-gold hover:underline"
                    >
                      Datenschutzerklärung
                    </a>{' '}
                    zu und erkläre mich damit einverstanden, dass Q-Records meine
                    Daten zur Bearbeitung meiner Anfrage speichert und mich
                    kontaktieren darf.
                  </>
                }
                {...register('gdprConsent')}
                error={errors.gdprConsent?.message}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error message */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-400">{submitError}</p>
          </motion.div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-off-white/10">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 1}
            leftIcon={<ArrowLeft size={18} />}
          >
            Zurück
          </Button>

          {currentStep < 3 ? (
            <Button
              type="button"
              variant="primary"
              onClick={nextStep}
              rightIcon={<ArrowRight size={18} />}
            >
              Weiter
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              isLoading={isPending}
              rightIcon={!isPending && <ArrowRight size={18} />}
            >
              {isPending ? 'Wird gesendet...' : 'Demo anfragen'}
            </Button>
          )}
        </div>
      </form>

      {/* Trust indicators */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-warm-gray">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          SSL-verschlüsselt
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          DSGVO-konform
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Antwort in 24h
        </div>
      </div>
    </div>
  );
}
