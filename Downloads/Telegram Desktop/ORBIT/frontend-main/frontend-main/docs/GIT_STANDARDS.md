# Git Standards

Adhering to these rules is not optional; it is essential for maintaining codebase quality, ensuring a clean history, and enabling efficient collaboration. Our goal is clarity and consistency.

## 1. Branching Model

We use a simple, streamlined branching model.

- All new work is done on feature branches. **Direct commits to main are strictly forbidden.**
- **main**: This branch represents the production-ready code. It is always stable and deployable. It is a protected branch.
- **Feature Branches**: All new features, bug fixes, and chores are developed on their own branches, which are branched off of `main`.

### Branch Naming Convention

All branch names must follow this exact pattern to clearly identify their purpose at a glance.

**Format:** `<type>/<short-description>`

- **`<type>`**: Describes the category of work. The allowed types are:
  - `feat`: For a new feature that adds value for the user.
  - `fix`: For a bug fix that corrects unintended behavior.
  - `refactor`: For code changes that neither fix a bug nor add a feature (e.g., simplifying complex logic).
  - `docs`: For changes to documentation only (e.g., updating this docs or the README).
  - `chore`: For routine tasks and maintenance (e.g., updating dependencies, build scripts).

- **`<short-description>`**: A few words describing the work, written in kebab-case (all lowercase, words separated by hyphens).

**Examples:**
- `feat/user-authentication`
- `fix/login-button-alignment`
- `docs/update-api-guide`
- `refactor/simplify-database-queries`
- `chore/upgrade-react-version`

## 2. Commit Message Convention

We enforce the **Conventional Commits** specification. This creates a highly readable history and allows for automated changelog generation. A commit message that does not follow this format will be rejected in the Pull Request review.

### Structure:

```
<type>: <subject>

[optional body]

[optional footer]
```

### The Subject Line: `<type>: <subject>`

This is the most important part of the commit.

- **`<type>`**: Must be one of the allowed types from the branch naming section (`feat`, `fix`, `refactor`, `docs`, `chore`).
- **`<subject>`**:
  - MUST be written in the imperative mood (e.g., "add feature" not "adds feature" or "added feature").
  - MUST be all lowercase.
  - MUST NOT end with a period.
  - MUST be 50 characters or less.

### The Body (Optional but Recommended)

- Use the body to explain the "why" and "what" of your change, not the "how".
- Separate the subject from the body with a blank line.
- Wrap lines at 72 characters for readability.

### The Footer (Optional)

- Use for referencing issue numbers (e.g., `Closes #42`).
- Use for indicating breaking changes. Start a new paragraph with `BREAKING CHANGE:` followed by a description of the change.

### Commit Examples

**A Good Commit:**

```
feat: add user logout functionality

Adds a logout button to the main navigation bar. When clicked,
the user's session is invalidated and they are redirected to the
homepage.

Closes #31
```

**Bad Commits (And Why):**

- `fix: fixed the bug` - Subject is not specific or imperative.
- `Updated the user model` - No type, not imperative.
- `feat: Add a cool new feature.` - Subject is capitalized and ends with a period.

## 3. Pull Request (PR) Process

Code gets into `main` only through Pull Requests.

1. **Create a PR**: When your feature branch is ready, open a Pull Request to merge into `main`.
2. **Title**: The PR title must follow our commit subject convention: `<type>: <subject>`.
3. **Description**: Use the PR description template provided in the repository to explain your changes, link to the relevant issue, and provide instructions for testing.
4. **Review**: At least one other team member must review and approve the PR. Address any feedback with new commits on your branch.
5. **Merge**: Once approved, the PR will be merged into `main` using **"Squash and Merge"**. This is critical. It condenses all of your feature branch's commits into a single, clean commit on the main branch, keeping our history tidy and readable.

## 4. Tagging and Versioning (Not Currently in use)

We use **Semantic Versioning (SemVer)** for all releases, which are created by tagging commits on the `main` branch.

**Format:** `v<major>.<minor>.<patch>`

- **`<major>`**: Incremented for a `BREAKING CHANGE`.
- **`<minor>`**: Incremented for a new `feat`.
- **`<patch>`**: Incremented for a `fix`.

This versioning is directly informed by our commit messages, making the release process logical and predictable.
