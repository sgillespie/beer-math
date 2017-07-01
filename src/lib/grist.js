import map from 'lodash.map';
import reduce from 'lodash.reduce';

export default function calculateGrist(gravity, volume, efficiency, grains) {
  const weight = totalGristWeight(gravity, volume, efficiency, grains);

  return {
    weight,
    grains: grainWeights(weight, grains),
  };
}

export function totalGristWeight(gravity, volume, efficiency, grains) {
  const avgPpg = reduce(grains,
    (accum, grain) => accum + (grain.maxPpg * grain.proportion), 0);

  return (gravity * volume) / (efficiency * avgPpg);
}

export function grainWeight(totalWeight, proportion) {
  return totalWeight * proportion;
}

export function grainWeights(totalWeight, grains) {
  return map(grains, grain => ({
    weight: grainWeight(totalWeight, grain.proportion),
    ...grain,
  }));
}
