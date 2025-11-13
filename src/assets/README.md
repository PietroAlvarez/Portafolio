# Instrucciones para agregar tu CV

## Paso 1: Prepara tu CV

1. Asegúrate de tener tu CV en formato PDF
2. Nombra el archivo exactamente como: `CV_Pietro_Alvarez.pdf`

## Paso 2: Coloca el archivo aquí

1. Copia tu archivo `CV_Pietro_Alvarez.pdf` en esta carpeta (`src/assets/`)
2. El archivo debe estar en: `src/assets/CV_Pietro_Alvarez.pdf`

## Paso 3: Commit y Push

Una vez que agregues el archivo:

```bash
git add src/assets/CV_Pietro_Alvarez.pdf
git commit -m "feat: Agregar CV en PDF"
git push origin main
```

## Nota

El botón "Descargar CV" en la página de inicio ya está configurado para descargar este archivo.
Si quieres cambiar el nombre del archivo, debes actualizar también la ruta en:

- `src/app/components/home/home.component.ts` (línea del método `downloadCV()`)
