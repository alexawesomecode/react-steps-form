module.exports.calculaPuntaje = values => {
  if (values.energia === 'gasnatural') return 100;
  return 200;
};
