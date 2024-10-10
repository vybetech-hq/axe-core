export default function pageHasHeaderEvaluate(node) {
  const h1Exists = node.querySelector('h1') !== null;
  return h1Exists;
}
