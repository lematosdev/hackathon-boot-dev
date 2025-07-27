<script lang="ts">
  import { Select } from 'melt/builders';

  let { options, selected = $bindable(), label = 'Select' } = $props();
  type Option = (typeof options)[number];

  const select = new Select<Option>();

  $effect(() => {
    selected = select.value;
  });

  $effect(() => {
    if (selected && select.value !== selected) {
      select.value = selected;
    }
  });
</script>

{#if select}
  <button {...select.trigger} class="text-xs w-full text-left">
    {
      select.value
        ? select.value[0].toUpperCase() + select.value.substring(1)
        : label
    }
  </button>

  <div {...select.content} class="p-2 w-full">
    {#each options as option}
      <div {...select.getOption(option)} class="divide-y border-white w-full">
        {option[0].toUpperCase() + option.substring(1)}
      </div>
    {/each}
  </div>
{/if}
