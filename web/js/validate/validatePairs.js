export function validatePairs(pairs) {
  const errors = [];

  for (const p of pairs) {
    if (!p.id || !p.category) {
      errors.push(`Pair ohne id oder category`);
    }
    if (p.a.word === p.b.word && !p.meta?.semantic_mode) {
      errors.push(`Pair ${p.id}: Gleiches Wort ohne semantic_mode`);
    }
  }

  return errors;
}

