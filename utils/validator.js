module.exports = {
  user: (app, req, res) => {
    req.assert('name', 'O nome é obrigatório.').notEmpty();
    req.assert('email', 'O e-mail é obrigatório.').notEmpty().isEmail();

    let errors = req.validationErros();

    if (errors) {
      app.utils.error.send(errors, req, res);

      return false;
    } else {
      return true;
    }
  },
};
