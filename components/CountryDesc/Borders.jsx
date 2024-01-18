import Link from "next/link";

const Borders = ({ borders }) => {
 return (
  <div className="mt-8 max-w-xl md:flex  md:flex-wrap md:items-center md:gap-y-4 md:gap-x-4">
   <h3 className="text-base font-semibold mb-4 md:mb-0">Border Countries:</h3>
   <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 md:flex  md:flex-wrap">
    {borders.map((border, index) => {
     const correctBorder = border.replace(/ /g, "%20");
     return (
      <Link
       href={`/country/${correctBorder}`}
       key={index}
       className=" drop-shadow-lg bg-white dark:bg-lightDark py-2 text-center text-xs md:text-sm md:px-3 rounded-sm break-all"
      >
       {border}
      </Link>
     );
    })}
   </div>
  </div>
 );
};

export default Borders;
