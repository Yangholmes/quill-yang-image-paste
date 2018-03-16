# Quill 剪贴板图片粘贴插件

用于剪贴板图片粘贴

How to use...
1. install this module
```
npm install quill-yang-image-paste
```
2. import module from ```node_modules```
```
import 'quill-yang-image-paste';
```
3. For Example (Vue.js)

```html
<template lang="html">
    <div class="quill">
        <quill-editor v-model="content">
  </quill-editor>
    </div>
</template>

<script>
import Quill from 'quill';
import {quillEditor} from 'vue-quill-editor'; // use `vue-quill-editor` component
import ImagePaste from 'quill-yang-image-paste';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

Quill.register('modules/imagePaste', ImagePaste);

export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: '<h2>I am an Example</h2>',
            editorOption: {
                modules: {
                    imagePaste: true
                }
            }
        };
    }
};
</script>

<style>
</style>

```

enjoy~
