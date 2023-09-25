import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getallkategori = async () => {
    const res = await prisma.kategori.findMany();
    console.log(res);
    return res;
    };

const Kategori = async() => {
    const kategori =  await getallkategori();
    return (
        <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>kategori</th>
                    <th>budget</th>
                </tr>
            </thead>
            <tbody>
                {kategori.map((kategori) => (
                    <tr key={kategori.id_kategori}>
                        <td>{kategori.id_kategori}</td>
                        <td>{kategori.username}</td>
                        <td>{kategori.nama_kategori}</td>
                        <td>{kategori.budget}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default Kategori;