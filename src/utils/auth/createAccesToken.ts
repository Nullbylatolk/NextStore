import { GraphQLClientSingleton } from "app/graphql";
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccesTokenCreate";
import { cookies } from "next/headers";

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies();
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const { customerAccessTokenCreate } = await graphqlClient.request(
    customerAccessTokenCreateMutation,
    {
      email: email,
      password: password,
    }
  );

  const { accessToken, expiresAt } =
  customerAccessTokenCreate?.customerAccessToken;
  //console.log("accesToken",accessToken)
  if (accessToken) {
    cookiesStore.set("accesToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict",
    });


    return accessToken
  }
};
