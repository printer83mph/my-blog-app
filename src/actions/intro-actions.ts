import { IntroData } from '../types'

// eslint-disable-next-line import/prefer-default-export
export const updateIntro = (data: IntroData) => ({
  type: 'intro/updated',
  payload: data,
})
