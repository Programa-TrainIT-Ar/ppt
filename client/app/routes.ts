import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("bulletins", "./routes/bulletins.tsx")] satisfies RouteConfig;
