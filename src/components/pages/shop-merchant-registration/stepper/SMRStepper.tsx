"use client";

import {Stepper} from "../../../shared/stepper";
import {useTranslations} from "next-intl";

const stepsFrom = (t: ReturnType<typeof useTranslations>) => ([
    {number: 1, text: t("steps.1")},
    {number: 2, text: t("steps.2")},
]);

export const SMRStepper = () => {
    const t = useTranslations("SMRStepper");
    return (
        <Stepper
            title={t("title")}
            steps={stepsFrom(t)}
            lineColor="#E4573D"
        />
    )
}