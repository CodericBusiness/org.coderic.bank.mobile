import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.coderic.bank.mobile',
  appName: 'BankMobile',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
