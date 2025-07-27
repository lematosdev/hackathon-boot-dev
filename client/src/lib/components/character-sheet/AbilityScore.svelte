<script lang="ts">
  import { getAbilityModifier, getPlusSign } from '$lib/utils';

  interface Props {
    label: string;
    value: number;
  }
  let { label, value }: Props = $props();
</script>

<div class="w-full h-34 border-3">
  <p class="uppercase text-center text-sm font-bold">{label}</p>
  <p class="grid place-items-center h-22">
    <span class="text-4xl font-">{getPlusSign(value)}{
      getAbilityModifier(value)
    }</span>
  </p>
  <div class="w-full flex justify-center">
    <input
      type="text"
      class="rounded-full w-14 h-8 text-center border-3"
      bind:value
      aria-label="{label} score"
    />
  </div>
</div>
