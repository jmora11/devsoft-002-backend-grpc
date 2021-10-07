export default {
    bdHost: process.env.DB_HOST || '127.0.0.1',
    bdName: process.env.DB_NAME || 'testgrpc',
    bdPass: process.env.DB_PASS || 'password',
    bdPort: process.env.DB_PORT || '3306',
    bdUserName: process.env.DB_USER_NAME || 'root',
};
