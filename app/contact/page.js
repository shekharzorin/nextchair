"use client";

import { useActionState } from 'react';
import Button from '@/components/ui/Button';
import styles from './page.module.css';
import { submitContactForm } from '@/app/actions/contact';

const initialState = {
    success: false,
    message: '',
};

export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    return (
        <div style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className={styles.section}>
                    <div className={styles.formContainer}>
                        <h1 className={styles.heading}>Talk to Our Team</h1>

                        {state.success ? (
                            <div style={{ textAlign: 'center', padding: '60px 0' }}>
                                <h2 style={{ color: 'green', marginBottom: '16px' }}>Thank You!</h2>
                                <p>{state.message}</p>
                                <Button href="/" variant="outline" style={{ marginTop: '24px' }}>Back to Home</Button>
                            </div>
                        ) : (
                            <form action={formAction}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Full Name *</label>
                                    <input name="name" type="text" className={styles.input} required placeholder="Enter your name" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Role / Position *</label>
                                    <select name="role" className={styles.select} required>
                                        <option value="">Select Role</option>
                                        <option value="Sarpanch Candidate">Sarpanch Candidate</option>
                                        <option value="Ward Member">Ward Member</option>
                                        <option value="Mandal/ZPTC">Mandal / ZPTC Leader</option>
                                        <option value="Municipal Councilor">Municipal Councilor</option>
                                        <option value="MLA/MP">MLA / MP Candidate</option>
                                        <option value="Party In-charge">Party In-charge</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Constituency / Area *</label>
                                    <input name="area" type="text" className={styles.input} required placeholder="e.g. Medchal, Warangal East" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Phone Number *</label>
                                    <input name="phone" type="tel" className={styles.input} required placeholder="90000 00000" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Interested Package</label>
                                    <select name="package" className={styles.select}>
                                        <option value="Not Sure">Not Sure</option>
                                        <option value="Basic">Basic (Sarpanch/Ward)</option>
                                        <option value="Standard">Standard (Mandal/Municipality)</option>
                                        <option value="Advanced">Advanced (MLA/District)</option>
                                        <option value="Premium">Premium / Elite</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Message / Specific Needs</label>
                                    <textarea name="message" className={styles.textarea} placeholder="Tell us more about your campaign goals..."></textarea>
                                </div>

                                {state.message && !state.success && (
                                    <p style={{ color: 'red', marginBottom: '16px' }}>{state.message}</p>
                                )}

                                <Button type="submit" fullWidth size="lg" disabled={isPending}>
                                    {isPending ? 'Submitting...' : 'Submit Enquiry'}
                                </Button>
                            </form>
                        )}
                    </div>

                    <div className={styles.infoContainer}>
                        <div className={styles.infoBox}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Call Us</span>
                                <a href="tel:+919100000000" className={styles.infoValue}>+91 91000 00000</a>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>WhatsApp</span>
                                <a href="https://wa.me/910000000000" className={styles.infoValue}>Chat with us</a>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Email</span>
                                <a href="mailto:hello@nextchair.in" className={styles.infoValue}>hello@nextchair.in</a>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Office</span>
                                <p style={{ marginTop: '4px', lineHeight: '1.4' }}>
                                    Hitech City, Hyderabad<br />Telangana, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
