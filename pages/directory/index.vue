<script>
export default {
  name: "index",
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
};
</script>

<template>
  <DirectoryLayout :banner="true">
    <DirectoryChilds class="xl:hidden"/>
  </DirectoryLayout>
</template>

<style scoped lang="css"></style>
