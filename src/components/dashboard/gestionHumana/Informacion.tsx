import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function Informacion() {
  return (
    <div className="w-full overflow-y-scroll">
      <h2 className="text-center text-5xl mt-5 font-semibold">Creaciones Nadar</h2>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Historia.</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
                    Creaciones Nadar S.A. se fundó el 30 de abril de 1991, nació por la pasión de la natación y sus disciplinas, actualmente se dedica a la comercialización y distribución de productos deportivos y prendas de vestir de las marcas SPEEDO y O´NEILL, posee la licencia de distribución y producción en Colombia, Ecuador y Bolivia. Nuestra pasión se extiende más allá de la piscina.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Misión.</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
                Satisfacer los gustos y necesidades de una amplia gama de consumidores que hacen de la actividad física, más que una afición, un estilo de vida, cumpliendo con las necesidades de una manera oportuna y eficiente, que nos permita ser la mejor opción de nuestros clientes, reafirmándoles que somos una marca con experiencia y futuro basada en sobre y dentro del agua.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Visión.</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
                Continuar siendo líderes en nuestras marcas a nivel nacional, ofrecer más variedad de productos para impulsar la atracción de nuevos clientes y obtener proyectos de otras marcas que se alinean a nuestro estilo, duplicando las ventas para el año 2027.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Valores corporativos.</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
                    <li className="py-1"><strong>SERVICIO AL CLIENTE:</strong> Nuestros clientes (internos y externos) son nuestra razón de ser. La excelencia en el relacionamiento es la clave para la consecución de nuestros resultados.</li>
                    <li className="py-1"><strong>HONESTIDAD:</strong> La honestidad en nuestro actuar, delimita nuestras acciones; somos coherentes e íntegros.</li>
                    <li className="py-1"><strong>PERSEVERANCIA:</strong> Perseveramos en todo lo que hacemos. La firmeza, la constancia y la disciplina contribuyen a la consecución de nuestros objetivos; no desistimos frente a las dificultades que se nos puedan presentar.</li>
                    <li className="py-1"><strong>PASIÓN:</strong> Trabajamos con pasión, por eso nos comprometemos y siempre buscamos dar más.</li>
                    <li className="py-1"><strong>EXCELENCIA:</strong> Cada uno de nosotros es consciente del valor que genera nuestro trabajo, por eso lo hacemos con excelencia para obtener resultados extraordinarios.</li>
                    <li className="py-1"><strong>FLEXIBILIDAD Y ADAPTABILIDAD:</strong> No somos resistentes a la transformación, entendemos que el cambio hace parte natural de los procesos y contribuye a la sostenibilidad del negocio.</li>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default Informacion;
