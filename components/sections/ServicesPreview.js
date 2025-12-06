import Link from 'next/link';
import { Target, Smartphone, Truck, Music, BarChart, PenTool, ArrowRight } from 'lucide-react';
import styles from './ServicesPreview.module.css';

const services = [
    { icon: Target, title: "Targeted Digital Campaigns", desc: "Reach your voters with precision on Facebook, Instagram, and YouTube." },
    { icon: Smartphone, title: "Social Media Management", desc: "Daily posts, reels, and community engagement to keep you visible." },
    { icon: Truck, title: "Ground Promotions", desc: "Branded vehicles, miking announcements, and route planning." },
    { icon: Music, title: "Events & Performances", desc: "Town halls, DJ events, and cultural programs to gather crowds." },
    { icon: BarChart, title: "Data & Voter Insights", desc: "Understand your constituency with surveys and sentiment analysis." },
    { icon: PenTool, title: "Branding & Merchandise", desc: "Logos, flags, caps, and t-shirts to build your visual identity." },
];

const ServicesPreview = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Everything You Need to Win</h2>
                    <p>Comprehensive services from digital strategy to on-ground execution.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <service.icon size={32} className={styles.icon} />
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                            <Link href="/services" className={styles.learnMore}>
                                Learn more <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
