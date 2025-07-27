<script lang="ts">
  interface Props {
    label: string;
  }
  let { label }: Props = $props();
</script>

<div class="flex flex-col">
  <input class="border-none" type="text" id="class" name="class" required />
  <label for="class" class="uppercase border-t-1">{label}</label>
</div>
