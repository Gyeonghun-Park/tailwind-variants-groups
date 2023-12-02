import { type LoaderDefinitionFunction } from "webpack";

const loader: LoaderDefinitionFunction = function (source) {
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

  const classNameRegex = /className\s*:\s*\"(.*?)\"/gm;
  const classNameMatches = [...source.matchAll(classNameRegex)];

  classNameMatches.forEach(([matchStr, className]) => {
    const parsedClasses = parseVariants(className);
    source = source.replace(matchStr, `className: "${parsedClasses}"`);
  });

  return source;
};

export default loader;
