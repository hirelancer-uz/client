<script>
export default {
  name: "directory-layout",
  props: ['banner']
}
</script>

<template>
  <div class="pt-[80px] pb-[200px] container mx-auto max-w-[1318px] flex flex-col gap-10 xl:gap-6 xl:pb-12 xl:pt-6">
    <div class="head directory-container">
      <DirectoryTitle class="flex items-center xl:hidden" />
      <DirectorySearch />
    </div>

    <div class="body directory-container">
      <div class="flex ">
        <DirectoryMenu class="w-full max-w-[332px] xl:max-w-full"/>
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
@media (max-width: 1200px) {
  .directory-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
