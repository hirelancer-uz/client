<template>
  <div>
    <textarea :id="editorId" v-if="isBrowser"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      editorId: `editor-${Math.random().toString(36).substr(2, 9)}`,
      editor: null,
      isBrowser: false
    };
  },
  mounted() {
    this.isBrowser = typeof window !== 'undefined';

    if (this.isBrowser) {
      import('@ckeditor/ckeditor5-build-classic')
          .then(ClassicEditor => {
            ClassicEditor
                .create(document.getElementById(this.editorId), {
                  // Configuration options
                })
                .then(editor => {
                  this.editor = editor;
                  editor.setData(this.value);
                  editor.model.document.on('change:data', () => {
                    this.$emit('input', editor.getData());
                  });
                })
                .catch(error => {
                  console.error(error);
                });
          })
          .catch(error => {
            console.error(error);
          });
    }
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }
};
</script>

<style scoped>
/* Add your component's style here */
</style>
