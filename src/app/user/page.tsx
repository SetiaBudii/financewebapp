import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getallUser = async () => {
    const res = await prisma.users.findMany();
    return res;
    };

const User = async() => {
    const users =  await getallUser();
    return (
        <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.username}>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default User;