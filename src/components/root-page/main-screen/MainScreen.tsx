import {Container} from "@/components/container";
import Image from "next/image";

export const MainScreen = () => {
    return (
        <section className="bg-[#f0f0f0] h-[320px]">
            <Container className="flex items-center justify-center h-full">
                <div className="relative flex items-center justify-between w-full h-full">
                    <Image src={"/main-logo.svg"} alt={"Main Logo"} width={760} height={160}/>

                    <Image src={"/2025-phone.png"} alt={"Phone Logo"} width={230} height={273} className="absolute right-0 top-[46px]"/>
                </div>
            </Container>
        </section>
    )
}