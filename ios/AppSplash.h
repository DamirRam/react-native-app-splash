#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAppSplashSpec.h"

/**
 * App Splash
 * Author:Sudesh Kumar
 * GitHub:https://github.com/sudesh-kumar-cse
 */

@interface AppSplash : NSObject <NativeAppSplashSpec>
+ (void)showSplash:(NSString*)splashLayout inRootView:(UIView*)rootView;
+ (void)show;
+ (void)hide;
#else
#import <React/RCTBridgeModule.h>

@interface AppSplash : NSObject <RCTBridgeModule>
+ (void)showSplash:(NSString*)splashLayout inRootView:(UIView*)rootView;
+ (void)show;
+ (void)hide;
#endif

@end
