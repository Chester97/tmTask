import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FeedbackFormFields = {
  name: string;
  email: string;
  feedback: string;
};

export const useFeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormFields>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      feedback: '',
    },
  });
  const [formSubmitMessage, setFormSubmitMessage] = useState('');

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
        setFormSubmitMessage('Feedback submitted successfully');
      } else {
        setFormSubmitMessage('Failed to submit feedback');
      }
    } catch (error) {
      setFormSubmitMessage('Error submitting feedback');
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
