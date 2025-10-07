"use client";

import {Stepper} from "../../../shared/stepper";

const steps = [
    {number: 1, text: "Скачайте приложение Kaspi Pay"},
    {number: 2, text: "Зарегистрируйтесь"},
    {number: 3, text: "Начните принимать\n оплату"},
];

export const KaspiPayStepper = () => {
    return (
        <Stepper
            title="Как это работает?"
            steps={steps}
            lineColor="#E4573D"
        />
    )
}