
export const PUSH: string = "PUSH";

export const triggerComponent = (component: string) => ({
  payload: {
    component,
  },
  type: PUSH,
})