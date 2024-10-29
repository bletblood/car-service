export function Home() {
  return (
    <div className="mx-auto w-full min-h-64 grid grid-rows-3 md:grid-cols-3 items-center bg-[url('./assets/bg-main.jpg')] bg-cover sm:bg-no-repeat px-4 sm:px-12">
      <div className="bg-black/50 p-2 sm:m-1 sm:p-8 rounded-lg md:col-span-2">
        <h1 className="text-2xl sm:text-4xl text-base-100 font-bold mb-2 sm:mb-4">
          Сервис по ремонту автомобилей
        </h1>
        <p className="text-base sm:text-lg text-base-100 mb-4 sm:mb-8">
          Наш сервисный центр по ремонту автомобилей предлагает полный спектр услуг для автомобилей любой марки и модели.
        </p>
      </div>
      <div className="bg-black/50 p-4 sm:m-1 sm:p-8 rounded-lg md:col-span-1">
        <p className="text-base sm:text-lg text-base-100 mb-4 sm:mb-8">
          У нас работает команда опытных механиков, имеющая в своем распоряжении современное оборудование, что позволяет быстро и
          эффективно выполнять любые виды работ, от регулярного обслуживания до сложных ремонтов.
        </p>
      </div>
      <div className="bg-black/50 p-4 sm:m-1 sm:p-8 rounded-lg md:col-span-1">
        <p className="text-base sm:text-lg text-base-100">
          Мы гарантируем качество нашей работы и используем только оригинальные запасные части. Мы также предоставляем гарантию на
          все виды работ, выполняемых нами.
        </p>
      </div>
    </div>
  )
}

