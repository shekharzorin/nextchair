import { icons } from 'lucide-react';
import styles from './page.module.css';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

// Using names of icons, logic to render them
import { Target, Smartphone, Video, MessageCircle, Mic, Store, Users, Flag } from 'lucide-react';

const digitalServices = [
    {
        icon: Target,
        title: "Targeted Digital Campaigns",
        desc: "Precision advertising on Meta (Facebook/Instagram) and YouTube to ensure your message reaches the right voters in your constituency.",
        features: ["Ad strategy tailored to your area", "Audience demographics targeting", "Budget optimization"]
    },
    {
        icon: Smartphone,
        title: "Social Media Management",
        desc: "Build a strong, consistent online presence that engages young and old voters alike.",
        features: ["Profile setup & optimization", "Daily posts & Reels", "Comment moderation"]
    },
    {
        icon: Video,
        title: "Graphic & Video Content",
        desc: "High-quality visuals that tell your story effectively. From campaign promises to attack rebuttals.",
        features: ["Posters & Thumbnails", "Short videos/Reels", "Campaign Intro Videos"]
    },
    {
        icon: MessageCircle,
        title: "WhatsApp & SMS Campaigns",
        desc: "Direct communication with voters through their most used apps.",
        features: ["Broadcast list management", "Template messages", "Compliance guidance"]
    }
];

const groundServices = [
    {
        icon: Mic,
        title: "Promotional Vehicles",
        desc: "branded vehicles that roam your constituency with announcements and songs.",
        features: ["Bolero/Auto branding", "PA Sound Systems", "Route Planning"]
    },
    {
        icon: Users,
        title: "Community Events",
        desc: "Organize impactful town halls and local gatherings to connect face-to-face.",
        features: ["Stage & Sound Setup", "Crowd management", "Cultural programs"]
    },
    {
        icon: Store,
        title: "Food & Logistics",
        desc: "Keep your volunteers and attendees happy with organized food distribution.",
        features: ["Catering tie-ups", "Volunteer food management"]
    },
    {
        icon: Flag,
        title: "Branding & Merchandise",
        desc: "Turn your supporters into walking billboards.",
        features: ["Flags, Caps, T-shirts", "Wall Paintings", "Pamphlets"]
    }
];

export const metadata = {
    title: "Services | NextChair",
    description: "Explore our digital and ground campaign services."
};

export default function ServicesPage() {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1>Our Expert Services</h1>
                    <p>We blend modern technology with traditional campaigning to give you the winning edge.</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.categoryTitle}>Digital Warfare</h2>
                    <div className={styles.serviceGrid}>
                        {digitalServices.map((service, index) => (
                            <div key={index} className={styles.serviceItem}>
                                <div className={styles.serviceIcon}>
                                    <service.icon size={32} />
                                </div>
                                <div className={styles.serviceContent}>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <ul className={styles.features}>
                                        {service.features.map((f, i) => (
                                            <li key={i}><span className={styles.bullet}></span>{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <h2 className={styles.categoryTitle}>Ground Domination</h2>
                    <div className={styles.serviceGrid}>
                        {groundServices.map((service, index) => (
                            <div key={index} className={styles.serviceItem}>
                                <div className={styles.serviceIcon}>
                                    <service.icon size={32} />
                                </div>
                                <div className={styles.serviceContent}>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <ul className={styles.features}>
                                        {service.features.map((f, i) => (
                                            <li key={i}><span className={styles.bullet}></span>{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
