// Small convenience function to merge a bunch of optionally falsy class names
export function concatCss(...classNames) {
  return classNames.filter(v => !!v).join(" ");
}
