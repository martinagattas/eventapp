import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const FooterLeft = () => {
    return(
        <div style={{display: "flex"}}>
            <img src="../../DigitalHouse_Logo_Black.png" alt="logo"/>
        </div>
    )
}

const SocialMedia = () => {
    return (
        <div style={{display: "flex", width: "100%", columnGap: "1rem", justifyContent: "flex-end", marginRight: "2rem" }}>
            <a href="https://www.linkedin.com/feed/" style={{ color: 'inherit' }}><LinkedInIcon></LinkedInIcon></a>
            <a href="https://www.linkedin.com/feed/" style={{ color: 'inherit' }}><InstagramIcon></InstagramIcon></a>
            <a href="https://www.linkedin.com/feed/" style={{ color: 'inherit' }}><FacebookIcon></FacebookIcon></a>
            <a href="https://www.linkedin.com/feed/" style={{ color: 'inherit' }}><TwitterIcon></TwitterIcon></a>
        </div>
    )
}

const Footer = () => {
    return (
        <footer style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgba(64, 173, 141)", height: "7rem"}}>
            <FooterLeft/>
            <SocialMedia/>
        </footer>
    )
}

export default Footer
