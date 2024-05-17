
const path = require('path');
const fs = require('fs');
const parentDir = path.resolve(__dirname, '../..');


// Check if the layout folder exists, if not, create it
function addNewLayoutXml() {
    const androidAppSrcMainRes = path.join(parentDir, 'android', 'app', 'src', 'main', 'res');
    const newLayoutFolder = path.join(androidAppSrcMainRes, 'layout');

    // Create the layout folder if it doesn't exist
    if (!fs.existsSync(newLayoutFolder)) {
        fs.mkdirSync(newLayoutFolder, { recursive: true });
    }

    // Define the content of the new layout XML file
    const newLayoutXmlContent = `<?xml version="1.0" encoding="utf-8"?>
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
        android:layout_centerHorizontal="true"
        android:layout_centerVertical="true"
        android:layout_height="match_parent"
        tools:ignore="ContentDescription" />

</RelativeLayout>`;

    // Define the path for the new layout XML file
    const newLayoutXmlPath = path.join(newLayoutFolder, 'app_splash.xml');

    // Write the content to the new layout XML file
    fs.writeFile(newLayoutXmlPath, newLayoutXmlContent, (err) => {
        if (err) {
            console.error('Error creating app_splash.xml:', err);
            return;
        }
        console.log('app_splash.xml created successfully.');
    });
}

// Call the function to add new layout XML
addNewLayoutXml();