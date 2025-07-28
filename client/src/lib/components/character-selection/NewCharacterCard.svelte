<script lang="ts">
  import { goto } from '$app/navigation';
  import { currentName } from '$lib/stores/characters';
  import { newCharacter } from '$lib/utils';
  export let href: string = '/character-creator/';
</script>

<a
  {href}
  class="border border-gray-600 cursor-pointer flex flex-col items-center justify-center sm:flex-row p-4 my-4 hover:border-yellow-500 group"
  aria-label="Create a new character"
  onclick={() => newCharacter()}
>
  <div class="flex items-center justify-center">
    <div
      class="flex flex-col items-center justify-center text-gray-400 group-hover:text-yellow-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
      <span class="text-lg font-semibold">New Character</span>
    </div>
  </div>
</a>
