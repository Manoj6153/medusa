import { render, screen } from "@testing-library/react"
import { Direction } from "radix-ui"

import { I18nProvider } from "./i18n-provider"

const DirectionConsumer = () => {
  const direction = Direction.useDirection()

  return <div data-testid="direction">{direction}</div>
}

test("provides RTL direction to Radix components", () => {
  render(
    <I18nProvider locale="ar">
      <DirectionConsumer />
    </I18nProvider>
  )

  expect(screen.getByTestId("direction")).toHaveTextContent("rtl")
})

test("provides LTR direction to Radix components", () => {
  render(
    <I18nProvider locale="en">
      <DirectionConsumer />
    </I18nProvider>
  )

  expect(screen.getByTestId("direction")).toHaveTextContent("ltr")
})