module.exports = {
  '*.{css,md,json}': ['prettier --write'],
  '*.ts?(x)': ['eslint', 'prettier --write', () => 'tsc']
};
