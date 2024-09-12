# React article

Implement the `Article` component that takes `title`, `date`, and `text` as props
and render them using the given markup. The `App` should render an `Article` with
the data from the `firstArticle` object.

- `title` is a text for `data-cy="title"`;
- `date` should be added in the next format, (you have an example of how to do
it in the initial code):
    ```tsx
    <time datetime="2022-09-08" data-cy="date">
      September 8, 2022
    </time>
    ```
- `text` should be rendered inside `data-cy="text"`

## Instructions

- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://webdevw.github.io/react_article/) and add it to the PR description.
