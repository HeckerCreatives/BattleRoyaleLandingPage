declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_INVESTOR_URL: string;

    ENVRIONMENT: "development" | "production";
  }
}