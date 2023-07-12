import { InferType } from 'yup';
import { formSchema } from '@/schemas/form';
import { Dispatch, SetStateAction } from 'react';

export type FormData = InferType<typeof formSchema>;

export interface SignUpFormProps {
  setFormData: Dispatch<SetStateAction<FormData | null>>;
}

export interface SuccessMessageProps extends FormData {
  setFormData: Dispatch<SetStateAction<FormData | null>>;
}
