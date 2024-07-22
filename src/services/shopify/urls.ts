import { env } from "app/config/env";

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/smart_collections.json`,
    products:(id:string)=> `${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/collections/${id}/products.json`,
  },
};
