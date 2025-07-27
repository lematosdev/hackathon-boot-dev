<script lang="ts">
  import CharacterCard from '$lib/components/character-selection/CharacterCard.svelte';

  interface Character {
    id: string;
    name: string;
    charClass: string;
    level: number;
    image: string;
  }

  // Example data – wire this up to your actual API or store
  const characters: Character[] = [
    { id: 'barbarian', name: 'Latte', charClass: 'Barbarian', level: 1, image: '/images/barbarian.png' },
    { id: 'bard', name: 'Copito', charClass: 'Bard', level: 3, image: '/images/bard.png' },
    { id: 'wizard', name: 'Estrella', charClass: 'Wizard', level: 2, image: '/images/wizard.png' },
    // …etc
  ];

  function selectCharacter (id: string) {
    console.log(id)
  }
</script>

<div class="max-w-4xl m-auto p-2 sm:p-8">
  <div class="mb-8 flex flex-row justify-center">
    <h1 class="text-2xl font-bold mb-4">Created Characters</h1>
  </div>
  
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
    {#each characters as char}
      <CharacterCard
        name={char.name}
        charClass={char.charClass}
        level={char.level}
        imageUrl={char.image}
        onClick={() => selectCharacter(char.id)}
      />
    {/each}
  </div>
</div>