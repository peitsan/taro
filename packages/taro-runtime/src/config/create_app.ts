import { isFunction } from '@tarojs/shared'
import { Current } from '../current'
import { Instance } from './instance'

export function createAppConfig (render: () => Instance) {
  const config = {
    onLaunch () {
      Current.app = render()
    },
    onShow () {
      const func = Current.app!.componentDidShow || Current.app!.onShow
      if (isFunction(func)) {
        func.call(Current.app)
      }
    },
    onHide () {
      const func = Current.app!.componentDidHide || Current.app!.onHide
      if (isFunction(func)) {
        func.call(Current.app)
      }
    }
  }

  return config
}