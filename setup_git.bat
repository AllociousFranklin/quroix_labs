@echo off
echo Cleaning up old git artifacts...
if exist .git rd /s /q .git
if exist .next rd /s /q .next
if exist .vercel rd /s /q .vercel

echo Initializing new git repository...
git init
git add .
git commit -m "Initial commit"

echo.
echo Git repository has been reset and initialized!
pause
del setup_git.bat
