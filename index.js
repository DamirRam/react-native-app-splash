/**
 * App Splash
 * Author:Sudesh Kumar
 * GitHub:https://github.com/sudesh-kumar-cse
 */

import { NativeModules } from 'react-native';
module.exports = {
    show: NativeModules.AppSplash.show,
    hide: NativeModules.AppSplash.hide,
}