<script lang="ts">
  import { loadCharacter } from '$lib/utils';
  interface Props {
    charName: string;
    charClass: string;
    level: number;
    imageUrl?: string;
    href?: string;
  }

  let {
    charName = '',
    charClass = '',
    level = 0,
    imageUrl = '',
    href = '/character-creator',
  }: Props = $props();

</script>

<a
  {href}
  class="border border-gray-600 cursor-pointer flex flex-col sm:flex-row p-4 my-4 hover:border-yellow-500"
  onclick={(event) => {
    event.preventDefault();
    loadCharacter(charName);
  }}
>
  <div
    class="flex-2 mr-0 sm:mr-4 mb-2 sm:mb-0 flex justify-center relative w-48 h-48"
  >
    <!-- Placeholder -->
    <div
      class="absolute inset-0 bg-gray-200 rounded"
    >
    </div>
    <!--  -->
    <img
      width="288"
      height="192"
      class="rounded object-cover w-full h-full"
      src={imageUrl}
      alt="{charName} portrait"
    >
  </div>

  <div class="flex-1">
    <h2 class="text-2xl mb-2 font-bold">{charName.toUpperCase()}</h2>

    <p class="sm:block">{charClass} Level: {level}</p>
  </div>
</a>
