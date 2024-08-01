interface MyAccountLayoutProps {
    children: React.ReactNode;
    ordersInfo: React.ReactNode;
    userInfo: React.ReactNode;
}

export default async function MyaccountLayout(props: MyAccountLayoutProps) {
    return (
        <div>
            {props.children}
            {props.userInfo}
            {props.ordersInfo}
        </div>
    )

}