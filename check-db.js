const Database = require('better-sqlite3');
const db = new Database('nextchair.db');

try {
    const leads = db.prepare('SELECT * FROM leads ORDER BY created_at DESC').all();
    console.log('--- Leads in Database ---');
    if (leads.length === 0) {
        console.log('No leads found.');
    } else {
        leads.forEach(lead => {
            console.log(`[${lead.id}] ${lead.name} (${lead.role}) - ${lead.message} [${lead.created_at}]`);
        });
    }
} catch (error) {
    console.error('Error reading database:', error);
}
