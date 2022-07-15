import { Item } from "../src/components/Item";
import "@testing-library/jest-dom";

describe("check we get all items from the api", () => {
  test("check if we have any items", async () => {
    const items = await Item([
      image_link,
      name,
      price,
      description,
      category,
      product_type,
    ]);
    expect(items.length > 0).toBeTruty();
  });
});
