import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["ru", "kk"],

    defaultLocale: "ru",
    localePrefix: {
        mode: "as-needed",
        prefixes: {
            kk: "/kk",
        },
    },
});

export type Locale = (typeof routing.locales)[number];