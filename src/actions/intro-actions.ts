// eslint-disable-next-line import/prefer-default-export
export const updateIntro = (image: string, description: string) => (
  { type: 'intro/updated', payload: { image, description } }
)
