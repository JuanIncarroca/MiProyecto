Actividad Colaborativa con Git y GitHub
Pasos realizados
1. Crear un repositorio
Un miembro del equipo creó un repositorio en GitHub llamado MiProyecto. Repositorio: MiProyecto

2. Compartir el repositorio
El repositorio fue compartido con los demás miembros del equipo mediante invitaciones en GitHub.

3. Clonar el repositorio
Cada miembro del equipo clonó el repositorio en su máquina local usando el siguiente comando:

bash
git clone https://github.com/JuanIncarroca/MiProyecto.git
4. Realizar commits colaborativos
Cada miembro realizó al menos 2 commits significativos con cambios al repositorio.

Ejemplo de comandos utilizados:

bash
git add .
git commit -m "Agregar nueva funcionalidad"
git push origin main
5. Generar y resolver conflictos
Conflicto intencional: Dos personas modificaron la misma línea de código en archivos diferentes.

Resolución del conflicto:

Se utilizó el comando git pull para obtener cambios del repositorio remoto.

Git detectó el conflicto en el archivo.

Se resolvió el conflicto editando el archivo manualmente y usando:

bash
git add <archivo_resuelto>
git commit -m "Resolver conflicto"
git push origin main
6. Subir los cambios al repositorio remoto
Los cambios finales, incluidos los conflictos resueltos, se subieron al repositorio remoto utilizando git push.
