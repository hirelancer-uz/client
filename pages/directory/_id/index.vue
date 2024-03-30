<script>
export default {
  name: "directory-id",
  mounted() {
    this.$store.commit("setPageData", {
      title: 'Reyting tizimi va uni ishlashi',
      center: false,
      info: "",
      link: true,
    });
  },
  destroyed() {
    this.$store.commit("setPageData", {});
  },
}
</script>

<template>
  <div >
    <DirectoryLayout :banner="false" class="xl:hidden">
      <DirectoryChilds />
    </DirectoryLayout>
    <DirectoryView  class="hidden xl:block"/>
<!--    <DirectoryChilds/>-->
  </div>

</template>

<style scoped lang="css">

</style>
