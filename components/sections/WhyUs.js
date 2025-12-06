import { MapPin, Languages, Layers, TrendingUp } from 'lucide-react';
import styles from './WhyUs.module.css';

const reasons = [
    {
        icon: MapPin,
        title: "Local Politics Experts",
        desc: "We understand the dynamics of Indian elections from Sarpanch to MLA levels."
    },
    {
        icon: Layers,
        title: "All-in-One Solution",
        desc: "No need to juggle multiple agencies. We handle digital, ground, and creative under one roof."
    },
    {
        icon: Languages,
        title: "Local Language Focus",
        desc: "Content created in Telugu and local dialects that connects deeply with voters."
    },
    {
        icon: TrendingUp,
        title: "Scalable Campaigns",
        desc: "Strategies that grow with you. Start small and expand as the election dates closer."
    }
];

const WhyUs = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Why Leaders Choose NextChair</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>The difference between participating and winning.</p>
                </div>

                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.iconWrapper}>
                                <reason.icon size={36} className={styles.icon} />
                            </div>
                            <h3 className={styles.title}>{reason.title}</h3>
                            <p className={styles.desc}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
