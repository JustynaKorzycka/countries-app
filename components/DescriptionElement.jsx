const DescriptionElement = ({ title, text }) => {
 return (
  <p>
   <span className="font-semibold">{title}:</span>
   &nbsp; {text}
  </p>
 );
};

export default DescriptionElement;
