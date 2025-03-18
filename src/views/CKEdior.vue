<template>
   <div id="demoapp">
      <ckeditor v-model="editorData" :editor="editor" :config="editorConfig" />
   </div>
</template>

<script>
const LICENSE_KEY = '';
const CKBOX_TOKEN_URL = '';
import {
   ClassicEditor,
   Autoformat,
   Bold,
   Italic,
   Underline,
   BlockQuote,
   Base64UploadAdapter,
   CKFinder,
   CKFinderUploadAdapter,
   CloudServices,
   CKBox,
   Essentials,
   Heading,
   Image,
   ImageCaption,
   ImageResize,
   ImageStyle,
   ImageToolbar,
   ImageUpload,
   PictureEditing,
   Indent,
   IndentBlock,
   Link,
   List,
   MediaEmbed,
   Mention,
   Paragraph,
   PasteFromOffice,
   Table,
   TableColumnResize,
   TableToolbar,
   TextTransformation,
} from 'ckeditor5';

import { SlashCommand } from 'ckeditor5-premium-features';
import translations from 'ckeditor5/translations/zh-cn.js';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import { ExportWord, ImportWord } from 'ckeditor5-premium-features';

export default {
   name: 'app',
   data() {
      return {
         editor: ClassicEditor,
         editorData: '',
         editorConfig: {
            translations: [translations],
            plugins: [
               ImportWord,
               ExportWord,
               Autoformat,
               BlockQuote,
               Bold,
               CKFinder,
               CKFinderUploadAdapter,
               CloudServices,
               ...(CKBOX_TOKEN_URL ? [CKBox] : []),
               Essentials,
               Heading,
               Image,
               ImageCaption,
               ImageResize,
               ImageStyle,
               ImageToolbar,
               ImageUpload,
               Base64UploadAdapter,
               Indent,
               IndentBlock,
               Italic,
               Link,
               List,
               MediaEmbed,
               Mention,
               Paragraph,
               PasteFromOffice,
               PictureEditing,
               Table,
               TableColumnResize,
               TableToolbar,
               TextTransformation,
               Underline,
               ...(LICENSE_KEY ? [SlashCommand] : []),
            ],

            licenseKey: LICENSE_KEY,
            toolbar: [
               'exportWord',
               'importWord',
               '|',
               'undo',
               'redo',
               '|',
               'heading',
               '|',
               'bold',
               'italic',
               'underline',
               '|',
               'link',
               'uploadImage',
               'ckbox',
               'insertTable',
               'blockQuote',
               'mediaEmbed',
               '|',
               'bulletedList',
               'numberedList',
               '|',
               'outdent',
               'indent',
            ],
            exportWord: {
               tokenUrl: 'https://example.com/cs-token-endpoint',
               fileName: 'my-file.docx',
               converterOptions: {
                  document: {
                     size: 'A4', // Default value, you do not need to specify it explicitly for A4.
                     margin: {
                        top: '20mm',
                        bottom: '20mm',
                        right: '12mm',
                        left: '12mm',
                     },
                  },
               },
            },
            importWord: {
               formatting: {
                  resets: 'none',
                  defaults: 'none',
                  styles: 'inline',
               },
            },
            heading: {
               options: [
                  {
                     model: 'paragraph',
                     title: 'Paragraph',
                     class: 'ck-heading_paragraph',
                  },
                  {
                     model: 'heading1',
                     view: 'h1',
                     title: 'Heading 1',
                     class: 'ck-heading_heading1',
                  },
                  {
                     model: 'heading2',
                     view: 'h2',
                     title: 'Heading 2',
                     class: 'ck-heading_heading2',
                  },
                  {
                     model: 'heading3',
                     view: 'h3',
                     title: 'Heading 3',
                     class: 'ck-heading_heading3',
                  },
                  {
                     model: 'heading4',
                     view: 'h4',
                     title: 'Heading 4',
                     class: 'ck-heading_heading4',
                  },
               ],
            },
            image: {
               resizeOptions: [
                  {
                     name: 'resizeImage:original',
                     label: 'Default image width',
                     value: null,
                  },
                  {
                     name: 'resizeImage:50',
                     label: '50% page width',
                     value: '50',
                  },
                  {
                     name: 'resizeImage:75',
                     label: '75% page width',
                     value: '75',
                  },
               ],
               toolbar: [
                  'imageTextAlternative',
                  'toggleImageCaption',
                  '|',
                  'imageStyle:inline',
                  'imageStyle:wrapText',
                  'imageStyle:breakText',
                  '|',
                  'resizeImage',
               ],
            },
            link: {
               addTargetToExternalLinks: true,
               defaultProtocol: 'https://',
            },
            table: {
               contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
            },
            ckbox: {
               tokenUrl: CKBOX_TOKEN_URL,
            },
         },
      };
   },
};
</script>
<style>
#demoapp {
   height: 100%;
}
.ck-editor__main {
   height: calc(100vh - 40px);
}
.ck-blurred {
   height: 100%;
}
.ck-content {
   height: 100%;
}
/* ---- Cross-editor content styles. --------------------------------------------------------------- */
.ck.ck-content:not(.ck-style-grid__button__preview):not(
      .ck-editor__nested-editable
   ) {
   /* Make sure all content containers have some min height to make them easier to locate. */
   min-height: 300px;
   padding: 1em 1.5em;
}

/* Make sure all content containers are distinguishable on a web page even of not focused. */
.ck.ck-content:not(:focus) {
   border: 1px solid var(--ck-color-base-border);
}

/* Fix for editor styles overflowing into comment reply fields */
.ck-comment__input .ck.ck-content {
   min-height: unset;
   border: 0;
   padding: 0;
}

/* Font sizes and vertical rhythm for common elements (headings, lists, paragraphs, etc.) */
.ck-content h1 {
   font-size: 2.3em;
}
.ck-content h2 {
   font-size: 1.84em;
}
.ck-content h3 {
   font-size: 1.48em;
}
.ck-content h4 {
   font-size: 1.22em;
}
.ck-content h5 {
   font-size: 1.06em;
}
.ck-content h6 {
   font-size: 1em;
}
.ck-content h1,
.ck-content h2,
.ck-content h3,
.ck-content h4,
.ck-content h5,
.ck-content h6 {
   line-height: 1.2em;
   padding-top: 0.8em;
   margin-bottom: 0.4em;
}
.ck-content blockquote,
.ck-content ol,
.ck-content p,
.ck-content ul {
   font-size: 1em;
   line-height: 1.6em;
   padding-top: 0.2em;
   margin-bottom: var(--ck-spacing-large);
}

/* ---- Basic CSS reset ------------------------------------------------------ */
*,
::after,
::before {
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   margin: 0;
}

body,
html {
   margin: 0;
   padding: 0;
}
.ck-content .table {
   margin: 0 auto;
}
.ck.ck-content.ck-editor__editable_inline > :first-child {
   margin-top: 0;
}

/* ---- Styles of the demo page ------------------------------------------------------ */
.editor-wrapper {
   max-width: 66rem;
   margin: 0 auto 2rem auto;
}

.header-wrapper {
   padding: 1rem 2rem;
}
</style>
