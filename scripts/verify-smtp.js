


import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function loadEnv(envPath) {
    if (!fs.existsSync(envPath)) return;
    const content = fs.readFileSync(envPath, 'utf8');
    content.split(/\r?\n/).forEach((line) => {
        line = line.trim();
        if (!line || line.startsWith('#')) return;
        const eq = line.indexOf('=');
        if (eq === -1) return;
        const k = line.slice(0, eq).trim();
        const v = line.slice(eq + 1).trim();
        process.env[k] = v.replace(/(^"|"$)/g, '');
    });
}

(async function main() {
    const envPath = path.resolve(__dirname, '..', '.env');
    loadEnv(envPath);

    const host = process.env.NEXT_PUBLIC_SMTP_HOST;
    const port = Number(process.env.NEXT_PUBLIC_SMTP_PORT || 587);
    const user = process.env.NEXT_PUBLIC_SMTP_USER;
    const pass = process.env.NEXT_PUBLIC_SMTP_PASSWORD;

    console.log('SMTP config:', { host, port, user: user ? '***' : undefined });

    if (!host || !user || !pass) {
        console.error('Missing SMTP config in .env');
        process.exit(2);
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: false,
        auth: { user, pass },
        tls: { rejectUnauthorized: false }
    });

    try {
        await transporter.verify();
        console.log('SMTP verification: SUCCESS — transporter is ready to send messages');
        process.exit(0);
    } catch (err) {
        console.error('SMTP verification: FAILED');
        console.error(err);
        process.exit(3);
    }
})();
