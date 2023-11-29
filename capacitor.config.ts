import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'next-ionic',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
		url: 'http://192.168.108.122:3000',
		cleartext: true
	}
};

export default config;
