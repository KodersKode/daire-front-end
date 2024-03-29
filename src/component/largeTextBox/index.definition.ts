export type TLargeTextBoxProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  label?: string | undefined;
  placeholder?: string | undefined;
  spellCheck?: boolean | string;
  className?: string;
};
