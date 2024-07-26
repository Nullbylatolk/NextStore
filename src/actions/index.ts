"use server";
import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utils/auth/createAccesToken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createCartMutation } from "app/graphql/mutations/createCartMutation";
import { validateAcceessToken } from "app/utils/auth/validateAccessToken";
import { accessSync } from "fs";


export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["password_confirmation"];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  const variables = {
    input: {
      ...formDataObject,
      phone: "+52" + formDataObject.phone,
    },
  };

  const { customerCreate }: any = await graphqlClient.request(
    createUserMutation,
    variables
  );
  const { customerUserErrors, customer } = customerCreate;
  console.log(customer);
  console.log(customerUserErrors);

  if (customer?.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );
    redirect("/store");
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accesToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );
  if (accesToken) {
    redirect("/store");
  }
};

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies();
  const accesToken = cookiesStore.get("accesToken")?.value as string;
  if (!accesToken) redirect("/login");
  
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const customer = await validateAcceessToken();
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accesToken,
        email: customer?.email,
      },
      lines: items.map((item) => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity,
      })),
    },
  };

  const {
    cartCreate,
  }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string;
      };
    };
  } = await graphqlClient.request(createCartMutation, variables);

  return cartCreate?.cart?.checkoutUrl;
};
