import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import '../../style.css';
import { markdownSyntaxGuide } from './markdownSyntaxGuide';

export interface MarkDownGuideProps {
  height?: number;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MarkdownGuide: React.FunctionComponent<MarkDownGuideProps> = () => {
  const [value, setValue] = useState(markdownSyntaxGuide);

  return (
    <div className="container">
      <div id="header">
        <h1>Markdown Live Preview</h1>
      </div>
      {/* Remove data-color-mode="light" for auto dark mode */}
      <div className="markdown__container" data-color-mode="light">
        <MDEditor height={900} value={value} aria-label="textbox" onChange={setValue} />
      </div>
    </div>
  );
};

export default MarkdownGuide;
