import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charset="UTF-8" />
      <link rel="icon" href="" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Toyosi",
  Keyword: "developer, frontend, programming",
  description: "Portfolio site",
};

export default Meta;
