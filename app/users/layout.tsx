import getUsers from "../actions/getUsers";
import Sidebar from "../(site)/components/sidebar/Sidebar";
import UserList from "./compontents/UserList";


export default async function UsersLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const users = await getUsers();

    return (
        <Sidebar>
            <div className="h-full">
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}
