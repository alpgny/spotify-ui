import React from "react";
import { ReactComponent as BackIcon} from '../svgs/back.svg'
import { ReactComponent as NextIcon} from '../svgs/next.svg'



import Categories from "./categories";

const Main = () => {
    return(
      <div className='Main'>
         <div className="upperNav">
         <BackIcon/> 
          <NextIcon/>

         </div>
          <div className="mainContent"> 
          <Categories />
         </div>
      </div>
    )

}

export default Main