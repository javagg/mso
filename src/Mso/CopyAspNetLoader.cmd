REM copy the AspNet.Loader.dll to bin folder
md bin

set ASPNETLOADER_PACKAGE_BASEPATH=%USERPROFILE%\.kpm\packages\Microsoft.AspNet.Loader.IIS.Interop
REM figure out the path of AspNet.Loader.dll
for /F %%j IN ('dir /b /o:-d %ASPNETLOADER_PACKAGE_BASEPATH%\*') do (set AspNetLoaderPath=%ASPNETLOADER_PACKAGE_BASEPATH%\%%j\tools\AspNet.Loader.dll)
echo Found AspNetLoader.dll at %AspNetLoaderPath%. Copying to bin\
copy %AspNetLoaderPath% bin\

