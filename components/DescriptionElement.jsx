const DescriptionElement = ({ title, text }) => {
 return (
  <p className=" text-sm sm:text-base">
   <span className="font-semibold">{title}:</span>
   &nbsp; {text}
  </p>
 );
};

export default DescriptionElement;
