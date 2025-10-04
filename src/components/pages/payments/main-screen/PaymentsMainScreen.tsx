"use client";

import {Hero} from "../../../shared/hero";

export const PaymentsMainScreen = () => {
    return (
        <Hero
            imageSrc="/hero/travel-main-v3.svg"
            imageAlt="Платежи Kaspi.kz"
            title="Платежи Kaspi.kz"
            description={
                <>
                    Без комиссий, более 10 000 услуг
                </>
            }
            buttonText="Оплатить услуги"
            onButtonClick={() => console.log("Kaspi Gold click")}
        />
    )
}