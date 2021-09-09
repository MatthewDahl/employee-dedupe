# employee-dedupe

A CLI application to process csv files containing employee records,
and remove duplicate rows based on chosen deduplication strategy.

## setup

**Ensure you have Node 14.x LTS installed/setup**

> Version pinned w/ [Volta](https://volta.sh/)

_Navigate to project directory and install dependencies_

```sh
npm install
```

## usage

```sh
./src/index.ts dedupe ./tests/data/employee.csv email

# file generated:
# ./tests/data/1631180297082_deduped_by_email_employees.csv
```

## --help output

```sh
index.ts dedupe <input> <strategy>

create a deduped copy of input file

Positionals:
  input     Path to Employee CSV                             [string] [required]
  strategy  Strategy to use for dedupe process
               [string] [required] [choices: "email", "phone", "email_or_phone"]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```
