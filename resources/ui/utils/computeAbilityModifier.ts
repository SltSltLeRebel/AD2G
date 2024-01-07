export default function computeAbilityModifier(abilityValue: number) {
  return Math.floor((abilityValue - 10) / 2)
}
