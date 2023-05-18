@echo off

echo "Starting TSM..."

IF EXIST "script.ts" (
    echo "script.ts found..."
) ELSE (
    echo "Downloading script.ts..."
    curl -o script.ts https://raw.githubusercontent.com/TeamScripters/TeamScript/main/script.ts
)

cls 

:loop
cls

echo "Restarting TSM..."
Deno run --no-check --allow-all script.ts
pause


goto loop