"use client";

import {Stepper} from "../../../shared/stepper";

const steps = [
    {number: 1, text: "Скачайте приложение Kaspi.kz"},
    {number: 2, text: "Откройте Kaspi Gold\n" + "для ребенка онлайн"},
];

export const GoldKidStepper = () => {
    return (
        <Stepper
            title="Как это работает?"
            steps={steps}
            lineColor="#E4573D"
        />
    )
}