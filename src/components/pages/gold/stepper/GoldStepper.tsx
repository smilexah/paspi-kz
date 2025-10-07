"use client";

import {Stepper} from "../../../shared/stepper";
import {StepT} from "@/types/step.t";

const steps: StepT[] = [
    {number: 1, text: "Скачайте приложение Kaspi.kz"},
    {number: 2, text: "Откройте Kaspi Gold онлайн"},
];

export const GoldStepper = () => {
    return (
        <Stepper
            title="Как это работает?"
            steps={steps}
            lineColor="#E4573D"
        />
    )
}