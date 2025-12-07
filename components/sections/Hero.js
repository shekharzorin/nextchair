import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <Image
                src="/images/hero.png"
                alt="Political Campaign Crowd"
                fill
                className={styles.bgImage}
                priority
            />
            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.badge}>NextChair Political Tech</span>
                    <h1 className={styles.heading}>
                        Win Your Next Chair with <span className={styles.highlight}>Smarter</span> Campaign Support
                    </h1>
                    <p className={styles.subheading}>
                        NextChair helps political leaders run powerful digital and ground campaigns – from social media to vehicles, events, and voter connection. Be the leader your people need.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button href="/contact" variant="primary" size="lg">
                            Talk to Our Team
                        </Button>
                        <Button href="/packages" variant="outline" size="lg">
                            View Packages
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
