import client from "../client";

const getCards = async () => {
  try {
    const { data } = await client.get("/cards");

    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getCards };
