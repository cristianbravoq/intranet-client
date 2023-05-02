import { useState } from "react";
import { Tab } from "@headlessui/react";
import CrearGiftCard from "./crear";
import ConsultarGiftCard from "./consultar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GiftCard() {
  var categories = {
    Crear: [
      {
        id: 1,
        component: CrearGiftCard,
      },
    ],
    Consultar: [
      {
        id: 2,
        component: ConsultarGiftCard,
      },
    ],
  };

  return (
    <div className="px-2 py-16 sm:px-0 w-full">
      <h2 className="text-center text-4xl top-6">Gift Card</h2>
      <div className="m-5 ">
        <Tab.Group>
          <Tab.List className="flex rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-800 ease-out duration-500",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-blue-300 hover:text-slate-900"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      {<post.component />}
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
