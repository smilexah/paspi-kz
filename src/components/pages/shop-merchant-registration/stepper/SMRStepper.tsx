"use client";

import {Stepper} from "../../../shared/stepper";

const steps = [
    {number: 1, text: "Скачайте приложение Kaspi.kz"},
    {number: 2, text: "Покупайте Авиа и ЖД билеты по выгодным ценам онлайн"},
];

export const SMRStepper = () => {
    return (
        <Stepper
            title="Как это работает?"
            steps={steps}
            lineColor="#E4573D"
        />
    )
}