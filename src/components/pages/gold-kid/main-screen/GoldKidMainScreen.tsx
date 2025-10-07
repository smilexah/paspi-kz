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
            buttonText="Открыть Kaspi Gold для ребенка"
            onButtonClick={() => console.log("Kaspi Gold click")}
        />
    )
}