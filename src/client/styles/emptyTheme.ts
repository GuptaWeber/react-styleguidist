/**
 * We need an `emptyStyle.ts` and an `emtyTheme.ts` file
 * because unit testing usingjest does not allow us to
 * mock 2 separate files pointing to the same file.
 */

export default {} as RecursivePartial<Rsg.Theme>;
