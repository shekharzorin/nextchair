import { Check } from 'lucide-react';
import styles from './page.module.css';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const packages = [
    {
        name: "Basic",
        target: "Sarpanch / Ward Member",
        price: "₹15,000",
        period: "/ month",
        features: [
            "Social Media Setup (FB/Insta)",
            "3 Graphic Posts per week",
            "WhatsApp Broadcast Lists Setup",
            "1 Promotional Video (Standard)",
            "Basic Support"
        ]
    },
    {
        name: "Standard",
        target: "Mandal / Municipality",
        price: "₹35,000",
        period: "/ month",
        features: [
            "Full Social Media Management",
            "Daily Graphic Posts",
            "1 Campaign Song",
            "2 Promotional Videos",
            "Paid Ad Setup (Ad budget extra)"
        ],
        popular: true
    },
    {
        name: "Advanced",
        target: "MLA / District Leaders",
        price: "₹80,000",
        period: "/ month",
        features: [
            "Everything in Standard",
            "Ground Team Coordination",
            "Vehicle Branding Designs",
            "Weekly Video Shoots",
            "Voter Data Analysis"
        ]
    },
    {
        name: "Premium",
        target: "Constituency Lead",
        price: "₹1.5L",
        period: "/ month",
        features: [
            "Comprehensive Digital + Ground",
            "Event Management Support",
            "Crisis Management",
            "Dedicated Campaign Manager",
            "24/7 Support"
        ]
    }
];

export const metadata = {
    title: "Packages | NextChair",
    description: "Affordable and powerful campaign packages for every leader."
};

export default function PackagesPage() {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1>Transparent Pricing</h1>
                    <p>Choose the power you need. No hidden fees. Upgrade anytime.</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {packages.map((pkg, index) => (
                            <div key={index} className={styles.card}>
                                {pkg.popular && <span className={styles.popularBadge}>POPULAR</span>}
                                <h2 className={styles.name}>{pkg.name}</h2>
                                <div style={{ textAlign: 'center' }}><span className={styles.target}>{pkg.target}</span></div>
                                <div className={styles.price}>{pkg.price} <span>{pkg.period}</span></div>

                                <ul className={styles.features}>
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <Check size={20} className={styles.check} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button href="/contact" variant={pkg.popular ? "primary" : "outline"} fullWidth>
                                    Choose Plan
                                </Button>
                            </div>
                        ))}
                    </div>

                    <p className={styles.note}>
                        * Prices are indicative and may vary based on exact requirements and constituency size.
                        Contact us for a custom quote.
                    </p>
                </div>
            </section>

            <CTASection />
        </>
    );
}
