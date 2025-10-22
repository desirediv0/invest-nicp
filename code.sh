sudo certbot certonly --nginx -d investnicp.com -d www.investnicp.com


ls -l /etc/nginx/sites-enabled/

sudo nano /etc/nginx/sites-available/invest


cat invest
# Redirect HTTP → HTTPS
server {
    listen 80;
    server_name investnicp.com www.investnicp.com;
    return 301 https://$host$request_uri;
}

# HTTPS server block
server {
    listen 443 ssl http2;
    server_name investnicp.com www.investnicp.com;

    # SSL certificates (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/investnicp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/investnicp.com/privkey.pem;

    # Security + performance SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
    ssl_ecdh_curve secp384r1;
    ssl_session_cache shared:SSL_INVESTNICP:10m;
    ssl_session_tickets off;
    # ssl_stapling on;
    # ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 10s;

    # Proxy to backend (Next.js app on port 7011)
    location / {
        proxy_pass http://localhost:7011;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

sudo ln -s /etc/nginx/sites-available/invest /etc/nginx/sites-enabled/


# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx



