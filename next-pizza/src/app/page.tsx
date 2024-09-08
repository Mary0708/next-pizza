import {
  Container,
  Categories,
  Title,
  SortPopup,
  TopBar,
  Filters,
} from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsList } from "@/components/shared/products-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 300,
                    items: [{ id: 1, price: 300 }],
                  },
                  {
                    id: 2,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 300,
                    items: [{ id: 1, price: 300 }],
                  },
                  {
                    id: 3,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 300,
                    items: [{ id: 1, price: 300 }],
                  },
                  {
                    id: 4,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 300,
                    items: [{ id: 1, price: 300 }],
                  },
                ]}
                categoryId={1}
                className=""
              />
              <ProductsList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 300,
                    items: [{ id: 1, price: 300 }],
                  },
                  {
                    id: 2,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 300,
                    items: [{ id: 1, price: 300 }],
                  },
                  {
                    id: 3,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 300,
                    items: [{ id: 1, price: 300 }],
                  },
                  {
                    id: 4,
                    name: "Пицца с сыром",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 300,
                    items: [{ id: 1, price: 300 }],
                  },
                ]}
                categoryId={2}
                className=""
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
