# Contributing Guidelines

Thank you for considering contributing to the Mental Library! Please take a moment to review the guidelines below before making a contribution.

## How to Contribute

1. Fork the repository
2. Create a new branch for your contribution (e.g. `git checkout -b new-feat-username`)
3. Commit your changes (e.g. `git commit -m 'data: Tips + Resources'`)
4. Add upstream command to your fork (e.g. `git remote add upstream https://github.com/kilgamesh/mental-library`)
5. Push your changes to your fork (e.g. `git push origin new-feat-username`)
6. Create a pull request

## How to run in your local machine

1. install dependencies
   > `npm install`
2. run the app
   >  `npm run dev`

## Adding Data *Example*

1. Go to `src/data/template.json`
2. Copy the template provided (in this case the "tips" template):

```json
{
  "title": "Title *Optional*",
  "tip": "Whatever tip you'd like to add",
  "username": "Your Github username",
  "userUrl": "Link to your github or website"
}
```

3. Paste the copied template into `src/data/tips.json` and add your data
4. Rinse and repeat as needed

### Additional Notes

- If you are not sure what data is optional please refer to the [types.ts](/src/utils/types.ts).
- When adding resources try to reuse any types for the `type` object whenever possible but feel free to add new ones whenever necessary.
- Please refrain from add time-sensitive resources

## Code of Conduct

We have adopted a Code of Conduct that we expect all contributors to adhere to. Please read the [CODE_OF_CONDUCT.md](https://github.com/kilgamesh/mental-library/main/CODE_OF_CONDUCT.md) file in the repository before making any contributions.

## Report Bugs and Issues

If you find a bug or have a suggestion for improvement, please submit an issue on the repository's issue tracker. When submitting an issue, please provide as much detail as possible, including steps to reproduce the issue and any error messages you encountered.

## Code Review Process

When you create a pull request, GitHub Actions will automatically run several tests. If any of these tests fail, it is up to you to address the underlying issue(s). You are responsible for resolving any merge conflicts that your pull request may have with the main branch, which GitHub will detect and notify you of. If you are uncertain about how to fix the problem, you can seek assistance. All pull requests will be reviewed by the repository maintainers. We will provide feedback and suggest changes if necessary. Once your pull request is approved, we will merge it into the main repository.

🤩 Thank you for being the best part of the Mental Library! 🤩
