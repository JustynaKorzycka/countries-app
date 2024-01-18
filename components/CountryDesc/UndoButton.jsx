import Link from "next/link";

const UndoButton = () => {
 return (
  <Link
   href="/"
   className="rounded-md  drop-shadow-md  hover:drop-shadow-2xl bg-white dark:bg-lightDark py-2.5 px-8 font-semibold mb-6 inline-block"
  >
   &#10229; &nbsp;Back
  </Link>
 );
};

export default UndoButton;
