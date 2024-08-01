import { validateAcceessToken } from "app/utils/auth/validateAccessToken"
export default async function MyaccountPage() {

    const customer = await validateAcceessToken()



    return (
        <div>
            <h2>Your info</h2>
            <section>
                <p>Bienvenido {customer.firstName}</p>
                <p>email: {customer.email}</p>
            </section>
        </div>
    )

}