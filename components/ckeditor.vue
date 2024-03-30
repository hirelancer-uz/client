<template>
  <ckeditor
    :editor="editor"
    :value="value"
    :config="config"
    :tagName="tagName"
    :disabled="disabled"
    @input="(event) => $emit('onchange', event)"
  />
</template>

<script>
let ClassicEditor;
let CKEditor;

if (process.client) {
  ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
  CKEditor = require("@ckeditor/ckeditor5-vue2");
} else {
  CKEditor = { component: { template: "<div></div>" } };
}

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    value: String,
    tagName: {
      type: String,
      default: "div",
    },
    disabled: Boolean,
    uploadUrl: String,
 
  },
  data() {
    return {
      editor: ClassicEditor,
      config: {
        wordCount: {
          onUpdate: stats => {
            if (stats.characters > 1000) {
              // Limit editor to 1000 characters
              // You can display a message or take other action here
            }
          }
        }
      }
    };
  },
  methods: {
    
  }
};
</script>
<style lang="css" scoped>
.ck-content {
    height: 250px !important;
}
</style>
