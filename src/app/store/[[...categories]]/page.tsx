import { ProductsWrapper } from "app/components/store/ProductsWrapper/ProductsWrapper";
import { getCollections, getCollectionsProducts } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

/*
Una buena práctica en todos los componentes de React es agregar una interface para saber qué tipo de propiedades vas a recibir
*/

interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}

export default async function Category(props: CategoryProps) {
    const { categories } = props.params;

    let products = []
    const collections = await getCollections()

    // Verificar que categories no es undefined y contiene al menos un elemento
    if (categories && categories.length > 0) {
        const selectedCollection = collections.find((collection: any) => collection.handle === categories[0]);
        
        // Verificar que find() haya encontrado un resultado antes de intentar acceder a su id
        if (selectedCollection) {
            const selectedCollectionId = selectedCollection.id;
            products = await getCollectionsProducts(selectedCollectionId);
        } else {
            console.error('Collection with the specified handle was not found.');
            products = await getProducts();
        }
    } else {
        console.error('Categories is undefined or empty.');
        products = await getProducts();
    }

    return (
        <ProductsWrapper products={products} />
    );
}
