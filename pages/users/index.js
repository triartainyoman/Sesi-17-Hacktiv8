import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function users({ dataUsers }) {
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      <h1>Users Page</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => router.push(`/users/${user.id}`)}>
                    detail
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
