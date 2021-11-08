//ERROS
const { CustomAPIError } = require('../errors/custom-error')

const errorHandler = (err, req, res, next) => {

    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({
            msg: err.message
        })
    }

    return res
        .status(500)
        .json({
            msg: err?.errors?.name?.message ||
                err.message ||
                'someting went wrong'
        })

}

module.exports = errorHandler
