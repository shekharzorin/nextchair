import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <MessageSquare size={24} color="var(--secondary)" />
                            <h3 style={{ margin: 0, color: 'white' }}>NextChair</h3>
                        </div>
                        <p>Empowering local leaders with professional digital and ground campaign services. Win your next chair with us.</p>
                    </div>

                    <div className={styles.column}>
                        <h3>Company</h3>
                        <div className={styles.linkList}>
                            <Link href="/about" className={styles.link}>About Us</Link>
                            <Link href="/services" className={styles.link}>Our Services</Link>
                            <Link href="/portfolio" className={styles.link}>Portfolio</Link>
                            <Link href="/contact" className={styles.link}>Contact</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Services</h3>
                        <div className={styles.linkList}>
                            <Link href="/services" className={styles.link}>Digital Campaigns</Link>
                            <Link href="/services" className={styles.link}>Ground Events</Link>
                            <Link href="/services" className={styles.link}>Social Media</Link>
                            <Link href="/services" className={styles.link}>Branding</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Connect</h3>
                        <p>Hyderabad, Telangana</p>
                        <p>hello@nextchair.in</p>
                        <div className={styles.socials}>
                            <Link href="#" className={styles.socialIcon}><Facebook size={20} /></Link>
                            <Link href="#" className={styles.socialIcon}><Twitter size={20} /></Link>
                            <Link href="#" className={styles.socialIcon}><Instagram size={20} /></Link>
                            <Link href="#" className={styles.socialIcon}><Linkedin size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} NextChair. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
