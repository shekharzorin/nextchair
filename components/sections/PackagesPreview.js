import Link from 'next/link';
import { Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './PackagesPreview.module.css';

const packages = [
    {
        name: "Basic",
        for: "Sarpanch / Ward Member",
        features: ["Social Media Setup", "Basic Graphic Designs", "WhatsApp Broadcast Lists", "1 Promotional Video"],
        price: "Starter Pricing",
    },
    {
        name: "Standard",
        for: "Mandal / Municipality",
        features: ["Full Digital Management", "Weekly Video Content", "Ad Campaign Setup", "Voter Data basic analysis"],
        price: "Digital Boost",
        popular: true,
    },
    {
        name: "Advanced",
        for: "MLA / Serious Contenders",
        features: ["Digital + Ground Support", "Vehicle Branding & Route", "Event Management Support", "Dedicated Campaign Manager"],
        price: "Power Pack",
    },
];

const PackagesPreview = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Choose Your Winning Package</h2>
                    <p>Flexible plans designed for campaigns of all sizes.</p>
                </div>

                <div className={styles.grid}>
                    {packages.map((pkg, index) => (
                        <div key={index} className={styles.card}>
                            {pkg.popular && <span className={styles.popularBadge}>POPULAR</span>}
                            <h3 className={styles.pkgName}>{pkg.name}</h3>
                            <span className={styles.pkgFor}>{pkg.for}</span>
                            <p className={styles.price}>{pkg.price}</p>

                            <ul className={styles.features}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className={styles.feature}>
                                        <Check size={16} className={styles.check} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button href="/packages" variant={pkg.popular ? "primary" : "outline"} fullWidth>
                                View Details
                            </Button>
                        </div>
                    ))}
                </div>

                <div className={styles.viewAll}>
                    <Link href="/packages" style={{ textDecoration: 'underline', color: 'var(--primary)' }}>View all features & pricing</Link>
                </div>
            </div>
        </section>
    );
};

export default PackagesPreview;
