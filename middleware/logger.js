module.exports = (req, res, next) => {
  const now = new Date().toISOString();
  console.log(`Fecha: [${now}] Tipo de peticion: ${req.method} URL: ${req.originalUrl}`);
  next();
};
