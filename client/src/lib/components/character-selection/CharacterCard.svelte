<script lang="ts">
  export let name: string;
  export let charClass: string;
  export let level: number;
  export let imageUrl: string;
  // export let onClick: () => void;
  export let href: string = '/character-creator';
</script>

<a
  class="border border-gray-600 cursor-pointer flex flex-col sm:flex-row p-4 my-4 hover:border-yellow-500"
  {href}
>
  <div
    class="flex-2 mr-0 sm:mr-4 mb-2 sm:mb-0 flex justify-center relative w-[192px] h-[192px]"
  >
    <!-- Placeholder -->
    <div
      class="absolute inset-0 bg-gray-200"
    >
    </div>
    <!--  -->
    <img
      width="288"
      height="192"
      class="rounded object-cover hidden sm:block"
      src={imageUrl}
      alt="{name} portrait"
    >
  </div>

  <div class="flex-1">
    <h2 class="text-2xl mb-2 font-bold">{name.toUpperCase()}</h2>

    <p class="sm:block">{charClass} Level: {level}</p>
  </div>
</a>
