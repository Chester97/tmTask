'use client';

import {
  emailValidationRules,
  feedbackValidationRules,
  nameValidationRules,
} from '@/utils/feedbackValidationRules';
import { Input } from '@/components/Input/Input';
import { TextArea } from '@/components/TextArea/TextArea';

import styles from './Feedback.module.scss';

import { useFeedbackForm } from './useFeedbackForm';

export default function FeedbackPage() {
  const { handleSubmit, register, errors, formSubmitMessage } =
    useFeedbackForm();

  return (
    <div className={styles.feedbackWrapper}>
      <h1 className={styles.feedbackTitle}>
        We would love to hear your feedback! Please fill out the form
        below.
      </h1>
      <div className={styles.feedbackFormContainer}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
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
      </div>
      {formSubmitMessage && <p>{formSubmitMessage.message}</p>}
    </div>
  );
}
