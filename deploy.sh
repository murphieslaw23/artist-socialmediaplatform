#!/bin/bash
echo "Building app.."
npm run build

echo "Restarting PM2.."
npm run pm2:reload

echo "Deployed successfully!"