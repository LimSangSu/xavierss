import 'summernote/dist/summernote.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'summernote/dist/summernote.min.js';
import 'summernote/dist/lang/summernote-ko-KR.js';
import 'bootstrap/js/src/modal.js';
import 'bootstrap/js/src/dropdown.js';
import 'bootstrap/js/src/tooltip.js';

export default function createSummernote(elementId, options) {
  return $(`#${elementId}`).summernote(options);
}
