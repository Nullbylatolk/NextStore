import { validateAcceessToken } from "app/utils/auth/validateAccessToken"
export default async function MyaccountPage() {

    const customer = await validateAcceessToken()



    return (
        <div>
            <section>
                <h2>Your info</h2>
                <h1>Bienvenido {customer.firstName}</h1>
                <p>email: {customer.email}</p>
            </section>
        </div>
    )

}