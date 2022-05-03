import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <h1>Welcome Triarta</h1>
        <Image src="/profile.jpg" width={200} height={200} />
      </Layout>
    </>
  );
}
