# A little information about the task from my side.

### I have used the following libraries:

- `react-hook-form`, why? It's super simple, and i love it. It increases development speed, plus I dont need to write same code again and again. I trust this lib.
- `classnames`, why? Because I decided to use css modules 'cause I know it well and it suits me for rapid development. Unfortunately, I did not use tailwindcss, because I am not familiar with it. I am sure that I will learn it soon.
- `dompurify` and `jsdom`, why? I've noticed that the API returns HTML content, so I need to sanitize it before rendering it to the user. I've used `dompurify` for sanitizing the HTML content and `jsdom` for parsing the HTML content so it can work 'server side'.
- `date-fns`, why? I just needed to format the date, so I used it. Honestly, yes - I'm lazy.. so I didn't want to write a function for that. 😅

### What has been done:

- [x] "Initlize newest Next.js app with app routing". recently I've been using oldest version of Next with pages routing, so it was something new for me. Please, let me know if I did something wrong, I would love to get feedback.
- [x] "Use the HackerNews API to fetch the top stories. Display these stories in a list on the homepage of your application", this part has been done. **PLUS**: I've made a pagination, it's dummy version of pagination but in my opinion it increases user experience.
- [x] "Implement routing in your application. Each story in the list should link to a separate page that displays the details of the story". This part is also done. **PLUS**: I've added a comments section to the story details page, with skeleton so the page won't jump when comments are loaded(it has huge impact on user experience and google metrics).
- [x] "Create a feedback form on a separate page in your application.". Done, as I mentioned, it's using `react-hook-form` for form handling. I've added some validation rules, so user can't submit empty form. I could improve that part with some toast, nicer UI etc.. but I've decided to keep it simple.
- [x] "Implement form validation to ensure that all fields are filled out and that the email is in the correct format." I think i've done this part. Not sure about validation requirements, so I've added some basic rules. But with react-hook-form it's super easy to add more rules. So I just simple left it like that. I can add more rules any time and it probably will take me 5 minutes.
- [x] "On form submission, display a success message to the user, clear the form, and log the form data to the server-side console". I've done this part. I've added a success message, cleared the form and logged the form data to the console. I could add some toast or modal, but I didn't want to overcomplicate it and I didn't want to spend too much time on it.
- [ ] "Ensure that your application is responsive and adheres to WCAG accessibility guidelines". Here I would say that it is done half-and-half. I didn't particularly combine with components, I tried to make the page readable, not jumping, not too bright or dark colors which also affects a11y. On the other hand, I must admit that I did not focus on this issue, here it should be noted that the topic of a11y is so extensive and large that 3 days is definitely not enough. However, I have experience in this, but I had to give up something in order to deal with other things that I think in recruitment may be more important.
      As for responsiveness, I think I wrote layouts in such a way that they look good on mobile devices :)
- Some extra feature from my side is also a piece of code in middleware that won't allow user to user invalid page pagination value. Take a look :) Maybe it's not the best piece of code but it works.

### Few words from me:

In the beginning - hack news API was not so easy at all, sometimes you need to make several requests in a row to get, for example, comments of a given post. A bit strangely structured API.

The task was very interesting. As I mentioned earlier, I usually worked with lower versions of nexta and on pages router. So the app router was new to me but I learned a lot of things!
I realize that there may be inconsistencies in the code, inconsistencies or just inferior code, here in my 'defense' I can add only that I wrote this code after hours so fatigue let me know :) I wrote each piece of code independently.

In addition, for almost two years after hours with some friends I have been running a very large project written in Nextjs technology, among other things, many things done there are done consistently, with a strong emphasis on clean code, etc. I would be happy to show such a project if there is an opportunity. It is basically the only thing I can be proud of
