module.exports = {
  apps: [
    {
      name: 'ez-signature-frontend',
      script: './node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/home/linuxuser/ez-signature',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '~/.pm2/logs/frontend-error.log',
      out_file: '~/.pm2/logs/frontend-out.log',
      time: true
    }
  ]
};
