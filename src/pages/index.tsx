import { GetServerSideProps } from 'next';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const product = {
    priceId: "1",
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(1000 / 100),
  };

  return {
    props: {
      product,
    },
  };
};
