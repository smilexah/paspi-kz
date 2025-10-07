"use client";

import {Hero} from "../../../shared/hero";

export const GoldMainScreen = () => {
    return (
        <Hero
            imageSrc="/hero/gold-main-v2.svg"
            imageAlt="Main Logo v2"
            title="Kaspi Gold"
            description={
                <>
                    Покупки, переводы, платежи, <br/> снятия без комиссий
                </>
            }
            primaryButtonText="Открыть Kaspi Gold"
            onPrimaryClick={() => console.log("Kaspi Gold click")}
        />
    )
}