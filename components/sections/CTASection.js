import Button from '@/components/ui/Button';
import styles from './CTASection.module.css';

const CTASection = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Ready to Start Your Campaign?</h2>
                <p className={styles.subtitle}>
                    Whether you are contesting for Sarpanch or MLA, early planning is the key to victory.
                    Let's build your strategy today.
                </p>
                <div className={styles.actions}>
                    <Button href="/contact" variant="primary" size="lg">
                        Book a Free Strategy Call
                    </Button>
                    <Button href="https://wa.me/910000000000" variant="outline" size="lg">
                        WhatsApp Us
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
