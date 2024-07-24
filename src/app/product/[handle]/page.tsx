
import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
// import { useParams, useSearchParams } from "next/navigation";


interface ProductPageProps {
    searchParams: {
        id: string;
    }
}

export default async function ProductPage(props:ProductPageProps) {
    const id = props.searchParams.id
    const products = await getProducts(id)
    const product = products[0];


    console.log('searchParams ', id)
    return <ProductView product={product}/>
}