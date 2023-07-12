import { object, string } from 'yup';

export const formSchema = object({
  email: string().email('Valid email required').required('Email is required'),
});
