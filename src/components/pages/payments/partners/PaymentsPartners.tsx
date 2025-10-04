"use client";

import {PartnersShowCase} from "@/components/shared/partners/Partners";
import {PartnerT} from "@/types/partner.t";

const PaymentsPartners: PartnerT[] = [
    {name: "Air Astana", logo: "/partners/air-astana.svg"},
    {name: "FlyArystan", logo: "/partners/fly-arystan.svg"},
    {name: "Scat", logo: "/partners/scat.svg"},
    {name: "Turkish Airlines", logo: "/partners/turkish_airlines.svg"},
    {name: "Qazaq Air", logo: "/partners/qazaq-air.svg"},
    {name: "Qatar Airways", logo: "/partners/qatar-airways.svg"},
    {name: "FlyDubai", logo: "/partners/FlyDubai.png"},
    {name: "Pegasus Airlines", logo: "/partners/Pegasus.svg"},
    {name: "Uzbekistan Airways", logo: "/partners/Uzbekistan-Airways.svg"},
    {name: "Lufthansa", logo: "/partners/Lufthansa.png"},
];

export const Partners = () => {
    return (
        <PartnersShowCase
            title="Уже более 10 000 услуг"
            partners={PaymentsPartners}
        />
    )
}