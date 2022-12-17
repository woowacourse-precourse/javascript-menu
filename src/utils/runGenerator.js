/**
 * @param thing
 */
function isTask(thing) {
  return typeof thing === 'function';
}

/**
 * @param gen
 * @param prevGenResult
 */
function whileGenerates(gen, prevGenResult) {
  if (isTask(prevGenResult.value)) {
    const task = prevGenResult.value;
    const resolve = (...args) => whileGenerates(gen, gen.next(...args));
    try {
      task(resolve); // run callback
    } catch (error) {
      gen.throw(error);
    }
  } else if (prevGenResult.value instanceof Error) {
    gen.throw(prevGenResult.value);
  } else if (!prevGenResult.done) {
    whileGenerates(gen, gen.next(prevGenResult.value));
  }
}

/**
 *
 * @param generator
 */
function runGenerator(generator) {
  const gen = generator();
  whileGenerates(gen, gen.next());
}

module.exports = runGenerator;
