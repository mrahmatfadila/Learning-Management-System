# AGENTS.md

# PROJECT SAFETY & DEVELOPMENT RULES

> CRITICAL: These rules are mandatory.
>
> The primary objective is to protect source code, database, configuration, developer changes, and Git history.
>
> When in doubt: STOP and ASK THE DEVELOPER.

---

# 1. CORE PRINCIPLES

Follow these principles in this exact priority:

1. Protect existing database and data.
2. Protect existing source code.
3. Protect developer's uncommitted changes.
4. Protect Git history.
5. Make the smallest possible change.
6. Test every change.
7. Create a Git checkpoint after successful work.
8. Never perform destructive operations without explicit approval.

NEVER sacrifice existing data or code just to make an error disappear.

---

# 2. BEFORE STARTING ANY TASK

Before modifying anything:

1. Check the current Git status.
2. Identify the current branch.
3. Check whether there are existing uncommitted changes.
4. Understand the scope of the requested task.
5. Identify which files actually need modification.

Do NOT assume that existing uncommitted changes were created by you.

If there are existing changes:

* Do not delete them.
* Do not reset them.
* Do not overwrite them.
* Do not use `git restore`.
* Do not use `git reset --hard`.
* Do not use `git clean`.

If existing changes conflict with the requested task, STOP and ask the developer.

---

# 3. NEVER DESTROY EXISTING CODE

Existing code must be considered intentional unless the developer explicitly requests its removal.

NEVER delete:

* pages
* components
* API routes
* backend services
* database models
* utility functions
* middleware
* authentication
* configuration
* migrations
* existing features

just because:

* they appear unused;
* they appear outdated;
* they appear duplicated;
* they look unnecessary;
* you think there is a better approach.

If you believe code should be removed:

STOP.

Explain:

* what should be removed;
* why;
* what depends on it;
* possible consequences.

Wait for explicit approval.

---

# 4. MINIMAL CHANGE PRINCIPLE

Always use:

> CHANGE ONLY WHAT IS NECESSARY.

If the task requires changing one file, do not unnecessarily modify ten files.

Do NOT:

* refactor unrelated code;
* rename unrelated files;
* restructure the project;
* replace frameworks;
* replace libraries;
* rewrite existing architecture;
* modify unrelated components.

unless explicitly requested.

---

# 5. DATABASE IS CRITICAL

The database contains potentially irreplaceable data.

Treat database operations as HIGH RISK.

NEVER execute destructive database operations without explicit developer approval.

Forbidden without approval:

* `DROP DATABASE`
* `DROP TABLE`
* `TRUNCATE`
* mass `DELETE`
* database reset
* schema reset
* destructive migration
* deleting migration history
* recreating the database
* deleting existing production data

Never use a database reset as a shortcut to solve an application error.

---

# 6. PRISMA SAFETY

This project may use Prisma.

NEVER execute:

```text
prisma migrate reset
```

without explicit developer approval.

NEVER use a command or option whose purpose is to forcefully reset or recreate the database without approval.

When changing:

```text
prisma/schema.prisma
```

follow this process:

1. Understand the existing schema.
2. Identify affected models.
3. Determine whether existing data is affected.
4. Create a migration when appropriate.
5. Review the migration.
6. Ensure existing data is preserved.
7. Test the migration.
8. Commit the schema and migration together.

Never delete or rewrite existing production migrations simply to fix a development problem.

---

# 7. DATABASE CHANGES REQUIRE EXTRA CAUTION

Before executing a potentially destructive database operation, STOP.

Report:

```text
DATABASE SAFETY WARNING

Operation:
[operation]

Affected:
[database/table/schema]

Potential impact:
[impact]

Data loss possibility:
[YES/NO]

Approval required before continuing.
```

Do not continue until the developer explicitly approves.

---

# 8. GIT SAFETY

Git is the primary source-code recovery mechanism.

NEVER perform destructive Git operations without explicit approval.

Forbidden without approval:

```text
git reset --hard
git clean -fd
git clean -fdx
git checkout .
git restore .
git push --force
git push -f
```

Also do not:

* delete branches;
* delete commits;
* rewrite shared Git history;
* force-push;
* overwrite developer changes.

If a Git operation could cause loss of work:

STOP and ask.

---

# 9. NEVER REMOVE DEVELOPER CHANGES

If `git status` shows changes before starting the task:

Those changes are PROTECTED.

