'use client';

import {
  emailValidationRules,
  feedbackValidationRules,
  nameValidationRules,
} from '@/utils/feedbackValidationRules';
import { Input } from '@/components/Input/Input';
import { TextArea } from '@/components/TextArea/TextArea';

import { useFeedbackForm } from './useFeedbackForm';

export default function FeedbackPage() {
  const { handleSubmit, register, errors, formSubmitMessage } =
    useFeedbackForm();

  return (
    <div>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          {...register('name', nameValidationRules)}
          errorMessage={errors.name?.message}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          {...register('email', emailValidationRules)}
          errorMessage={errors.email?.message}
        />
        <TextArea
          label="Feedback"
          id="feedback"
          {...register('feedback', feedbackValidationRules)}
          errorMessage={errors.feedback?.message}
        />
        <button type="submit">Submit</button>
      </form>
      {formSubmitMessage && <p>{formSubmitMessage.message}</p>}
    </div>
  );
}
