import styles from './Testimonials.module.css';

const testimonials = [
    { name: "Ramesh Reddy", role: "ZPTC Candidate", text: "NextChair's digital campaign helped me reach every youth in my constituency. Highly professional!" },
    { name: "Suresh Kumar", role: "Municipal Councilor", text: "Their vehicle branding and event management were top notch. It gave my campaign a big boost." },
];

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Trusted by Leaders</h2>
                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.text}>"{t.text}"</p>
                            <div className={styles.author}>
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
