import Color from "./Color";

const Colors = ({colors}) => {  
    return (
      <ul>
        {colors.map((color) => 
         <Color key={color.name} color={color}/>
        )}
      </ul>
    );
  };
 export default Colors