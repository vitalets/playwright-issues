## [BUG]: Calling execSync() in test produces extra attachment

### Steps to reproduce

1. Clone the repo and switch to this branch
2. Install dependencies
    ```
    npm i
    ```
3. Run tests
    ```
    npx playwright test
    ```

### Actual result
There are two `stdout` attachments:
1. normal expandable `stdout` attachment: 
   ```
   foo
   baz
   ```
2. binary `stdout` attachment

Report:

<img width="60%" src="https://github.com/user-attachments/assets/8fb733c5-0284-4a83-b666-1ee737bd84c8">

### Expected result
Single `stdout` attachment containing all outputs:
```
foo
bar
baz
```
