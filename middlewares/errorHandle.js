function errorHandle(error, req, res, next) {
  res.error("Server error.", 500);
}
