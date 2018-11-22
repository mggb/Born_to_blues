import { compose, juxt, join, toUpper, head, tail } from "ramda";

const pointFreeUpperCase = compose(
  join(""),
  juxt([
    compose(
      toUpper,
      head
    ),
    tail
  ])
);

export default pointFreeUpperCase;
