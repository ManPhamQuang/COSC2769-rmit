const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            env: {
                baseApiUrl: "http://localhost:5000/api/v1",
                baseUrl: "http://localhost:3000",
            },
        };
    }

    return {
        /* config options for all phases except development here */
        env: {
            baseApiUrl: "https://the-lab-app.herokuapp.com/api/v1",
            baseUrl: "https://cosc-2769-rmit.vercel.app",
        },
    };
};
