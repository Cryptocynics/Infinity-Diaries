import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'vj8fz11e',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skTqeZInIeiuFOUyf9bvCW7O1WsfKpjbqpYOZ4BsSC9zH19TuRBaqdn3piIrMwszXhhQY43KgAZCnktN1UJU6HfKdv2BdGF1u0JTxFGSVS2JjMwsC0qQViICFKBes2xUpdwnhXXLhdrNtzeAdVG5gQciO0BGhSpFhA8bjZJxu5Dvhr1Lv6CX',
  useCdn: false,
})