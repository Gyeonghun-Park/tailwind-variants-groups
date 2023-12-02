import type { Config } from "tailwindcss";

const parseVariants = (code: string) => {
  const variantGroupsRegex = /([a-z\-0-9:]+:)\((.*?)\)/g;
  const variantGroupMatches = [...code.matchAll(variantGroupsRegex)];

  variantGroupMatches.forEach(([matchStr, variants, classes]) => {
    const parsedClasses = classes
      .split(" ")
      .map((cls) => variants + cls)
      .join(" ");

    code = code.replace(matchStr, parsedClasses);
  });
  return code;
};

const config: Config = {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    transform: parseVariants,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
