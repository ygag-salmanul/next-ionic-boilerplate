import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Dashboard: NextPage = ({ prod }: any) => {
  const router = useRouter();
  const click = () => {
    router.push("/tabs/lists");
  };
  return (
    <div>
      <button onClick={click}>click</button>

      {prod.products.map((i: any) => (
        <h1 key={i.id}>{i.title}</h1>
      ))}
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const prod = await res.json();

  return {
    props: { prod },
  };
}
