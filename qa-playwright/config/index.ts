import dev from "./env.dev";
import stg from "./env.stg";
import prod from "./env.prod";

const ENV = process.env.ENV || "dev";

const configs: any = { dev, stg, prod };

export default configs[ENV];
