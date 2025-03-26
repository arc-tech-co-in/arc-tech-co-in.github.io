/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MAIL_TO_ADDRESS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}