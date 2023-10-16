

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Skeleton } from '@mui/material';
const Shimmer=()=>{
    return(
        <div className="shimmer-container">
            {/* <LinkedInIcon/> */}
            {/* <Skeleton variant="rectangular" width={210} height={118}/> */}
            <div className="shimmer-card">  </div>
            <div className="shimmer-card">  </div>
            <div className="shimmer-card">  </div>
            <div className="shimmer-card">  </div>
            <div className="shimmer-card"> </div>
            <div className="shimmer-card"> </div>

            <div className="shimmer-card">  </div>
            <div className="shimmer-card">  </div>
            <div className="shimmer-card"> </div>

            <div className="shimmer-card"> </div>
            <div className="shimmer-card"> </div>
            <div className="shimmer-card"> </div>
        </div>
    )
}
export default Shimmer;