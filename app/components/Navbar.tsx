import styles from '../page.module.css';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import PatternOutlinedIcon from '@mui/icons-material/PatternOutlined';
import Link from 'next/link';
const { navbar, nav_item, nav_text, nav_logo, nav_logo_text } = styles;

const Navbar = () => {
  return (
    <nav className={navbar}>
      <Link style={{ textDecoration: 'none' }} href="/">
        <div className={nav_logo}>
          <PatternOutlinedIcon fontSize="large" color="inherit" />
          <span className={nav_logo_text}>Company Name</span>
        </div>
      </Link>
      <div className={nav_item}>
        <LocalPhoneTwoToneIcon color="inherit" />
        <span className={nav_text}>1-800-123-4567</span>
      </div>
      <div className={nav_item}>
        <PhoneAndroidTwoToneIcon color="inherit" />
        <span className={nav_text}>1-800-123-4567</span>
      </div>
      <div className={nav_item}>
        <MailOutlineTwoToneIcon color="inherit" />
        <span className={nav_text}>mail@mail.com</span>
      </div>
    </nav>
  );
};
export default Navbar;
