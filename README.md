Crear un nuevo repositorio de Git e inicializaran con un archivo:
Los siguientes comandos se utilizan para crear un nuevo repositorio de Git e inicializaran con un archivo README.md:

echo "# learn-typescript" >> README.md: Este comando crea un archivo README.md y agrega el título "learn-typescript" en la primera línea.

git init: Inicializa un nuevo repositorio de Git en el directorio actual.

git add README.md: Agrega el archivo README.md al área de preparación (staging area) de Git. Esto significa que está listo para incluirse en el próximo commit.

git commit -m "first commit": Crea un nuevo commit con el mensaje "first commit" que incluye los cambios en el área de preparación (en este caso, el archivo README.md).

git branch -M main: Renombra la rama actual a "main" (por defecto, la rama principal en Git se llama "master", pero "main" se ha vuelto más común en los últimos años).

git remote add origin https://github.com/user/learn-typescript.git: Agrega un nuevo repositorio remoto llamado "origin" con la URL proporcionada (reemplaza "user" con tu nombre de usuario de GitHub y "learn-typescript" con el nombre del repositorio que deseas utilizar en GitHub).

git push -u origin main: Empuja los cambios locales en la rama "main" al repositorio remoto "origin" (en este caso, tu repositorio de GitHub). La opción -u establece la rama remota "origin/main" como el seguimiento predeterminado para la rama local "main".