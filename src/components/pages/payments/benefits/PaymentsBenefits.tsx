"use client";

import {Benefits} from "../../../shared/benefits";
import {BenefitsT} from "@/types/benefits.t";

const ITEMS: BenefitsT[] = [
    {title: "Без комиссий", icon: "/benefits/kaspi-travel/location_icon.svg"},
    {title: "Более 10 000 услуг", icon: "/benefits/kaspi-travel/return_icon.svg"},
    {title: "Не выходя из дома", icon: "/benefits/kaspi-travel/tenge_icon.svg"},
];

export const PaymentsBenefits = () => {
    return (
        <Benefits
            title={
                <>
                    Преимущества Kaspi Travel
                </>
            }
            items={ITEMS}
        />
    )
}