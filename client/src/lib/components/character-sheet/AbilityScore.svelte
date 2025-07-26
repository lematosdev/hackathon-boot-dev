<script lang="ts">
  import { getAbilityModifier } from '$lib/utils';

  interface Props {
    label: string;
    value: number;
  }
  let { label, value }: Props = $props();
</script>

<div class="w-full h-30 border">
  <p class="uppercase text-center">{label}</p>
  <p class="grid place-items-center h-19">
    <span class="text-3xl font-">+{getAbilityModifier(value)}</span>
  </p>
  <div class="w-full flex justify-center">
    <input
      type="text"
      class="rounded-full w-14 h-8 relative bottom-4 text-center"
      {value}
    />
  </div>
</div>
