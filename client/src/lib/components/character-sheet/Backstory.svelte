<script lang="ts">
  import { camelCaseToNormalText } from '$lib/utils';

  let { backstory } = $props();
</script>

<div
  class="w-full h-[560px] md:h-full md:w-[356px] p-3 bg-gray-600/25 rounded-2xl flex flex-col gap-y-4 justify-start bg-[url(/sheet/traits.svg)] bg-no-repeat bg-size-[auto_96%] bg-center"
>
  {#each Object.keys(backstory) as bg}
    <div class="h-full flex flex-col justify-around p-2">
      <textarea
        name={bg}
        id={bg}
        class="text-xs h-full border-0 resize-none focus:ring-0"
        bind:value={backstory[bg as keyof typeof backstory]}
      ></textarea>
      <p class="uppercase text-sm text-center">
        {camelCaseToNormalText(bg)}
      </p>
    </div>
  {/each}
</div>
