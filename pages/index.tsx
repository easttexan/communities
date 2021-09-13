import Head from "next/head";
import Layout from "../components/layout";
import Section from "../components/section";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Longview Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section title="Events">Event</Section>
      <Section title="Groups">Group</Section>
      <Section title="Artists">Arts</Section>
    </Layout>
  );
}
