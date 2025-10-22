"use client";

import {Hero} from "../../../shared/hero";
import {useTranslations} from "next-intl";

export const PaymentsMainScreen = () => {
    const t = useTranslations("PaymentsMain");
    return (
        <Hero
            imageSrc="/hero/travel-main-v3.svg"
            imageAlt={t("imageAlt")}
            title={t("title")}
            description={<>{t("description")}</>}
            primaryButtonText={t("primaryButton")}
            onPrimaryClick={() => console.log("Payments click")}
        />
    )
}