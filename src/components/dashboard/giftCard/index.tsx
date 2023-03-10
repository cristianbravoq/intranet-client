import { useState } from 'react'
import { Tab } from '@headlessui/react'
import CrearGiftCard from './crear'
import ConsultarGiftCard from './consultar'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function GiftCard() {

  let [categories] = useState({
    Crear: [
      {
        id: 1,
        component: CrearGiftCard
      }
    ],
    Consultar: [
      {
        id: 1,
        component: ConsultarGiftCard 
      }
    ]
  })

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <h2 className='text-center text-2xl mb-7'>Gift Card</h2>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ease-out duration-1000',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
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
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >

                    {<post.component/>}

                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}