import Item from "../src/components/Item";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import styles from "../components/Item.module.css";

describe("check we get all items from items", () => {
  test("check if we have any items", async () => {
    const { debug, container } = render(<Item />);
    expect(container.firstChild).toBeNull();
    debug();
    // expect(item.length > 0).toBeTruty();
  });
  test.only("정상적으로 props를 렌더링 하는지 확인", async () => {
    const mock = {
      image_link: "/test",
      name: "서울우유",
      price: 300,
      description: "우유는 맛있어",
      category: "유제품이다",
      product_type: "유제품",
    };

    const { debug, container, getByText } = render(<Item item={mock} />);
    expect(container).toMatchSnapshot();
    const productImageEl = container.querySelector("img");

    expect(productImageEl.alt).toEqual(mock.name);
    expect(productImageEl).toHaveAttribute("src", mock.image_link);

    const priceDivEl = container.querySelector(`.${styles.info_item}`);
    expect(priceDivEl.firstChild.tagName).toEqual("STRONG");
    expect(priceDivEl.firstChild).toHaveTextContent(mock.name);
  });
});
