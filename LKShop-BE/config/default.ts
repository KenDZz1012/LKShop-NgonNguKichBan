export default {
    app: {
        port: 8000,
        views_floder: __dirname + '/../src/apps/views',
        static_folder: __dirname + '/../src/public',
        temp: __dirname + "/../temp",
        dbUri:'mongodb://localhost:27017/KenStore',
        token:{
            SERVER_TOKEN_EXPIRETIME: 3600,
            SERVER_TOKEN_ISSUER: "coolIssuer",
            SERVER_TOKEN_SECRET: "superencryptedsecret"
        }
    },
    mail: {
        host: "smtp.gmail.com",
        post: 587,
        secure: false,
        auth: {
            user: "kienteo1012@gmail.com",
            pass: "feukpqumpzthjsee",
        }
    },
}