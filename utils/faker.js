import faker from 'faker'

export function generateHeroes() {
  return [...Array(50)].map((item, index) => ({
    id: index,
    nickname: faker.internet.userName().slice(0,5),
    real_name: faker.name.firstName(),
    origin_description: faker.lorem.sentence(5),
    superpowers: faker.lorem.words(3),
    catch_phrase: faker.company.catchPhrase(),
    images: [...Array(5)].map(img => `https://i.picsum.photos/id/${Math.round(Math.random() * 10) * 100}/500/500.jpg`)
  }))
}
