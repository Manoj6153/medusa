"use client"

import * as React from "react"
import { Direction } from "radix-ui"
import {
  I18nProvider as Primitive,
  I18nProviderProps as Props,
  useLocale,
} from "react-aria"

type I18nProviderProps = Props

const DirectionProvider = ({ children }: { children: React.ReactNode }) => {
  const { direction } = useLocale()

  return <Direction.Provider dir={direction}>{children}</Direction.Provider>
}

const I18nProvider = (props: I18nProviderProps) => {
  return (
    <Primitive {...props}>
      <DirectionProvider>{props.children}</DirectionProvider>
    </Primitive>
  )
}

export { I18nProvider }
