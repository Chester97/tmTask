'use client';

import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main Navigation"
      className={styles.navbarWrapper}
    >
      <div className={styles.logoWrapper}>Y</div>
      <ul className={styles.navbarLinksWrapper}>
        <li>
          <Link
            className={cx(styles.navbarLinkElement, {
              [styles.navbarLinkElement__active]: pathname === '/',
            })}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={cx(styles.navbarLinkElement, {
              [styles.navbarLinkElement__active]:
                pathname === '/feedback',
            })}
            href="/feedback"
          >
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
};
