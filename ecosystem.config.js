module.exports = {
  apps: [{
    name: 'Libra Blockchain Explorer',
    script: 'npm start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      MONGO_URL: 'mongodb://127.0.0.1:27017/libra_dev'
    },
    env_production: {
      NODE_ENV: 'production',
      MONGO_URL: 'mongodb://127.0.0.1:27017/libra_prod'
    }
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: '18.130.169.108',
      key: '../STREAM-TEST.pem',
      ref: 'origin/dev',
      repo: 'git@github.com:librastream/librastream.git',
      path: '/var/www/librastream',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};
