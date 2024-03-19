<template>
  <div class="max-w-[400px] max-auto">
    <h1>Editor here</h1>
<!--    <ckeditor :editor="editor" v-model="editorData"></ckeditor>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: this.$CKEditor,
      editorData: '<p>Initial editor content.</p>'

    };
  },

};
</script>

<style scoped>
/* Add your component's style here */
</style>
