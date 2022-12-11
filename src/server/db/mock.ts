import { faker } from "@faker-js/faker"

const fakeAppIcon = [
  '/img/app-icon/fake-1.png',
  '/img/app-icon/fake-2.png',
  '/img/app-icon/fake-3.png',
  '/img/app-icon/fake-4.png'
]

export const roles = [
  ...new Set([
    'Front-end Engineer',
    ...(new Array(10).fill(true).map(() => faker.name.jobTitle()))
  ])
]

export function getRandom<T = unknown>(collection: Array<T>) {
  return collection.at(faker.datatype.number({ min: 0, max: collection.length - 1 })) as T
}

export const users = [
  {
    uid: faker.datatype.uuid(),
    name: 'Ario Widiatmoko',
    email: 'ario.widiatmoko@sigma.co.id',
    role: 'Front-end Engineer'
  },
  ...new Array(10).fill(true).map((_, i) => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    return {
      uid: `${faker.datatype.uuid()}-${i}`,
      name: firstName + ' ' + lastName,
      email: faker.internet.email(firstName, lastName, 'sigma.co.id'),
      role: getRandom(roles)
    }
  })
]

export const groups = [
  {
    name: 'global',
    created: new Date(2022, 10, 12),
    createdBy: null,
    members: null
  },
  ...(new Array(5).fill(true).map(() => {
    return {
      name: faker.internet.domainWord().split('-').at(0) as string,
      created: faker.date.past(),
      createdBy: getRandom(users),
      members: faker.helpers.shuffle(users).slice(0, 5)
    }
  }))
]

export const apps = new Array(25).fill(true).map(() => {
  const appName = faker.company.bs()
  return {
    name: appName,
    code: appName.split(' ').map(i => i.at(0)).join(""),
    group: getRandom(groups),
    created: faker.date.past(),
    createdBy: getRandom(users),
    icon: faker.helpers.shuffle(fakeAppIcon).at(0) as string,
    collabs: faker.helpers.shuffle(users).slice(0, 5)
  }
})