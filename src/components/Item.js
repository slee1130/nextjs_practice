import { Button } from "semantic-ui-react";

export default function Item({ item }) {
  const { image_link, name, price, description } = item;
  return (
    <>
      <div>
        <img src={image_link} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <strong>${price}</strong>
      </div>
      <Button color="orange">Buy</Button>
      <div>
        <p>{description}</p>
      </div>
    </>
  );
  console.log(item);
  return <div>hihi</div>;
}
