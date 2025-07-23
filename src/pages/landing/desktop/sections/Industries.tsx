export default function Industries() {
  return (
    <section>
      <div className="container">
        <h2 className="font-normal text-[1.6875rem] text-[#1a1c23]">
          Отрасли, которые мы обслуживаем!
        </h2>
        <ul className="grid grid-cols-4 gap-[1.625rem] mt-4">
          <li className="col-span-2">
            <img src="./xim.webp" alt="CHEMICAL INDUSTRY img" />
          </li>
          <li className="col-span-1">
            <img src="./neft.webp" alt="OIL AND GAS INDUSTRY img" />
          </li>
          <li className="col-span-1">
            <img src="./stroitel.webp" alt="CONSTRUCTION INDUSTRY img" />
          </li>
          <li className="col-span-1">
            <img src="./stroitrl-2.webp" alt="CONSTRUCTION INDUSTRY img" />
          </li>
          <li className="col-span-1">
            <img src="./ugol.webp" alt="COAL INDUSTRY img" />
          </li>
          <li className="col-span-2">
            <img src="./eat.webp" alt="FOOD INDUSTRY img" />
          </li>
        </ul>
      </div>
    </section>
  );
}