Do not assume they belong to you.

Do not:

* reset them;
* stash them without permission;
* overwrite them;
* delete them;
* commit them automatically if they are unrelated.

Only include changes related to the current task in the task commit.

If separation is difficult or uncertain:

STOP and ask the developer.

---

# 10. TASK SCOPE

Only modify files necessary for the current task.

For example:

If the developer asks:

"Fix the login validation."

Do NOT automatically modify:

* dashboard;
* ticket system;
* database unrelated to authentication;
* UI components unrelated to login;
* deployment configuration;
* unrelated API endpoints.

Keep changes isolated.

---

# 11. ERROR HANDLING

When an error occurs:

DO NOT immediately:

* reset the database;
* delete code;
* delete migrations;
* recreate the project;
* downgrade everything;
* upgrade everything;
* reset Git;
* remove features.

Instead:

1. Read the error.
2. Identify the root cause.
3. Inspect relevant code.
4. Determine the smallest safe fix.
5. Implement the fix.
6. Test.
7. Review the changes.
8. Commit.

Use:

```text
ERROR
↓
ANALYZE
↓
ROOT CAUSE
↓
MINIMAL FIX
↓
TEST
↓
REVIEW
↓
COMMIT
```

---

# 12. TESTING IS REQUIRED

After implementing a task, run the relevant tests.

Depending on the project, check:

* lint;
* TypeScript;
* unit tests;
* integration tests;
* build;
* database migration validation;
* application startup.

Do not claim a task is complete if the relevant verification has not been performed.

If a test fails:

Do not hide the failure.

Report it clearly.

---

# 13. REVIEW BEFORE COMMIT

Before creating a commit:

1. Run `git status`.
2. Review `git diff`.
3. Review changed files.
4. Check for accidental deletions.
5. Check for unrelated modifications.
6. Check for secrets.
7. Check that the task works.
8. Confirm that database changes are safe.

Only then create the commit.

---

# 14. AUTOMATIC GIT CHECKPOINT

When a task is successfully completed and verified:

CREATE A GIT COMMIT.

Use a clear commit message.

Examples:

```text
feat: add ticket priority calculation
feat: add user authentication
fix: resolve ticket filtering issue
fix: fix dashboard loading error
refactor: improve ticket service
docs: update project documentation
chore: update dependencies
```

Do not create meaningless messages such as:

```text
update
changes
fix
test
aaa
```

---

# 15. COMMIT ONLY RELATED CHANGES

Before committing:

Do not automatically commit every changed file.

Only commit changes related to the current task.

If unrelated developer changes exist:

Leave them untouched.

Example:

Current task:

```text
Fix login validation
```

Changed files:

```text
login.tsx              ← related
auth.ts                 ← related
dashboard.tsx           ← unrelated
notes.txt               ← unrelated
```

Commit only:

```text
login.tsx
auth.ts
```

Do not include unrelated changes.

---

# 16. GITHUB PUSH

If this project uses GitHub and the normal project workflow allows pushing:

After a successful commit:

1. Verify the current branch.
2. Verify the commit.
3. Verify no secrets are included.
4. Push to the appropriate remote branch.

NEVER use:

```text
git push --force
git push -f
```

without explicit approval.

If pushing fails:

Do not delete commits or reset the repository to solve the problem.

Report the error.

---

# 17. SECRETS AND ENVIRONMENT VARIABLES

NEVER commit secrets.

Never commit:

```text
.env
.env.local
.env.production
```

or files containing:

* passwords;
* API keys;
* access tokens;
* JWT secrets;
* database credentials;
* private keys;
* SSH keys;
* service credentials.

Before committing, verify that no secrets are included.

If a secret is accidentally staged:

STOP.

Do not commit it.

---

# 18. PROTECTED CONFIGURATION

Be extremely careful when modifying:

```text
.env
.env.local
package.json
package-lock.json
pnpm-lock.yaml
yarn.lock
tsconfig.json
next.config.*
prisma/schema.prisma
prisma/migrations/*
middleware.*
Dockerfile
docker-compose.*
deployment configuration
authentication configuration
database configuration
```

Only modify these files when required by the task.

Do not change configuration simply because you prefer a different setup.

---

# 19. PRODUCTION SAFETY

Production is HIGH RISK.

Never perform destructive operations on production without explicit approval.

This includes:

* deleting production data;
* resetting production database;
* dropping production tables;
* destructive migrations;
* deleting production files;
* modifying production environment;
* force-pushing production branches.

