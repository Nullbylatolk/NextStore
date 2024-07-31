import { GraphQLClientSingleton } from "app/graphql";
import { cookies } from "next/headers";
import { customerName } from "app/graphql/queries/customerName";

type Customer = {
  firstName: string | null;
  email: string | null;
};


type CustomerResponse = {
  customer: Customer;
};


export const validateAcceessToken = async (): Promise<Customer> => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accesToken")?.value || '';
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  try {
    const response = await graphqlClient.request<CustomerResponse>(customerName, {
      customerAccessToken: accessToken,
    });
    const { customer }: { customer: Customer } = response;

    if (!customer) {
      return { firstName: null, email: null };
    }

    return customer;
  } catch (error) {
    console.error('Error fetching customer:', error);
    return { firstName: null, email: null };
  }
};
