import { User, Users, Landmark, Award } from 'lucide-react';
import styles from './WhoWeHelp.module.css';

const roles = [
    { icon: User, label: "Sarpanch & Panchayat Leaders" },
    { icon: Users, label: "Mandal & Municipality Leaders" },
    { icon: Landmark, label: "MLA & MP Candidates" },
    { icon: Award, label: "Party & District In-charges" },
];

const WhoWeHelp = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Designed for Real Indian Politics</h2>
                    <p>We work with leaders at every level of governance.</p>
                </div>

                <div className={styles.grid}>
                    {roles.map((role, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <role.icon size={28} />
                            </div>
                            <h3 className={styles.role}>{role.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeHelp;
