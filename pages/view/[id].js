import Axios from "axios";
import Head from "next/head";
import Item from "../../src/components/Item";

const Post = ({ item }) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {item && <Item item={item} />}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      item: data,
    },
  };
}
