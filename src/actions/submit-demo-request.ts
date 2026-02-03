'use server';

import { Resend } from 'resend';
import { demoRequestSchema, type DemoRequestFormData } from '@/lib/schemas';
import type { ActionResponse, AirtableLead } from '@/types';
import { env } from '@/lib/env';

const catalogSizeLabels: Record<string, string> = {
  under_1000: 'Unter 1.000 Artikel',
  '1000_5000': '1.000 - 5.000 Artikel',
  '5000_20000': '5.000 - 20.000 Artikel',
  over_20000: 'Über 20.000 Artikel',
};

async function createAirtableLead(data: DemoRequestFormData): Promise<void> {
  const airtableApiKey = env.airtable.apiKey();
  const airtableBaseId = env.airtable.baseId();
  const tableName = env.airtable.tableName();

  const lead: AirtableLead = {
    fields: {
      'First Name': data.firstName,
      'Last Name': data.lastName,
      Email: data.email,
      Phone: data.phone || undefined,
      'Store Name': data.storeName,
      'Store City': data.storeCity,
      'Catalog Size': catalogSizeLabels[data.catalogSize] || data.catalogSize,
      'Current System': data.currentSystem || undefined,
      Message: data.message || undefined,
      Status: 'Inbound',
      Source: 'Website Demo Request',
      'Created At': new Date().toISOString(),
    },
  };

  const response = await fetch(
    `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(tableName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error('Airtable error:', error);
    throw new Error('Failed to save lead to Airtable');
  }
}

async function sendAdminNotification(data: DemoRequestFormData): Promise<void> {
  const resendApiKey = env.resend.apiKey();
  const fromEmail = env.resend.fromEmail();
  const adminEmail = env.resend.adminEmail();

  const resend = new Resend(resendApiKey);

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #1A1A1A; color: #E0E0E0; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #121212; border-radius: 16px; padding: 32px; border: 1px solid rgba(224, 224, 224, 0.1);">
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #D4AF37, #B8972E); border-radius: 50%; margin: 0 auto 16px;"></div>
          <h1 style="color: #D4AF37; font-size: 24px; margin: 0;">Neue Demo-Anfrage</h1>
        </div>

        <div style="background-color: #1A1A1A; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: #E0E0E0; font-size: 18px; margin: 0 0 16px;">Kontaktdaten</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #A0A0A0; width: 140px;">Name:</td>
              <td style="padding: 8px 0; color: #E0E0E0; font-weight: 600;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #A0A0A0;">E-Mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #D4AF37;">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 8px 0; color: #A0A0A0;">Telefon:</td>
              <td style="padding: 8px 0; color: #E0E0E0;">${data.phone}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="background-color: #1A1A1A; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: #E0E0E0; font-size: 18px; margin: 0 0 16px;">Geschäftsdaten</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #A0A0A0; width: 140px;">Geschäft:</td>
              <td style="padding: 8px 0; color: #E0E0E0; font-weight: 600;">${data.storeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #A0A0A0;">Stadt:</td>
              <td style="padding: 8px 0; color: #E0E0E0;">${data.storeCity}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #A0A0A0;">Kataloggröße:</td>
              <td style="padding: 8px 0; color: #D4AF37; font-weight: 600;">${catalogSizeLabels[data.catalogSize]}</td>
            </tr>
            ${data.currentSystem ? `
            <tr>
              <td style="padding: 8px 0; color: #A0A0A0;">Aktuelle Lösung:</td>
              <td style="padding: 8px 0; color: #E0E0E0;">${data.currentSystem}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        ${data.message ? `
        <div style="background-color: #1A1A1A; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: #E0E0E0; font-size: 18px; margin: 0 0 16px;">Nachricht</h2>
          <p style="color: #E0E0E0; margin: 0; line-height: 1.6;">${data.message}</p>
        </div>
        ` : ''}

        <div style="text-align: center; padding-top: 16px;">
          <a href="https://airtable.com" style="display: inline-block; background: linear-gradient(135deg, #D4AF37, #B8972E); color: #1A1A1A; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600;">
            In Airtable öffnen
          </a>
        </div>
      </div>
    </body>
    </html>
  `;

  await resend.emails.send({
    from: fromEmail,
    to: adminEmail,
    subject: `[High-Value Lead] Neue Demo-Anfrage: ${data.storeName}`,
    html,
  });
}

async function sendUserConfirmation(data: DemoRequestFormData): Promise<void> {
  const resendApiKey = env.resend.apiKey();
  const fromEmail = env.resend.fromEmail();

  const resend = new Resend(resendApiKey);

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #1A1A1A; color: #E0E0E0; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #121212; border-radius: 16px; padding: 32px; border: 1px solid rgba(224, 224, 224, 0.1);">
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #D4AF37, #B8972E); border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
            <div style="width: 24px; height: 24px; background: #121212; border-radius: 50%;"></div>
          </div>
          <h1 style="color: #E0E0E0; font-size: 28px; margin: 0 0 8px; font-family: Georgia, serif;">Q-Records</h1>
          <p style="color: #A0A0A0; margin: 0;">Store Manager</p>
        </div>

        <div style="text-align: center; margin-bottom: 32px;">
          <h2 style="color: #D4AF37; font-size: 24px; margin: 0 0 16px;">Vielen Dank für Ihre Anfrage!</h2>
          <p style="color: #E0E0E0; font-size: 16px; line-height: 1.6; margin: 0;">
            Hallo ${data.firstName},
          </p>
        </div>

        <div style="background-color: #1A1A1A; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <p style="color: #E0E0E0; line-height: 1.8; margin: 0 0 16px;">
            Wir haben Ihre Demo-Anfrage für <strong style="color: #D4AF37;">${data.storeName}</strong> erhalten und freuen uns, von Ihnen zu hören.
          </p>
          <p style="color: #E0E0E0; line-height: 1.8; margin: 0;">
            Ein Mitglied unseres Teams wird sich innerhalb von <strong>24 Stunden</strong> bei Ihnen melden, um einen persönlichen Termin zu vereinbaren.
          </p>
        </div>

        <div style="background-color: #4E342E; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <h3 style="color: #D4AF37; font-size: 16px; margin: 0 0 12px;">Was passiert als Nächstes?</h3>
          <ul style="color: #E0E0E0; margin: 0; padding-left: 20px; line-height: 2;">
            <li>Wir analysieren Ihre Anforderungen</li>
            <li>Persönlicher Anruf zur Terminvereinbarung</li>
            <li>30-minütige Live-Demo Ihres neuen Systems</li>
            <li>Kostenloser 30-Tage-Testzugang</li>
          </ul>
        </div>

        <div style="border-top: 1px solid rgba(224, 224, 224, 0.1); padding-top: 24px; text-align: center;">
          <p style="color: #A0A0A0; font-size: 14px; margin: 0 0 16px;">
            Haben Sie in der Zwischenzeit Fragen? Antworten Sie einfach auf diese E-Mail.
          </p>
          <p style="color: #A0A0A0; font-size: 12px; margin: 0;">
            Q-Records GmbH | Deutschland<br>
            <a href="https://q-records.de" style="color: #D4AF37;">www.q-records.de</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  await resend.emails.send({
    from: fromEmail,
    to: data.email,
    replyTo: env.resend.adminEmail(),
    subject: `Ihre Demo-Anfrage für ${data.storeName} | Q-Records`,
    html,
  });
}

export async function submitDemoRequest(
  formData: DemoRequestFormData
): Promise<ActionResponse<{ redirectUrl: string }>> {
  try {
    const validationResult = demoRequestSchema.safeParse(formData);

    if (!validationResult.success) {
      const errors: Record<string, string[]> = {};
      validationResult.error.issues.forEach((issue) => {
        const path = issue.path.join('.');
        if (!errors[path]) {
          errors[path] = [];
        }
        errors[path].push(issue.message);
      });

      return {
        success: false,
        message: 'Validierungsfehler',
        errors,
      };
    }

    const data = validationResult.data;

    await Promise.all([
      createAirtableLead(data),
      sendAdminNotification(data),
      sendUserConfirmation(data),
    ]);

    return {
      success: true,
      message: 'Demo-Anfrage erfolgreich gesendet',
      data: {
        redirectUrl: '/success',
      },
    };
  } catch (error) {
    console.error('Error submitting demo request:', error);

    return {
      success: false,
      message:
        'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.',
    };
  }
}
