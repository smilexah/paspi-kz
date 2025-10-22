"use client";

import React from "react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default function NotFound() {
    const t = useTranslations("NotFound");

    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="mx-4 max-w-xl text-center">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{t("title")}</h1>
                <p className="mt-3 text-gray-600">{t("description")}</p>
                <Link
                    href="/"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
                >
                    {t("back")}
                </Link>
            </div>
        </div>
    );
}
