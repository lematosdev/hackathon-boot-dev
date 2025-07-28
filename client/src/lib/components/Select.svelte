<script lang="ts">
  import { Select } from 'melt/builders';

  let { options, selected = $bindable(), label = 'Select' } = $props();
  type Option = (typeof options)[number];

  const select = new Select<Option>();

  $effect(() => {
    selected = select.value;
  });

  const inputName = label.split(' ')[2].toLowerCase();
</script>

{#if select}
  <button {...select.trigger} class="text-xs w-full text-left">
    {selected ? selected[0].toUpperCase() + selected.substring(1) : label}
  </button>

  <div {...select.content} class="p-2 w-full">
    {#each options as option}
      <div {...select.getOption(option)} class="divide-y border-white w-full">
        {option[0].toUpperCase() + option.substring(1)}
      </div>
      <input type="hidden" name={inputName} value={selected} required />
    {/each}
  </div>
{/if}
