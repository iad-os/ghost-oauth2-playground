import Editor, { EditorProps } from '@monaco-editor/react';
import { useTheme } from '@mui/material';
import React from 'react';

const monacoOptions = {
  acceptSuggestionOnCommitCharacter: true,
  acceptSuggestionOnEnter: 'on',
  accessibilitySupport: 'auto',
  autoIndent: true,
  automaticLayout: true,
  codeLens: true,
  colorDecorators: true,
  contextmenu: true,
  cursorBlinking: 'blink',
  cursorSmoothCaretAnimation: false,
  cursorStyle: 'line',
  disableLayerHinting: false,
  disableMonospaceOptimizations: false,
  dragAndDrop: false,
  fixedOverflowWidgets: false,
  folding: true,
  foldingStrategy: 'auto',
  fontLigatures: false,
  formatOnPaste: false,
  formatOnType: false,
  hideCursorInOverviewRuler: false,
  highlightActiveIndentGuide: true,
  links: true,
  mouseWheelZoom: false,
  multiCursorMergeOverlapping: true,
  multiCursorModifier: 'alt',
  overviewRulerBorder: true,
  overviewRulerLanes: 2,
  quickSuggestions: true,
  quickSuggestionsDelay: 100,
  readOnly: false,
  renderControlCharacters: false,
  renderFinalNewline: true,
  renderIndentGuides: true,
  renderLineHighlight: 'all',
  renderWhitespace: 'none',
  revealHorizontalRightPadding: 30,
  roundedSelection: true,
  rulers: [],
  scrollBeyondLastColumn: 5,
  scrollBeyondLastLine: true,
  selectOnLineNumbers: true,
  selectionClipboard: true,
  selectionHighlight: true,
  showFoldingControls: 'mouseover',
  smoothScrolling: false,
  suggestOnTriggerCharacters: true,
  wordBasedSuggestions: true,
  wordSeparators: '~!@#$%^&*()-=+[{]}|;:\'",.<>/?',
  wordWrap: 'on',
  wordWrapBreakAfterCharacters: '\t})]?|&,;',
  wordWrapBreakBeforeCharacters: '{([+',
  wordWrapBreakObtrusiveCharacters: '.',
  wordWrapColumn: 120,
  wordWrapMinified: true,
  wrappingIndent: 'none',
  minimap: { enabled: false },
};

const MonacoEditor: React.FC<
  Omit<EditorProps, 'options' | 'theme'>
> = props => {
  const theme = useTheme();

  return (
    <Editor
      {...props}
      theme={theme.palette.mode === 'dark' ? 'vs-dark' : ''}
      wrapperProps={monacoOptions}
    />
  );
};

export default MonacoEditor;
