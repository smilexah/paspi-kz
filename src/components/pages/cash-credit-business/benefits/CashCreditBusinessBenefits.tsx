"use client";

import {Benefits} from "../../../shared/benefits";
import {BenefitsT} from "@/types/benefits.t";

const ITEMS: BenefitsT[] = [
    {title: "Переводить любому клиенту Kaspi без комиссии", icon: "/benefits/kaspi-travel/location_icon.svg"},
    {title: "Оплачивать без комиссии более 10 000 услуг на Kaspi.kz", icon: "/benefits/kaspi-travel/return_icon.svg"},
    {title: "Покупать в Интернет-магазине на Kaspi.kz", icon: "/benefits/kaspi-travel/tenge_icon.svg"},
];

export const CashCreditBusinessBenefits = () => {
    return (
        <Benefits
            title={
                <>
                    Откройте Kaspi Gold онлайн
                    <br/>и Вы сможете
                </>
            }
            items={ITEMS}
        />
    )
}