@echo off
echo Iniciando Backend PocketBase para AcorreRondon...
cd pb
pocketbase.exe serve --http="127.0.0.1:8090"
pause
