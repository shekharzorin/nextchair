import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesPreview.module.css'; // Reuse generic styles or create new
// For simplicity reusing Services or inline styles for MVP, but better to have own.
// I'll create a simple module for it.
import portfolioStyles from './PortfolioPreview.module.css';

const items = [
    { title: "ZPTC Campaign", image: "/images/portfolio_rally.png", category: "Ground Event" },
    { title: "Assembly Election", image: "/images/portfolio_social.png", category: "Digital Strategy" },
    { title: "Mandal President", image: "/images/portfolio_rally.png", category: "Social Media" },
];

const PortfolioPreview = () => {
    return (
        <section className={portfolioStyles.section}>
            <div className="container">
                <div className={portfolioStyles.header}>
                    <h2 className={portfolioStyles.title}>Our Work Speaks</h2>
                    <Link href="/portfolio" className={portfolioStyles.link}>View Full Portfolio &rarr;</Link>
                </div>
                <div className={portfolioStyles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={portfolioStyles.card}>
                            <div className={portfolioStyles.preview} style={{ height: '200px', position: 'relative' }}>
                                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={portfolioStyles.info}>
                                <span style={{ fontSize: '12px', color: '#d4af37', fontWeight: 700 }}>{item.category}</span>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioPreview;
