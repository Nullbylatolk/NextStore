import { GraphQLClientSingleton } from "app/graphql";
import { cookies } from "next/headers";
import { customerName } from "app/graphql/queries/customerName";

type Customer = {
  firstName: string;
  email: string;
};

export const validateAcceessToken = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accesToken")?.value;
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const { customer }: { customer: Customer } = await graphqlClient.request(
    customerName,
    {
      customerAccessToken: accessToken,
    }
  );
  return customer;
};
