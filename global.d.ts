// This file contains global TypeScript declarations

declare module "*";

// Use `declare const` instead of `declare var` to avoid ESLint errors
declare const React: any;

// You can also disable ESLint for this specific declaration if necessary
// eslint-disable-next-line no-var
declare var someGlobalVar: string;

