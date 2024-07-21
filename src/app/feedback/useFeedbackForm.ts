import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type FeedbackFormFields = {
  name: string;
  email: string;
  feedback: string;
};

type FormSubmitMessage = {
  type: 'success' | 'error';
  message: string;
};

export const useFeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FeedbackFormFields>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      feedback: '',
    },
  });
  const [formSubmitMessage, setFormSubmitMessage] =
    useState<FormSubmitMessage | null>(null);

  const [isSafeToReset, setIsSafeToReset] = useState(false);

  useEffect(() => {
    reset();
  }, [reset, isSafeToReset]);

  useEffect(() => {
    const subscription = watch(() => {
      if (formSubmitMessage) {
        setFormSubmitMessage(null);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, formSubmitMessage]);

  const onSubmit = async (data: FeedbackFormFields) => {
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setFormSubmitMessage({
          type: 'success',
          message: 'Feedback submitted successfully',
        });
      } else {
        setFormSubmitMessage({
          type: 'error',
          message: 'Error submitting feedback',
        });
      }
    } catch (error) {
      setFormSubmitMessage({
        type: 'error',
        message: 'Error submitting feedback',
      });
    } finally {
      setIsSafeToReset(!isSafeToReset);
    }
  };

  const submitFeedbackForm = handleSubmit(onSubmit);

  return {
    register,
    handleSubmit: submitFeedbackForm,
    errors,
    formSubmitMessage,
  };
};
