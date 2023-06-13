export async function deleteSesiones(req, res, next) {
    req.session.destroy(err => {
      res.sendStatus(200)
    })
  }