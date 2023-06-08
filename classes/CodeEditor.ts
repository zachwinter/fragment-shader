import { errorStyles } from '../util/editor';
import { EditorView } from 'codemirror';
import { EditorState, EditorStateConfig } from '@codemirror/state';
import {
  defaultKeymap,
  indentWithTab,
  history,
  historyKeymap,
} from '@codemirror/commands';
import {
  StreamLanguage,
  bracketMatching,
  indentOnInput,
} from '@codemirror/language';
import { oneDark } from '@codemirror/theme-one-dark';
import {
  EditorViewConfig,
  ViewUpdate,
  keymap,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter,
  dropCursor,
  tooltips,
} from '@codemirror/view';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { EditorConfig } from '../types/editor';

const { showError, hideError, destroyError } = errorStyles();

const DEFAULT_CODE_EDITOR_CONFIG = {
  parent: document.body,
  document: '',
  width: window.innerWidth,
  height: window.innerHeight,
};

export default class CodeEditor {
  public config: EditorConfig;
  private state: EditorState;
  private view: EditorView;

  public showError: Function = showError;
  public hideError: Function = hideError;
  public destroyError: Function = destroyError;

  constructor(config: EditorConfig = DEFAULT_CODE_EDITOR_CONFIG) {
    this.config = {
      ...DEFAULT_CODE_EDITOR_CONFIG,
      ...config,
    };

    this.state = this.createState();

    this.view = new EditorView({
      parent: this.config.parent,
      state: this.state,
    } as EditorViewConfig);

    this.applyCSSVariables();
  }

  createState(): EditorState {
    const extensions = [
      lineNumbers(),
      history(),
      bracketMatching(),
      highlightActiveLine(),
      highlightActiveLineGutter(),
      closeBrackets(),
      dropCursor(),
      indentOnInput(),
      autocompletion(),
      tooltips({
        position: 'absolute',
        parent: this.config.parent,
      }),
      oneDark,
      keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
      EditorView.updateListener.of(this.update.bind(this)),
    ];

    if (this.config.streamParser) {
      extensions.push(StreamLanguage.define(this.config.streamParser));
    }

    return EditorState.create({
      doc: (this.config.document || '').trim(),
      extensions,
    } as EditorStateConfig);
  }

  update(e: ViewUpdate) {
    if (typeof this.config.onUpdate !== 'function') return;
    const { state, docChanged } = e;
    if (!docChanged) return;
    this.config.onUpdate(state.doc.toString());
  }

  applyCSSVariables() {
    document.documentElement.style.setProperty(
      '--editor-width',
      this.config.width + 'px'
    );

    document.documentElement.style.setProperty(
      '--editor-height',
      this.config.height + 'px'
    );
  }

  destroy() {
    this.view.destroy();
  }
}
