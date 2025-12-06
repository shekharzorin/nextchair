import styles from './page.module.css';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
    title: "About Us | NextChair",
    description: "Learn about our mission to empower local leaders."
};

export default function AboutPage() {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1>About NextChair</h1>
                    <p style={{ opacity: 0.9 }}>Empowering the next generation of political leaders.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.story}>
                    <h2>Our Mission</h2>
                    <p>
                        NextChair was founded with a simple goal: to democratize access to professional campaign tools.
                        In the past, high-quality digital campaigns and strategic management were only available to top-tier national leaders.
                        We believe that every Sarpanch, Councilor, and MLA candidate deserves the best chance to win.
                    </p>
                    <p>
                        We combine deep ground-level understanding of Indian politics with cutting-edge technology and creative storytelling.
                        Our team consists of political strategists, digital marketers, and creative professionals who are passionate about democracy.
                    </p>
                </div>
            </div>

            <div className={styles.values}>
                <div className="container">
                    <div className={styles.header} style={{ background: 'transparent', padding: '0 0 40px', color: 'var(--text-main)' }}>
                        <h2 style={{ color: 'var(--primary)' }}>Core Values</h2>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.valueCard}>
                            <h3>Clarity</h3>
                            <p>We believe in transparent pricing and clear strategies. No jargon, just results.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Ethics</h3>
                            <p>We adhere to the highest standards of political campaigning and respect election codes.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Practicality</h3>
                            <p>Our solutions are grounded in reality. We know what works in a village and what works in a city.</p>
                        </div>
                    </div>
                </div>
            </div>

            <CTASection />
        </>
    );
}
