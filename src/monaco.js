import * as monaco from 'monaco-editor';

export default function createMonaco(elementId, options) {
// Hover on each property to see its docs!
  return monaco.editor.create(document.getElementById(elementId), {
    language: 'css',
    automaticLayout: true,
  });
}
