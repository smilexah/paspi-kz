"use client";

import {Hero} from "../../../shared/hero";

export const GoldKidMainScreen = () => {
    return (
        <Hero
            imageSrc="/hero/goldkid-main-v2.svg"
            imageAlt="Kaspi Gold для ребенка"
            title="Kaspi Gold"
            description={
                <>
                    Деньги на карманные расходы <br/> и контроль трат
                </>
            }
            primaryButtonText="Открыть Kaspi Gold для ребенка"
            onPrimaryClick={() => console.log("Kaspi Gold click")}
        />
    )
}