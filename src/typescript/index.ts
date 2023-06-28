export * from "./server";
export * from "./styles";

export type NullaryFn<R> = () => R;
export type UnaryFn<P1, R> = (p1: P1) => R;
