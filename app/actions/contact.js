'use server';

import db from '@/lib/db';
// We'll import nodemailer if we were doing real emails, but for now we'll do the logic and log it.
// import nodemailer from 'nodemailer';

export async function submitContactForm(prevState, formData) {
    const name = formData.get('name');
    const role = formData.get('role');
    const area = formData.get('area');
    const phone = formData.get('phone');
    const pkg = formData.get('package');
    const message = formData.get('message');

    // Basic Validation
    if (!name || !phone) {
        return { success: false, message: 'Name and Phone are required.' };
    }

    try {
        // 1. Save to Database (if available)
        if (db) {
            const stmt = db.prepare(`
                INSERT INTO leads (name, role, area, phone, package, message)
                VALUES (?, ?, ?, ?, ?, ?)
            `);

            const info = stmt.run(name, role, area, phone, pkg, message);
            console.log(`[DB] Lead saved with ID: ${info.lastInsertRowid}`);
        } else {
            console.log(`[LOGGING MODE] Database not available. Lead details:`, { name, role, area, phone, pkg, message });
        }

        // 2. Send Notification Email (Simulation)
        // In a real app: await transporter.sendMail(...)
        console.log(`
      [EMAIL NOTIFICATION]
      To: hello@nextchair.in
      Subject: New Lead from ${name}
      ----------------------------------------
      Name: ${name}
      Role: ${role}
      Area: ${area}
      Phone: ${phone}
      Package: ${pkg}
      Message: ${message}
      ----------------------------------------
    `);

        return { success: true, message: 'Thank you! We will contact you shortly.' };
    } catch (error) {
        console.error('Submission error:', error);
        return { success: false, message: 'Something went wrong. Please try again.' };
    }
}
