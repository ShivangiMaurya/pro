import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";

// import {FacebookIcon} from '@mui/icons-material';
// import StoreIcon from '@mui/icons-material/Store';
import MovieIcon from '@mui/icons-material/Movie';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <MovieIcon/> */}
        {/* <StoreIcon/> */}
        {/* <FacebookIcon/> */}
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      {/* <p> &copy; 2021 pedrotechpizza.com</p> */}
    </div>
  );
}

export default Footer;
