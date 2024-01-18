"use client";

const Error = ({ error }) => {
 console.log(error);
 return (
  <>
   <h1 className="text-center mb-4"> An error occurred!</h1>
   <p className="text-center"> Please try again later.</p>
  </>
 );
};

export default Error;
