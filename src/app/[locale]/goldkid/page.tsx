import {Benefits} from "@/components/shared/benefits/Benefits";
import {Hero} from "@/components/shared/hero";
import {Stepper} from "@/components/shared/stepper";
import {QR} from "@/components/shared/QR";
import {FixedActionBar} from "@/components/shared/fixed-action-bar";
import {BenefitsT} from "@/types/benefits.t";

const ITEMS: BenefitsT[] = [
    {title: "Переводить Вашему ребенку деньги без комиссии", icon: "/benefits/kaspi-travel/location_icon.svg"},
    {title: "Контролировать\\n траты ребенка", icon: "/benefits/kaspi-travel/return_icon.svg"},
    {title: "Управлять доступом\\n на покупки в интернете", icon: "/benefits/kaspi-travel/tenge_icon.svg"},
];

const steps = [
    {number: 1, text: "Скачайте приложение Kaspi.kz"},
    {number: 2, text: "Откройте Kaspi Gold\n" + "для ребенка онлайн"},
];

export default function GoldKidPage() {
    return (
        <>
            <main>
                <Hero
                    imageSrc="/hero/goldkid-main-v2.svg"
                    imageAlt="Kaspi Gold для ребенка"
                    title="Kaspi Gold"
                    description={
                        <>
                            Деньги на карманные расходы <br/> и контроль трат
                        </>
                    }
                    buttonText="Открыть Kaspi Gold для ребенка"
                    onButtonClick={() => console.log("Kaspi Gold click")}
                />
                <Benefits
                    title={
                        <>
                            С Kaspi Gold для ребенка
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
                    qrSrc="/QR/qr-link-goldkid-v1.svg"
                    alt="Kaspi.kz Gold QR Code"
                />
            </main>
            <FixedActionBar
                label="Открыть Kaspi Gold"
            />
        </>
    );
}
