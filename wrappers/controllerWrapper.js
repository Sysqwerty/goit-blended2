export function ctrlWrapper(ctrl) {
  async function func(req, res, next) {
    try {
      await ctrl(req, res, next);
    } catch (e) {
      next(e);
    }
  }

  return func;
}
