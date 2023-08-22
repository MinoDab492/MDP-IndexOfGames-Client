##  MDP-IndexOfGames-ElectronClient

## About This Project
The Index Of Games is a project made by me, initially for some school friends. The goal was to give us some entertainment on those boring days in school. Since then it has evolved to contain multiple games, a reimplementation of DOOM, Cookie Clicker, and some others.

## Client Notice
While currently two versions of the client have been added, it is recommended to use the Electron Client when possible. The Cordova Client is considered second priority, and may recieve updates slower than the Electron Client, additionally, it may have additional security issues, or performance issues, or even may not compile. A pre-built binary for the Cordova Client will not be provided.

## How To Report Issues
If it's a security risk, check SECURITY.md for instructions, otherwise, use the issue templates located in the .github folder.

## How To Contribute
Check out CONTRIBUTING.md for specific instructions.

## How To Compile
Compilation is currently configured and supported for two platforms, Windows, as a native .exe, or Linux, as a .deb file.
To compile for Windows, simply run the compileWin.bat file.
To compile for Linux, it's a little more involved. It requires installation of Docker For Windows. Utilizing ElectronUserLand/builder through Docker. More documentation will be written for compilation shortly.
To compile for both Linux and Windows at once, simply ensure that you set up everything for proper compilation, then run compile.bat.

## Code of Conduct
Before performing work, opening pull requests, or issues, please reference the CodeOfConduct.md file located in the root directory of the respoitory.
