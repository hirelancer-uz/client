// plugins/ckeditor.js

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default ({ app }, inject) => {
  // Check if window object is available (i.e., not in SSR context)
  if (process.client) {
    // Load CKEditor only in the client-side
    import("@ckeditor/ckeditor5-vue").then((CKEditor) => {
      app.use(CKEditor.default);
      app.component("ckeditor", CKEditor.component);
    });
    // Inject CKEditor instance into Vue instances
    inject("CKEditor", ClassicEditor);
  }
};
