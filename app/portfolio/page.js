import Image from 'next/image';
import { Play } from 'lucide-react';
import styles from './page.module.css';
import CTASection from '@/components/sections/CTASection';

const works = [
    {
        category: "Ground Event",
        title: "Mandal Praja Galam Rally",
        location: "Suryapet, Telangana",
        type: "image",
        image: "/images/portfolio_rally.png"
    },
    {
        category: "Digital Strategy",
        title: "Youth Connect Campaign",
        location: "Medchal Constituency",
        type: "image",
        image: "/images/portfolio_social.png"
    },
    {
        category: "Social Media",
        title: "Election Promise Reels",
        location: "Warangal East",
        type: "video",
        image: "/images/portfolio_rally.png"
    },
    {
        category: "Branding",
        title: "Vehicle Fleet Design",
        location: "Karimnagar",
        type: "image",
        image: "/images/portfolio_social.png"
    },
    {
        category: "Events",
        title: "Town Hall Meeting",
        location: "Khammam",
        type: "image",
        image: "/images/portfolio_rally.png"
    },
    {
        category: "Campaign Song",
        title: "Victory Anthem Video",
        location: "Nalgonda",
        type: "video",
        image: "/images/portfolio_social.png"
    },
];

export const metadata = {
    title: "Portfolio | NextChair",
    description: "See our work in action. Real campaigns, real results."
};

export default function PortfolioPage() {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1>Our Work</h1>
                    <p>A glimpse into the campaigns we have powered.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.grid}>
                    {works.map((work, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.preview}>
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                {work.type === 'video' && (
                                    <div className={styles.overlay}>
                                        <div className={styles.playIcon}><Play size={20} fill="white" /></div>
                                    </div>
                                )}
                            </div>
                            <div className={styles.info}>
                                <span className={styles.category}>{work.category}</span>
                                <h3 className={styles.title}>{work.title}</h3>
                                <p className={styles.location}>{work.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CTASection />
        </>
    );
}
