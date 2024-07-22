'use client'
import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { useEffect } from "react";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    useEffect(() => {
        console.log('envio de metricas')
    }, [])

    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}