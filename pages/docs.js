import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Button1 from './button.mdx';
import ButtonBase from './buttonBase.mdx';
import Input from './input.mdx';

export default function Docs({ children }) {
  return (
    <div>
      <h1>Docs</h1>

      <Button1 />

      <br />

      <ButtonBase />

      <br />

      <Input />
    </div>
  );
};
