import styles from './page.module.css';
import CTASection from '@/components/sections/CTASection';

const steps = [
    { title: "Talk to Us", desc: "Schedule a free consultation call. Tell us about your constituency, your goals, and your budget." },
    { title: "Choose Your Package", desc: "Based on your needs, we recommend a package (Standard, Advanced, etc.) or a custom plan." },
    { title: "Campaign Planning", desc: "Our team creates a content calendar, plans ground events, and sets up your social media channels." },
    { title: "Execution", desc: "We roll out the campaign. Videos go live, vehicles start roaming, and events take place." },
    { title: "Review & Improve", desc: "We monitor performance, gather voter feedback, and tweak strategies for maximum impact." }
];

export const metadata = {
    title: "How It Works | NextChair",
    description: "Our simple 5-step process to launch your political campaign."
};

export default function HowItWorksPage() {
    return (
        <>
            <div style={{ padding: '80px 0 40px', textAlign: 'center', background: 'var(--surface)' }}>
                <div className="container">
                    <h1 style={{ marginBottom: '16px' }}>How We Work</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-light)' }}>
                        Simple, transparent, and effective. Here is how your campaign comes to life.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className={styles.section}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.number}>{index + 1}</div>
                            <div className={styles.content}>
                                <h2>{step.title}</h2>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CTASection />
        </>
    );
}