When production is involved:

STOP before destructive or high-risk actions.

---

# 20. DO NOT USE DESTRUCTIVE SHORTCUTS

Never use destructive operations as shortcuts.

Examples:

Bad:

```text
Error → reset database
Error → delete migration
Error → recreate project
Error → git reset
Error → delete source code
```

Correct:

```text
Error
↓
Understand
↓
Diagnose
↓
Minimal fix
↓
Test
↓
Review
↓
Commit
```

---

# 21. RECOVERY-FIRST DEVELOPMENT

Always work in a way that allows recovery.

Before major changes:

* ensure Git state is understood;
* create a checkpoint when appropriate;
* avoid modifying many unrelated files;
* avoid destructive operations.

For major database work, recommend a database backup before execution.

IMPORTANT:

Git protects source code.

Git does NOT automatically protect database data.

Database backups must be handled separately.

---

# 22. IF SOMETHING GOES WRONG

If the AI accidentally makes a large or unexpected change:

DO NOT attempt to hide it.

DO NOT immediately reset everything.

STOP.

Report:

```text
UNEXPECTED CHANGE DETECTED

What happened:
[...]

Files affected:
[...]

Potential impact:
[...]

Recommended recovery:
[...]

Waiting for developer decision.
```

---

# 23. WHEN TO ASK FOR CONFIRMATION

Explicit confirmation is REQUIRED before:

* deleting files;
* deleting folders;
* deleting database tables;
* deleting database data;
* dropping databases;
* truncating tables;
* resetting databases;
* destructive Prisma migrations;
* deleting migrations;
* resetting Git;
* force-pushing;
* rewriting Git history;
* changing production;
* major architecture changes;
* replacing major dependencies;
* operations that may cause irreversible data loss.

Use:

```text
CONFIRMATION REQUIRED

This operation may cause irreversible changes.

Target:
[...]

Operation:
[...]

Risk:
[...]

Potential data/code loss:
[...]

Please explicitly confirm before I continue.
```

---

# 24. COMPLETION CHECKLIST

A task is considered COMPLETE only when:

* [ ] Requested functionality implemented.
* [ ] Existing functionality preserved.
* [ ] Relevant tests executed.
* [ ] No critical errors remain.
* [ ] Database changes reviewed.
* [ ] No secrets exposed.
* [ ] `git status` reviewed.
* [ ] `git diff` reviewed.
* [ ] No unrelated changes included.
* [ ] Git commit created.
* [ ] Commit hash recorded.
* [ ] GitHub push completed if applicable.

---

# 25. FINAL REPORT

After completing a task, report:

```text
TASK COMPLETED

Task:
[...]

Changes:
- [...]
- [...]
- [...]

Testing:
- [...]
- [...]

Git:
Branch: [...]
Commit: [...]
Commit message: [...]

GitHub:
Pushed: YES/NO

Database:
Changed: YES/NO
Migration: YES/NO

Notes:
[...]
```

---

# 26. ABSOLUTE RULES

The following rules MUST NEVER be violated without explicit developer approval:

1. NEVER delete the database.
2. NEVER reset the database.
3. NEVER intentionally delete existing data.
4. NEVER delete existing code without approval.
5. NEVER delete existing migrations without approval.
6. NEVER destroy developer's uncommitted changes.
7. NEVER use `git reset --hard` without approval.
8. NEVER use `git clean -fd` without approval.
9. NEVER force-push without approval.
10. NEVER commit secrets.
11. NEVER modify unrelated files unnecessarily.
12. NEVER use destructive operations to solve errors.
13. ALWAYS test completed work.
14. ALWAYS review changes before committing.
15. ALWAYS create a Git checkpoint after successfully completing a task.
16. ALWAYS prioritize data safety over speed.
17. WHEN IN DOUBT, STOP AND ASK.

---

# 27. GOLDEN RULE

> NEVER DESTROY WHAT YOU DID NOT CREATE.

> NEVER DELETE WHAT YOU DO NOT FULLY UNDERSTAND.

> NEVER RESET WHAT YOU HAVE NOT BACKED UP.

> MAKE THE SMALLEST SAFE CHANGE.

> EVERY SUCCESSFUL TASK MUST HAVE A RECOVERABLE GIT CHECKPOINT.

> WHEN IN DOUBT, STOP AND ASK THE DEVELOPER.