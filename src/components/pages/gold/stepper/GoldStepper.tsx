"use client";

import {Stepper} from "../../../shared/stepper";
import {StepT} from "@/types/step.t";
import {useTranslations} from "next-intl";

export const GoldStepper = () => {
    const t = useTranslations("GoldStepper");

    const steps: StepT[] = [
        {number: 1, text: t("steps.1")},
        {number: 2, text: t("steps.2")},
    ];

    return (
        <Stepper
            title={t("title")}
            steps={steps}
            lineColor="#E4573D"
        />
    )
}