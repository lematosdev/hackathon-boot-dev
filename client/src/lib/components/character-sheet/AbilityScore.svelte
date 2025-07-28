<script lang="ts">
	import { currentCharacter, saveCurrent } from "$lib/stores/characters";
	import { getAbilityModifier, getPlusSign } from "$lib/utils";

	interface Props {
		label: string;
		value: number;
	}
	let { label, value }: Props = $props();
</script>

<div
	class="w-full h-20 md:h-36 bg-[url(/sheet/abilities-bg.svg)] bg-no-repeat bg-center bg-contain text-[8px] md:text-xs pt-2 md:pt-5"
>
	<p class="uppercase text-center font-semibold">{label}</p>
	<p class="grid place-items-center relative top-1 md:top-3 text-sm">
		<span class="md:text-3xl"
			>{getPlusSign(value)}{getAbilityModifier(value)}</span
		>
	</p>
	<input
		type="text"
		class="border-0 w-full h-8 text-center text-white focus:ring-0 relative top-2.5 md:top-6 text-xs md:text-2xl"
		bind:value
		oninput={() =>
			saveCurrent({
				attributes: {
					...$currentCharacter.attributes,
					[label.toLowerCase()]: Number(value) || 0
				}
			})}
		aria-label="{label} score"
	/>
</div>
