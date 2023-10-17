/**
 * Part of this code is taken from @chakra-ui/system ❤️
 */

export type As<Props = any> = React.ElementType<Props>

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
  Target,
  'transition' | 'as' | 'color' | OmitAdditionalProps
>

export type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<
  SourceProps,
  keyof OverrideProps
> &
  OverrideProps

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = (RightJoinProps<ComponentProps, AdditionalProps> | RightJoinProps<AsProps, AdditionalProps>) & {
  as?: AsComponent
}

export type InternalForwardRefRenderFunction<
  Component extends As,
  Props extends object = {},
  OmitKeys extends keyof any = never
> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentPropsWithoutRef<Component>,
      Omit<React.ComponentPropsWithoutRef<AsComponent>, OmitKeys>,
      Props,
      AsComponent
    >
  ): React.ReactElement | null
  readonly $$typeof: symbol
  defaultProps?: Partial<Props> | undefined
  propTypes?: React.WeakValidationMap<Props> | undefined
  displayName?: string | undefined
}

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

export type HTMLMultiwayUIProps<T extends As = 'div', OmitKeys extends keyof any = never> = Omit<
  PropsOf<T>,
  'ref' | 'color' | 'slot' | OmitKeys
> & {
  as?: As
}
