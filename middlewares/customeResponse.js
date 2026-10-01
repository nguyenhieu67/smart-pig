function customResponse(req, res, next) {
  res.success = (data, status = 200) => {
    res.status(status).json({
      data,
    });

    res.error = (error, status) => {
      res.status(status).json({
        error: error,
      });
    };

    next();
  };
}
