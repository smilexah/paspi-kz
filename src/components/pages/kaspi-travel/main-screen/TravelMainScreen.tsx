"use client";

import {Hero} from "../../../shared/hero";

export const TravelMainScreen = () => {
    return (
        <Hero
            imageSrc="/hero/travel-main-v3.svg"
            imageAlt="Kaspi Travel"
            title="Kaspi Travel"
            description={
                <>
                    Авиа и ЖД билеты по выгодным ценам
                </>
            }
            primaryButtonText="Найти билеты"
            onPrimaryClick={() => console.log("Kaspi Gold click")}
        />
    )
}