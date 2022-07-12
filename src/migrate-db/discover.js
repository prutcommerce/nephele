export const discover = importer => {
  const createName = name => name.replace('./', '')

  return importer?.keys().map(name => ({
    name: createName(name),
    up: ({ context }) => importer(name).up(context?.queryInterface, context?.sequelize),
    down: ({ context }) => importer(name).down(context?.queryInterface, context?.sequelize),
  }))
}
