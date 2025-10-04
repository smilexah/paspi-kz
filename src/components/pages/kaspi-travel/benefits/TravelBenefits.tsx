"use client";

import {Benefits} from "../../../shared/benefits";
import {BenefitsT} from "@/types/benefits.t";

const ITEMS: BenefitsT[] = [
    {title: "Тысячи направлений\n по низким ценам", icon: "/benefits/kaspi-travel/location_icon.svg"},
    {title: "Быстрый возврат\n и обмен", icon: "/benefits/kaspi-travel/return_icon.svg"},
    {title: "Оплата с Kaspi Gold\n и в кредит", icon: "/benefits/kaspi-travel/tenge_icon.svg"},
];

export const TravelBenefits = () => {
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