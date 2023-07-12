'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, InferType } from 'yup';

const formSchema = object({
  email: string().email('Valid email required').required('Email is required'),
});
type FormData = InferType<typeof formSchema>;

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(formSchema) });

  function onSubmit({ email }: FormData) {
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          <label className="w-fit text-sm font-bold text-gray-800" htmlFor="email">
            Email address
          </label>
          {errors.email && (
            <span className="row-start-3 text-sm font-bold text-red-400 md:row-auto md:justify-self-end" role="alert">
              {errors.email.message}
            </span>
          )}
          <input
            className={`w-full rounded-md px-6 py-4 text-gray-800 ring-1 ring-gray-400 transition-shadow duration-200 placeholder:text-gray-400 hover:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 md:col-span-2 ${
              errors.email ? 'bg-red-400/20 !text-red-400 !ring-red-400' : ''
            }`}
            type="text"
            id="email"
            placeholder="email@company.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email')}
          />
        </div>
        <button
          className="relative isolate overflow-hidden rounded-lg bg-gray-800 p-5 font-bold text-white transition-[background-color_shadow] duration-200 before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-full before:bg-linear-gradient-red-1 before:opacity-0 before:transition-opacity before:duration-200 hover:bg-transparent hover:shadow-xl hover:shadow-red-400/30 hover:before:opacity-100"
          type="submit"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
}
