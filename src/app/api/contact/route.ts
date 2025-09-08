import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body);
    
    const { name, email, subject, message } = validatedData;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'contato@jorgenegrelli.com', // Replace with your verified domain
      to: 'jorge@negrelli.dev', // Replace with your email
      subject: `Novo contato: ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <h2 style="color: #dc2626; margin-bottom: 24px;">Nova mensagem de contato</h2>
          
          <div style="background: #f9fafb; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 16px 0; color: #111827;">Detalhes do contato:</h3>
            <p style="margin: 8px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Assunto:</strong> ${subject}</p>
          </div>
          
          <div style="margin-bottom: 24px;">
            <h3 style="margin: 0 0 16px 0; color: #111827;">Mensagem:</h3>
            <div style="background: white; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          </div>
          
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />
          
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Esta mensagem foi enviada através do formulário de contato do site jorgenegrelli.com
          </p>
        </div>
      `,
      replyTo: email,
    });

    if (emailResponse.error) {
      console.error('Erro ao enviar email:', emailResponse.error);
      return NextResponse.json(
        { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro no endpoint de contato:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Dados do formulário inválidos.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}