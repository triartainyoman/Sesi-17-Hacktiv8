import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function UserDetail({ user }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(user);
  return (
    <Layout pageTitle="Detail Page">
      <h1>User Detail Page</h1>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((user) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
