# changelog-manual 📓

Every way to generate a `CHANGELOG.md` - tested, compared, and reviewed in one place.

Writing a changelog by hand is boring, and picking a generator means reading eight READMEs to find out that half of them need Conventional Commits, one refuses to write to a file, and another one wants a `GITHUB_TOKEN` before it does anything. This repo saves you that afternoon: every tool below has a copy-paste command, honest feedback (PLUS / MINUS), and links to real projects where the output landed.

## Features ✨

- 🧪 **8 tools, all actually run** - not a link dump, every command here was executed on a real repository
- 📋 **Copy-paste ready** - each entry is a one-liner via `npx`, nothing to install globally
- ⚖️ **Honest verdicts** - short PLUS / MINUS notes, so you learn the deal-breakers before you commit
- 🔗 **Real output to inspect** - links to generated `CHANGELOG.md` files in public repositories
- 🎨 **Template examples** - a working `.hbs` template for `auto-changelog`, ready to fork

## Which one should I pick? 🤔

| Tool                     | Needs Conventional Commits | Writes to a file | Good for                             |
| :----------------------- | :------------------------- | :--------------- | :----------------------------------- |
| `git-changelog`          | no                         | yes              | quick changelog from plain history   |
| `generate-changelog`     | yes                        | yes              | semver bumps, if you survive the CLI |
| `changelog`              | no                         | no               | one-off preview in the terminal      |
| `auto-changelog`         | no                         | yes              | full control through templates       |
| `git-extras`             | no                         | yes              | no Node.js in the project            |
| `conventional-changelog` | yes                        | yes              | the de facto standard                |
| `semantic-release`       | yes                        | yes              | fully automated releases in CI       |
| `@angular/cli`           | yes                        | yes              | Angular projects, built into the CLI |

> My article in Polish 🇵🇱: https://piecioshka.pl/blog/2019/03/23/husky-commitlint-git-changelog.html

## Tools 🛠️

### [git-changelog](https://npmjs.com/package/git-changelog) [[source code](https://github.com/rafinskipg/git-changelog)]

```bash
npx git-changelog -e
npx git-changelog -t false -a 'Angular: Spy LifecycleHooks'
```

### [generate-changelog](https://www.npmjs.com/package/generate-changelog) [[source code](https://github.com/lob/generate-changelog)]

```bash
npx generate-changelog -M # major
npx generate-changelog -m # minor
npx generate-changelog -p # patch
```

feedback:

- MINUS: hard to use it, it's not intuitive tool

### [changelog](https://www.npmjs.com/package/changelog) [[source code](https://github.com/dylang/changelog)]

```bash
npx changelog piecioshka/dotfiles all
```

feedback:

- MINUS: do not save into file

### [auto-changelog](https://www.npmjs.com/package/auto-changelog)[[source code](https://github.com/CookPete/auto-changelog)]

```bash
npx auto-changelog -u -l false
```

feedback

- PLUS: use templates
- MINUS: you must to define a template

templates examples (`.github/CHANGELOG_TEMPLATE.hbs`):

- [super-event-emitter](https://github.com/piecioshka/super-event-emitter/blob/d68ab7d88fc94e3f8894232dd427bf5a07d86910/.github/CHANGELOG_TEMPLATE.hbs#L4)

project examples:

- [super-event-emitter](https://github.com/piecioshka/super-event-emitter/blob/main/CHANGELOG.md)

### [git-extras](https://github.com/tj/git-extras/blob/master/Commands.md#git-changelog) [[source code](https://github.com/tj/git-extras)]

```bash
git changelog -a -n -p
```

project examples:

- [boilerplate-jasmine-babel](https://github.com/piecioshka/boilerplate-jasmine-babel/blob/main/CHANGELOG.md)

### [conventional-changelog](https://www.npmjs.com/package/conventional-changelog-cli) [[source code](https://github.com/conventional-changelog/conventional-changelog)]

```bash
npx conventional-changelog -i CHANGELOG.md -s -r 0
# for Angular projects with convention eg. "chore(...)"
npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0
```

Feedback:

- use Conventional Commits

### [semantic-release](https://www.npmjs.com/package/semantic-release) [[source code](https://github.com/semantic-release/semantic-release)]

```bash
npx semantic-release
```

Feedback:

- MINUS: required GITHUB_TOKEN
- MINUS: use Conventional Commits

### [@angular/cli](https://www.npmjs.com/package/@angular/cli) [[source code](https://github.com/angular/angular-cli)]

```bash
npx @angular/cli changelog
```
