import dotenv from 'dotenv';
dotenv.config()

const config = {
    nodeEnv: process.env['NODE_ENV'] ?? 'development',
    port: process.env['PORT'] ?? 3000,
    databaseUrl: process.env['DATABASE_URL'] ?? '',
    tokenLifetime: process.env['TOKEN_LIFETIME'] ? Number(process.env['TOKEN_LIFETIME']) : 15, // in minutes
    defaultMarketAuthorization: process.env['DEFAULT_MARKET_AUTHORIZATION'] ?? 'pk_test_YWxhZGRpbjpvcGVu'
}

export default config