import { setupServer } from 'msw/node'
import requests from './mocks'

const server = setupServer(...requests)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())