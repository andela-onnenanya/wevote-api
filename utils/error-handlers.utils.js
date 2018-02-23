/**
 * Handle Sequelize Error
 *
 * @export
 * @param {object} error the error object
 * @param {object} res the response object
 * @returns {object} the error response
 */
function handleError(error, res) {
  if (!error.errors) {
    const {
      original = {
        sql: '',
        length: '',
        position: '',
        parent: 'debug error',
        file: '',
        line: '',
        routine: ''
      }
    } = error;
    const {
      sql, length, position, file, line, routine, ...err
    } = original;
    error.errors = [err];
  }
  const { errors: [err = `${error.parent}`] } = error;
  const { message } = err;

  return res.status(500).json({ status: 'fail', message });
}

/**
 * Handle sequelize errors
 * @param {object} error error object
 * @param {function} res server response function
 * @returns {object} retrieved error message
 */
export function handleSequelizeError(error, res) {
  console.log('Error2', error);
  return error.errors
    ? res.status(400).send({ message: error.errors[0].message })
    : res.status(400).send({ messag: error.message });
}

// placeholder to avoid eslint errror
export const yea = () => true;
