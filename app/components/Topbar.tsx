import Link from 'next/link';
import styles from '../page.module.css';
const { top_bar, bar_link } = styles;

const Topbar = () => {
  return (
    <nav className={top_bar}>
      <Link className={bar_link} href={'/'}>
        Home
      </Link>
      <Link className={bar_link} href={'/about'}>
        About
      </Link>
      <Link className={bar_link} href={'/products'}>
        Products
      </Link>
      <Link className={bar_link} href={'/gallery'}>
        Gallery
      </Link>
      <Link className={bar_link} href={'/contact'}>
        Contact
      </Link>
    </nav>
  );
};
export default Topbar;
