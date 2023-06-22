## receipt interface:

```
allTheReceipts = {
    keyword {string} : {
        browserReceipts {string[]} : required,
        printerReceipts {string[][]} : required,
    },
    keyword {string} : {
        browserReceipts {string[]} : required,
        printerReceipts {string[][]} : required,
    },
    ...
}
```

## Defining a new Receipt Set (aka a new Receipt Page)

1. create a new file in `/receipt_sets` directory
2. copy and paste the contents of `/receipt_sets/_newReceiptSetTemplate.js`
3. complete the 4 tasks marked `TODO:` in the template code

### current keywords

- allSprites
- 7_columns **_(current default)_**
- iterationOne
- iterationTwo
- iterationThree

## visualize and print

Each receipt set can be visualized and printed from `shapes-beta.html?receiptSet=KEYWORD`.
