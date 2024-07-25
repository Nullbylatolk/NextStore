import { MainProducts } from "app/components/home/MainProducts";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata:Metadata ={
  title:"Future World 🤑😁",
  description:"Welcome to the future world, an ecommerce from other century",
  keywords:["ecommerce","future","world","techonology"]
}


export default function Home() {
  // los componenetes de tipo servidor solo son presentacionales que brindan informaacion
  // Los componentes de tipo cliente son aquellos que van a ser completamnete dinamicos
  return (

    <main >
      <Suspense fallback={<Loading />}>
        <MainProducts />
      </Suspense>
      <h1>Products</h1>
    </main>
  );
}
