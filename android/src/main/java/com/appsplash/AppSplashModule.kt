package com.appsplash

/**
 * App Splash
 * Author:Sudesh Kumar
 * GitHub:https://github.com/sudesh-kumar-cse
 */

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class AppSplashModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun show() {
    AppSplash.show(currentActivity)
  }

  @ReactMethod
  fun hide() {
    AppSplash.hide(currentActivity)
  }

  companion object {
    const val NAME = "AppSplash"
  }
}
