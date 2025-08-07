
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import("next").NextConfig} */

// Static exports are needed to deploy in Github Pages.

const nextConfig = {

    allowedDevOrigins: ["Put IP here."],

    /**
     * Enable static exports for the App Router.
     *
     * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
     */
    output: "export",

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
     */
    images: { unoptimized: true },

    reactStrictMode: true

}

export default withNextIntl( nextConfig )