"use client";

import {Hero} from "../../../shared/hero";
import {useTranslations} from "next-intl";

export const GoldMainScreen = () => {
    const t = useTranslations("GoldMain");
    return (
        <Hero
            imageSrc="/hero/gold-main-v2.svg"
            imageAlt={t("imageAlt")}
            title={t("title")}
            description={t.rich("description", { br: () => <br/> })}
            primaryButtonText={t("primaryButton")}
            onPrimaryClick={() => console.log("Kaspi Gold click")}
        />
    )
}