import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/Blamxis?tab=repositories"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/maxime-gavinet-35b22428a/"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/maxime_codes/"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}

export default Social;