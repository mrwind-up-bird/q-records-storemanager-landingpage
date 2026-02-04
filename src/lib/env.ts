function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

function getOptionalEnvVar(key: string): string | undefined {
  return process.env[key];
}

export const env = {
  airtable: {
    apiKey: () => getEnvVar('AIRTABLE_API_KEY'),
    baseId: () => getEnvVar('AIRTABLE_BASE_ID'),
    tableName: () => getOptionalEnvVar('AIRTABLE_TABLE_NAME') || 'Leads',
  },
  resend: {
    apiKey: () => getEnvVar('RESEND_API_KEY'),
    fromEmail: () => getOptionalEnvVar('RESEND_FROM_EMAIL') || 'Q-Records <info@q-records-storemanager.de>',
    adminEmail: () => getOptionalEnvVar('ADMIN_EMAIL') || 'info@q-records-storemanager.de',
  },
  app: {
    url: () => getOptionalEnvVar('NEXT_PUBLIC_APP_URL') || 'https://q-records-storemanager.de',
  },
};
