# Github Chrome extension

## Description

![Github Chrome Extension](gh-action.jpg "Github Chrome Extension")

A lightweight Chrome extension that enhances the GitHub repository navigation bar by injecting two shortcut buttons into the underline nav menu of any GitHub repository page:

- **My pull requests** — links directly to `/<org>/<repo>/pulls/@me`, filtering the PR list to show only pull requests opened by the currently logged-in user.
- **My pending reviews** — links directly to `/<org>/<repo>/pulls/review-requested/@me`, filtering to show only PRs where the current user has been requested to review.

The buttons are dynamically generated based on the current repo's URL (org + repo name) and styled to match GitHub's native UI. They are also re-injected on Turbo navigation events (`turbo:load`, `turbo:render`) to persist across GitHub's client-side page transitions.

**In short:** it saves you from manually navigating to the PR tab and applying filters whenever you want to check your own PRs or pending code reviews in any repository.
