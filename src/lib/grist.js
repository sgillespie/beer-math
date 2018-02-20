import map from 'ramda/src/map';
import reduce from 'ramda/src/reduce';

export default function calculateGrist(gravity, volume, efficiency, grains) {
  const weight = totalGristWeight(gravity, volume, efficiency, grains);

  return {
    weight,
    grains: grainWeights(weight, grains),
  };
}

export function totalGristWeight(gravity, volume, efficiency, grains) {
  const avgPpg = reduce(
    (accum, grain) => accum + (grain.maxPpg * grain.proportion),
    0,
    grains);

  return (gravity * volume) / (efficiency * avgPpg);
}

export function grainWeight(totalWeight, proportion) {
  return totalWeight * proportion;
}

export function grainWeights(totalWeight, grains) {
  return map(grain => ({
    weight: grainWeight(totalWeight, grain.proportion),
    ...grain,
  }), grains);
}
