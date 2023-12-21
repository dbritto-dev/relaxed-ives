const withNextIntl = require("next-intl/plugin")("./app/_i18n/index.ts");

/** @type {import('next').NextConfig} */
const config = {};

module.exports = withNextIntl(config);
