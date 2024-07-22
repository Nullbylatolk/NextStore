import { MainProducts } from "app/components/home/MainProducts";
import { Suspense } from "react";
import Loading from "../loading";

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
