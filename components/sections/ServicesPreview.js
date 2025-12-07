import Link from 'next/link';
import { Target, Users, Megaphone, Smartphone, BarChart, PenTool, ArrowRight } from 'lucide-react';
import styles from './ServicesPreview.module.css';

const services = [
    { icon: Target, title: "Targeted Influence", description: "Reach specific voter segments with precision digital ads." },
    { icon: Users, title: "Ground Mobilization", description: "Organize rallies and door-to-door campaigns effectively." },
    { icon: Megaphone, title: "Strategic Branding", description: "Build a powerful personal brand that voters trust." },
    { icon: Smartphone, title: "Social Domination", description: "Rule WhatsApp, Facebook, and Instagram feeds." },
];

const ServicesPreview = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Win Every <span style={{ color: 'var(--primary)' }}>Booth</span></h2>
                    <p className={styles.subtitle}>Comprehensive strategies to capture the vote bank.</p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>

                            <ul className={styles.features}>
                                <li><div style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }}></div> Data Driven</li>
                                <li><div style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }}></div> High Impact</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
