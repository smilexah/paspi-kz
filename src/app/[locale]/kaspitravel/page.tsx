import {QR} from "@/components/shared/QR";
import {FixedActionBar} from "@/components/shared/fixed-action-bar";
import {PopularRoutes} from "@/components/shared/popular-routes";
import {PartnersShowCase} from "@/components/shared/partners/Partners";
import {TravelMainScreen} from "@/components/pages/kaspi-travel/main-screen";
import {TravelBenefits} from "@/components/pages/kaspi-travel/benefits";
import {TravelStepper} from "@/components/pages/kaspi-travel/stepper";
import {PartnerT} from "@/types/partner.t";

const PARTNERS: PartnerT[] = [
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

export default function KaspiTravelPage() {
    return (
        <>
            <main>
                <TravelMainScreen/>
                <TravelBenefits/>
                <TravelStepper/>
                <PopularRoutes/>
                <PartnersShowCase
                    subtitle={"более 1 500 компаний по всему миру"}
                    partners={PARTNERS}
                />
                <QR
                    qrSrc="/QR/qr-link-travel-new.svg"
                    alt="Kaspi.kz Gold QR Code"
                />
            </main>
            <FixedActionBar
                label="Открыть Kaspi Gold"
            />
        </>
    );
}
