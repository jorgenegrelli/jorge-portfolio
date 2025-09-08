'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar mensagem');
      }

      setStatus('success');
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro desconhecido');
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              placeholder="Seu nome completo"
              {...register('name')}
              disabled={isLoading}
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register('email')}
              disabled={isLoading}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Assunto *</Label>
          <Input
            id="subject"
            placeholder="Sobre o que você gostaria de falar?"
            {...register('subject')}
            disabled={isLoading}
            className={errors.subject ? 'border-destructive' : ''}
          />
          {errors.subject && (
            <p className="text-sm text-destructive">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensagem *</Label>
          <Textarea
            id="message"
            placeholder="Descreva seu projeto, ideia ou como posso te ajudar..."
            rows={6}
            {...register('message')}
            disabled={isLoading}
            className={errors.message ? 'border-destructive' : ''}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        {/* Status Messages */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
          >
            <CheckCircle className="w-5 h-5" />
            <p className="font-medium">Mensagem enviada com sucesso!</p>
          </motion.div>
        )}

        {isError && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
          >
            <AlertCircle className="w-5 h-5" />
            <div>
              <p className="font-medium">Erro ao enviar mensagem</p>
              <p className="text-sm">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        <Button 
          type="submit" 
          size="lg" 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 w-5 h-5" />
              Enviar Mensagem
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          * Campos obrigatórios. Responderei em até 24 horas.
        </p>
      </form>
    </Card>
  );
}