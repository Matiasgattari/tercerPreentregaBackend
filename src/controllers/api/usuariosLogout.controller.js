export async function deleteSesiones(req, res, next) {
    try {
      req.session.destroy(err => {
        res.sendStatus(200)
      })
    } catch (error) {
      next(error)
    }
  }