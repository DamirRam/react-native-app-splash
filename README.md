# react-native-app-splash

[![Download](https://img.shields.io/badge/Download-v1.0.2-ff69b4.svg) ](https://www.npmjs.com/package/react-native-app-splash)

React Native app splash library: programmatically show/hide for Android & iOS.


## Content

- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contribution](#contribution)





## Installation

### First Step(Download):

```bash
$ npm install --save react-native-app-splash
```
```bash
$ yarn add react-native-app-splash
```


#### Manual Installation(If Needed)

**Android:**

1. In your `android/settings.gradle` file, make the following additions:
```java or kotlin
include ':react-native-app-splash'   
project(':react-native-app-splash').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-app-splash/android')
```

2. In your android/app/build.gradle file, add the `:react-native-app-splash` project as a compile-time dependency:

```java or kotlin
...
dependencies {
    ...
    implementation project(':react-native-app-splash')
}
```

**iOS:**

1. `cd ios`
2. `run pod install`

### Second Step(Plugin Configuration):

**Android:**

Update the `MainActivity.java` to use `react-native-app-splash` via the following changes:

**java:**
```java
import android.os.Bundle; // here
import com.appsplash.AppSplash; // here

public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        AppSplash.show(this);  // here
        super.onCreate(null) // to fix Fragment constructor caused an exception
    }
    // ...other code
}
```
**kotlin:**
```kotlin
import android.os.Bundle; // here
import com.appsplash.AppSplash; // here

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        AppSplash.show(this)
        super.onCreate(null) // to fix Fragment constructor caused an exception
    }
    // ...other code
}
```

**iOS:**

Update `AppDelegate.m` with the following additions:

**obj-c:**
```obj-c
#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import "AppSplash.h"  // here

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // ...other code
    [super application:application didFinishLaunchingWithOptions:launchOptions];
    [AppSplash show];  // here
    return YES;
}

@end

// ...other code

```

## Getting started  

### Android:

Create a file called `app_splash.xml` in `app/src/main/res/layout` (create the `layout`-folder if it doesn't exist). The contents of the file should be the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/_dialog_parent"
    android:layout_width="match_parent"
    android:background="@android:color/white"
    android:layout_height="match_parent">

      <ImageView
        android:id="@+id/_dialog_imageview"
        android:layout_width="match_parent"
        android:src="@drawable/app_splash"
        android:layout_centerHorizontal="true"
        android:layout_centerVertical="true"
        android:layout_height="match_parent"
        tools:ignore="ContentDescription" />

</RelativeLayout>
```

Customize your launch screen by creating a `app_splash.png`-file and placing it in an appropriate `drawable`-folder. Android automatically scales drawable, so you do not necessarily need to provide images for all phone densities.
You can create app splashs in the following folders:
* `drawable-ldpi`
* `drawable-mdpi`
* `drawable-hdpi`
* `drawable-xhdpi`
* `drawable-xxhdpi`
* `drawable-xxxhdpi`



**Optional steps：**

If you want the app splash to be full screen, Change your `show` method.

**java/kotlin:**
```java or kotlin
AppSplash.show(this, true)
```

### iOS    

Customize your app splash via `LaunchScreen.storyboard` or `LaunchScreen.xib`。


## Usage

Use like so:

```javascript
import AppSplash from 'react-native-app-splash';

const App = () => {

    React.useEffect(() => {
        // do the needed action while app splash is shown
        // After having done action hide the app splash
        AppSplash?.hide()  
    }, [])

}
export default App;
```

## API


| Method                                                  | Type     | Optional | Description                      |
| ------------------------------------------------------- | -------- | -------- | -------------------------------- |
| show()                                                  | function | false    | Open App Splash (Native Method ) |
| show(final Activity activity, final boolean fullScreen) | function | false    | Open App Splash (Native Method ) |
| hide()                                                  | function | false    | Close App Splash                 |


## Contribution

Issues are welcome. Please add a screenshot of you bug and a code snippet. Quickest way to solve issue is to reproduce it in one of the examples.
---

**[MIT Licensed](https://github.com/sudesh-kumar-cse/react-native-app-splash/blob/master/LICENSE)**