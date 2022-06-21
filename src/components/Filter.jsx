import { Listbox } from "@headlessui/react";

const Filter = ({ regions, selectregion, setSelectRegion }) => {
  return (
    <>
      <Listbox
        className="relative flex h-[56px] basis-[200px] items-center justify-between rounded-md bg-white px-5 dark:bg-dark-blue"
        as={`div`}
        value={selectregion}
        onChange={setSelectRegion}
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={`flex w-full items-center justify-between`}
            >
              {selectregion.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${open ? `rotate-180` : ``}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Listbox.Button>
            <Listbox.Options
              className={`absolute top-[3.8rem] w-full -translate-x-4 cursor-pointer space-y-1 rounded-md bg-dark-blue p-5`}
            >
              {regions.map((region) => (
                <Listbox.Option key={region.id} value={region}>
                  {region.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </>
  );
};

export default Filter;
