import { ProductsWrapper } from "app/components/store/ProductsWrapper/ProductsWrapper";
import { getCollections, getCollectionsProducts } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";


export const runtime = "edge"

interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}

export default async function Category(props: CategoryProps) {
    const { categories } = props.params;

    let products: ProductType[] = [];
    const collections = await getCollections();

    // Verificar que categories no es undefined y contiene al menos un elemento
    if (categories && categories.length > 0) {
        const selectedCollection = collections.find((collection: any) => collection.handle === categories[0]);
        
        // Verificar que find() haya encontrado un resultado antes de intentar acceder a su id
        if (selectedCollection) {
            const selectedCollectionId = selectedCollection.id;
            const fetchedProducts = await getCollectionsProducts(selectedCollectionId);

            // Si fetchedProducts es undefined, products se mantiene como un array vacío
            if (fetchedProducts) {
                products = fetchedProducts;
            }
        } else {
            console.error('Collection with the specified handle was not found.');
            const fetchedProducts = await getProducts();

            // Si fetchedProducts es undefined, products se mantiene como un array vacío
            if (fetchedProducts) {
                products = fetchedProducts;
            }
        }
    } else {
        console.error('Categories is undefined or empty.');
        const fetchedProducts = await getProducts();

        // Si fetchedProducts es undefined, products se mantiene como un array vacío
        if (fetchedProducts) {
            products = fetchedProducts;
        }
    }

    return (
        <ProductsWrapper products={products} />
    );
}
