import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// import { useState } from "react";
// import { Icon } from "~/components/Icon";
import { getClient } from "~/lib/sanity";
import { ProductQuery } from "~/queries/Queries";

export const loader = async ({ params }: LoaderArgs) => {
  const slug = params.product;
  const store = await getClient().fetch(ProductQuery, { slug });
  console.log({ store });
  return { store };
};

export default function IndividualProduct() {
  const { store } = useLoaderData();
  console.log({ store });
  // const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="grid grid-cols-12 mx-[120px] gap-x-5">
        <div className="col-span-12 md:col-span-6">
          <img src={store.image} alt={store.title} className="max-w-full" />
        </div>
        <div className="none md:col-span-1" />
        <div className="col-span-12 md:col-span-5">
          <div className="bg-lavenderIndigo font-mono text-white text-lg px-5 h-10 inline-flex justify-center items-center mb-10">
            PRE-SALE
          </div>
          <h1 className="page-title text-left mx-0 mb-10">{store.title}</h1>
          <div className="large-body-copy">${store.price}</div>
          <p className="text-sm">
            <em>Shipping Included</em>
          </p>
          <div className="mb-10">{store.description}</div>
          {/* <div className="relative">
            <div className="label">MEN'S SIZES</div>
            <div className="flex gap-2 mb-10">
              <a href="#" className="size-button">
                S
              </a>
              <a href={store.mensMedium} className="size-button">
                M
              </a>
              <a href={} className="size-button">
                L
              </a>
              <a href={store.mensXL} className="size-button">
                XL
              </a>
              <a href={store.mens2XL} className="size-button">
                2XL
              </a>
            </div>
          </div>

          <div className="label">WOMEN'S SIZES</div>
          <div className="flex gap-2 mb-10">
            <a href={store.womensSmall} className="size-button">
              S
            </a>
            <a href={store.womensMedium} className="size-button">
              M
            </a>
            <a href={store.womensLarge} className="size-button">
              L
            </a>
            <a href={store.womensXL} className="size-button">
              XL
            </a>
          </div> */}

          {/* <div className="label">QUANTITY</div>
          <div className="flex gap-2 mb-10">
            <button
              className="size-button text-2xl"
              onClick={() =>
                setQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0))
              }
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="bg-black text-white font-mono border-white border-1 text-center appearance-none"
              defaultValue={1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button
              className="size-button text-2xl"
              onClick={() => setQuantity((prevValue) => prevValue + 1)}
            >
              +
            </button>
          </div> */}

          {/* <button className="button-link bg-white hover:bg-yellow mb-10">
            Add to Cart
            <Icon name="arrow" />
          </button> */}

          <p className="text-sm">
            <em>
              Our apologies, but we are currently only shipping within the
              United States of America.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
