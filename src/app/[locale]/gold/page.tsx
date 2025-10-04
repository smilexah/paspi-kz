import {Benefits} from "@/components/shared/benefits/Benefits";
import {Stepper} from "@/components/shared/stepper";
import {QR} from "@/components/shared/QR";
import {Hero} from "@/components/shared/hero";
import {FixedActionBar} from "@/components/shared/fixed-action-bar";
import {BenefitsT} from "@/types/benefits.t";
import {StepT} from "@/types/step.t";

const ITEMS: BenefitsT[] = [
    {title: "Переводить любому клиенту Kaspi без комиссии", icon: "/benefits/kaspi-travel/location_icon.svg"},
    {title: "Оплачивать без комиссии более 10 000 услуг на Kaspi.kz", icon: "/benefits/kaspi-travel/return_icon.svg"},
    {title: "Покупать в Интернет-магазине на Kaspi.kz", icon: "/benefits/kaspi-travel/tenge_icon.svg"},
];

const steps: StepT[] = [
    {number: 1, text: "Скачайте приложение Kaspi.kz"},
    {number: 2, text: "Откройте Kaspi Gold онлайн"},
];

export default function GoldPage() {
    return (
        <>
            <main>
                <Hero
                    imageSrc="/hero/gold-main-v2.svg"
                    imageAlt="Main Logo v2"
                    title="Kaspi Gold"
                    description={
                        <>
                            Покупки, переводы, платежи, <br/> снятия без комиссий
                        </>
                    }
                    buttonText="Открыть Kaspi Gold"
                    onButtonClick={() => console.log("Kaspi Gold click")}
                />
                <Benefits
                    title={
                        <>
                            Откройте Kaspi Gold онлайн
                            <br/>и Вы сможете
                        </>
                    }
                    items={ITEMS}
                />
                <Stepper
                    title="Как это работает?"
                    steps={steps}
                    lineColor="#E4573D"
                />
                <QR
                    qrSrc="/QR/qr-link-gold-v2.svg"
                    alt="Kaspi.kz Gold QR Code"
                />
            </main>
            <FixedActionBar
                label="Открыть Kaspi Gold"
            />
        </>
    );
}
