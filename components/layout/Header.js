"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, Menu } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './Header.module.css';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <MessageSquare size={28} className={styles.logoIcon} strokeWidth={2.5} />
                    <span>NextChair</span>
                </Link>

                <nav className={styles.navLinks}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/packages" className={styles.link}>Packages</Link>
                    <Link href="/portfolio" className={styles.link}>Portfolio</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                </nav>

                <div className={styles.actions}>
                    <Button href="/contact" variant="primary" size="sm" className={styles.ctaButton}>
                        Talk to Us
                    </Button>
                    <button className={styles.menuButton}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
