<script lang="ts">
	import { onMount } from "svelte";
	import CharacterCard from "$lib/components/character-selection/CharacterCard.svelte";
	import NewCharacterCard from "$lib/components/character-selection/NewCharacterCard.svelte";
	import type { CharacterSheet } from "../../../types/characterSheet";
	import { elenorSwiftleaf, thorgarIronfist } from "$lib/utils/testcharacters";
	import { saveTestCharacters } from "$lib/utils";
	import { characterList } from "$lib/stores/characters";

	const testCharacters: CharacterSheet[] = [elenorSwiftleaf, thorgarIronfist];

	onMount(() => {
		saveTestCharacters(testCharacters);
	});
</script>

<div class="max-w-8xl m-auto p-2 sm:p-8">
	<div class="mb-8 flex flex-row justify-center">
		<h1 class="text-2xl font-bold mb-4">Created Characters</h1>
	</div>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
		{#each $characterList ?? [] as char (char.characterName)}
			<CharacterCard
				charName={char.characterName}
				charClass={char.class}
				level={char.level}
				imageUrl={""}
			/>
		{/each}
		<NewCharacterCard />
	</div>
</div>
