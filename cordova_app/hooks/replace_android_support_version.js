// This hook updates the cordova.system.library.1 property in the platforms/android/project.properties file
// with a compatible com.android.support:support-v4:27.1.0 version to be used in the cordova android builds.
// module.exports = function(context) {
//
//     var fs = context.requireCordovaModule('fs');
//     var path = context.requireCordovaModule('path');
//     var propertiesPath = path.join(context.opts.projectRoot, 'platforms/android/project.properties');
//     var propertiesFile = fs.readFileSync(propertiesPath, 'utf8');
//
//     if (propertiesFile.indexOf('com.android.support:support-v4:+') !== -1) {
//
//         var modifiedPropertiesFile = propertiesFile.replace('com.android.support:support-v4:+', 'com.android.support:support-v4:27.1.0');
//
//         fs.writeFile(path.join(context.opts.projectRoot, 'platforms/android/project.properties'), modifiedPropertiesFile, 'utf8', function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("Successfully replaced com.android.support:support-v4:+ with com.android.support:support-v4:27.1.0");
//             }
//         });
//     }
// };

