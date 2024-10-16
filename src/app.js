import createSummernote from './summernote';
import createMonaco from './monaco';

export default function App() {
  createSummernote('source-editor', {
    lang: 'ko-KR',
    height: 500,
    placeholder: '내용을 입력해주세요.',
  });

  const monaco = createMonaco('style-editor')

  const iframe = document.getElementById('target');
  iframe.addEventListener('load', () => {
    const code = $('#source-editor').summernote('code');
    const style = monaco.getValue();
    iframe.contentWindow.postMessage({ code, style });
  });

  $('#btn-run').on('click', e => {
    iframe.contentWindow.location.reload();
  });
}


