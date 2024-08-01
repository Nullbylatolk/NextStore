import { Chat } from "app/components/chat/Chat"
import { getProducts } from "app/services/shopify/products"
// import { createAgent } from "app/utils/openai/createAgent"


export default async function ChatPage() {

  const products = await getProducts()
  const productTitles = products?.map((product: {title: string}) => product.title) || [];
  const flatProductTitles = productTitles.join("\n")
  const agent = flatProductTitles

  console.log(agent)
  return <Chat agent={agent}/>
}