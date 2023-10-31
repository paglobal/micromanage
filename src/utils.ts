// `c` !!!
// from stack overflow -> https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function randomSuffix(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const c = <T extends readonly string[]>(...classNames: T) => {
  const classes: Record<T[number], T[number]> = {} as Record<
    T[number],
    T[number]
  >;
  classNames.forEach((className: T[number]) => {
    classes[className] = `${className}-${randomSuffix(10)}`;
  });

  return classes;
};
// `c` !!!

// `Replace` and `SliceBeginningDashes` !!!
type Literal = string | number | bigint | boolean;

type Cast<A1 extends any, A2 extends any> = A1 extends A2 ? A1 : A2;

type _Replace<
  S extends string,
  R extends Literal,
  W extends Literal
> = S extends `${infer BS}${R}${infer AS}`
  ? Replace<`${BS}${W}${AS}`, R, W>
  : S;

export type Replace<
  S extends string,
  R extends Literal,
  W extends Literal
> = _Replace<S, R, W> extends infer X ? Cast<X, string> : never;

export type SliceBeginningDashes<V> = V extends `--${infer V1}` ? V1 : V;
// `Replace` and `SliceBeginningDashes` !!!
