import UndoButton from "@/components/CountryDesc/UndoButton";
import React from "react";

const NotFoundPage = () => {
 return (
  <>
   <UndoButton />
   <h1 className="text-center mb-4">There is no such country</h1>
   <p className="text-center"> Please try to select another country.</p>
  </>
 );
};

export default NotFoundPage;
