import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  MouseEvent
} from "react";
import type {
  FieldHookConfig
} from "formik";
import type {
  Meta,
  ObjStrCustom,
  SelectOption
} from "./types";
import type { HookModalFunc } from "./hooks";
import type {
  HOCDatasets,
  HOCDatasetsProps,
  HOCField,
  HOCFieldProps
} from "./hocs";

// Input props
export interface InputProps extends HOCDatasetsProps, HOCDatasets {
  children?: ReactNode;
  id?: string;
  name: string;
  value?: string;
  checked: boolean;
  label?: string;
  label2?: string | null;
  payment?: boolean;
  onSelect?: (event?: MouseEvent) => void;
}

type Input = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type InputElement = Omit<Input, keyof FieldHookConfig<string>>;

export type InputFieldProps = HOCFieldProps & HOCField & InputElement & {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

// Textarea input props
type Area = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
type AreaElement = Omit<Area, keyof FieldHookConfig<string>>;

export type AreaFieldProps = HOCFieldProps & HOCField & AreaElement & {
  id?: string;
  name: string;
  placeholder?: string;
};

// File input props
export type FileFieldProps = HOCFieldProps & HOCField & InputElement & {
  id?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  profile?: boolean;
  onChange?: (values: File[] | File) => void;
};

// Select input props
export type SelectFieldProps = Omit<HOCFieldProps, "file"> & HOCField & {
  id?: string;
  name: string;
  options: SelectOption[];
  value?: string | null;
  withoutValue?: string;
  onSelect?: (value: unknown) => void;
};

export interface LayoutProps {
  children: ReactNode;
}

export interface LanguageProps {
  onClose?: VoidFunction;
}

export interface LoaderSimpleProps {
  msg: string;
}

export type LoaderPageProps = Partial<LoaderSimpleProps>;

export interface ModalProps {
  children: (config: ObjStrCustom<boolean>) => ReactNode;
  title?: string;
  config?: ObjStrCustom<boolean>;
  open: boolean;
  onClose: HookModalFunc;
}

export interface ScrollLinkProps {
  to: string;
  text: string;
  compareHash?: string;
  className: string;
  children?: ReactNode;
  span?: boolean;
}

export interface NavLinkProps {
  to: string;
  text: string;
}

export interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Meta[];
}
