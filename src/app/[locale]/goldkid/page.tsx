import {Feature, Benefits} from "@/components/shared/benefits/Benefits";
import {Hero} from "@/components/shared/hero";
import {Stepper} from "@/components/shared/stepper";
import {QR} from "@/components/shared/QR";
import {FixedActionBar} from "@/components/shared/fixed-action-bar";

const color = "#E4573D";

const ArrowSwapIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M18 26h20m0 0-4-4m4 4-4 4"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M46 38H26m0 0 4 4m-4-4 4-4"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const TIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M22 26h20M32 26v16"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
);

const CartIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M22 28h20l-2 10H24l-2-10Z"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinejoin="round"
        />
        <circle
            cx="26"
            cy="42"
            r="2.5"
            fill="none"
            stroke={color}
            strokeWidth="3"
        />
        <circle
            cx="40"
            cy="42"
            r="2.5"
            fill="none"
            stroke={color}
            strokeWidth="3"
        />
    </svg>
);

const ITEMS: Feature[] = [
    {title: "Переводить Вашему ребенку деньги без комиссии", Icon: ArrowSwapIcon},
    {title: "Контролировать\n траты ребенка", Icon: TIcon},
    {title: "Управлять доступом\n" +
            "на покупки в интернете", Icon: CartIcon},
];

const steps = [
    {number: 1, text: "Скачайте приложение Kaspi.kz"},
    {number: 2, text: "Откройте Kaspi Gold\n" +
            "для ребенка онлайн"},
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
