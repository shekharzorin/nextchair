import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.badge}>NextChair Political Tech</span>
                    <h1 className={styles.title}>
                        Win Your Next Chair with Smarter Campaign Support
                    </h1>
                    <p className={styles.subtitle}>
                        NextChair helps political leaders run powerful digital and ground campaigns – from social media to vehicles, events, and voter connection. Be the leader your people need.
                    </p>
                    <div className={styles.buttonGroup}>
                        <Button href="/contact" variant="primary" size="lg">
                            Talk to Our Team
                        </Button>
                        <Button href="/packages" variant="outline" size="lg">
                            View Packages
                        </Button>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/hero.png"
                        alt="Political Campaign Success"
                        width={600}
                        height={400}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
