<script>
export default {
  name: "directory-layout",
  props: ['banner']
}
</script>

<template>
  <div class="pt-[80px] pb-[200px] container mx-auto max-w-[1318px] flex flex-col gap-10">
    <div class="head directory-container">
      <DirectoryTitle class="flex items-center" />
      <DirectorySearch />
    </div>

    <div class="body directory-container">
      <div class="flex ">
        <DirectoryMenu class="w-full max-w-[332px]"/>
      </div>
      <div>
        <slot></slot>
        <DirectoryBanner v-if="banner" class="mt-10" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.directory-container {
  display: grid;
  grid-template-columns: 1fr 834px;
  gap: 24px;
}
</style>
