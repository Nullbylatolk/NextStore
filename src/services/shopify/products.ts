import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async (id?: string): Promise<ProductType[] | undefined > => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;

    const response = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { products } = await response.json();

    const transformedProducts = products.map((item: any) => {
      return {
        id: item.id,
        gql_id: item.variants[0].admin_graphql_api_id,
        title: item.title,
        description: item.body_html,
        price: item.variants[0].price,
        image: item.images[0].src,
        quantity: item.variants[0].inventory_quantity,
        handle: item.handle,
        tags: item.tags,
      };
    });
    return transformedProducts;
  } catch (error) {
    console.log(error);
  }
};

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.main, {
    headers: new Headers({
      "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
    }),
    //cache: "force-cache" //Cache por defectoque tiene next,
    // next:{   ----> cada diez segundos va revisar un cambio en la api
    //   revalidate: 10,
    // }
   // cache: "no-cache",
  cache: "force-cache",
  next:{
    tags:['main-products']
  }
  });
  const { products } = await response.json();
  return products;
};
