"use client";

import {Benefits} from "../../../shared/benefits";
import {BenefitsT} from "@/types/benefits.t";
import {useTranslations} from "next-intl";

export const SMRBenefits = () => {
    const t = useTranslations("SMRBenefits");

    const ITEMS: BenefitsT[] = [
        {title: t("items.1"), icon: "/benefits/kaspi-travel/location_icon.svg"},
        {title: t("items.2"), icon: "/benefits/kaspi-travel/return_icon.svg"},
        {title: t("items.3"), icon: "/benefits/kaspi-travel/tenge_icon.svg"},
    ];

    return (
        <Benefits
            title={<>{t("title")}</>}
            items={ITEMS}
        />
    )
}