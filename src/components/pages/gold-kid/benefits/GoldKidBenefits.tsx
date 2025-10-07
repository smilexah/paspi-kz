"use client";

import {Benefits} from "../../../shared/benefits";
import {BenefitsT} from "@/types/benefits.t";

const ITEMS: BenefitsT[] = [
    {title: "Переводить Вашему ребенку деньги без комиссии", icon: "/benefits/kaspi-travel/location_icon.svg"},
    {title: "Контролировать\n траты ребенка", icon: "/benefits/kaspi-travel/return_icon.svg"},
    {title: "Управлять доступом\n на покупки в интернете", icon: "/benefits/kaspi-travel/tenge_icon.svg"},
];

export const GoldKidBenefits = () => {
    return (
        <Benefits
            title={
                <>
                    С Kaspi Gold для ребенка
                    <br/>и Вы сможете
                </>
            }
            items={ITEMS}
        />
    )
}