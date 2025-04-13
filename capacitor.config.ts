import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.googlelens.clone",
  appName: "Google Lens Clone",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  plugins: {
    Camera: {
      ios: {
        usageDescription: "Allow camera access to use Google Lens features",
      },
    },
  },
};

export default config;
