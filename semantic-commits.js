import fs from 'fs';

const args = process.argv.slice(2); 
const stateFilePath = './.husky/.commit-state'; 
let habilitacionCommits = 'disabled';

function printCommitGuide() {
  console.log(`\n📝 \x1b[1mGuía para mensajes de commit\x1b[0m\n`);
  console.log(`✨ \x1b[1mFormato:\x1b[0m`);
  console.log(`  <tipo>: <descripción>`);
  console.log(`\n📂 \x1b[1mTipos válidos:\x1b[0m`);
  console.log(`  - feat: Nueva funcionalidad.`);
  console.log(`  - fix: Corrección de errores.`);
  console.log(`  - docs: Cambios en documentación.`);
  console.log(`  - style: Ajustes estéticos (formato, espaciado, etc.).`);
  console.log(`  - refactor: Reestructuración del código sin cambiar su funcionalidad.`);
  console.log(`  - test: Modificaciones relacionadas con pruebas.`);
  console.log(`  - chore: Tareas de mantenimiento.`);
  console.log(`  - perf: Optimización de rendimiento.`);
  console.log(`\n🖋️ \x1b[1mDescripción:\x1b[0m`);
  console.log(`   Breve explicación del cambio (máximo 150 caracteres).`);
  console.log(`\n📌 \x1b[1mEjemplos:\x1b[0m`);
  console.log(`  - feat: agregar validación de usuarios`);
  console.log(`  - refactor: simplificar la lógica del controlador de usuarios\n`);
}

function printCommitError() {
  console.error('⛔️ Error: Mensaje de commit inválido.');
  console.error('Asegúrate de que el mensaje sigue este formato:');
  console.error('<tipo>: <descripción>');
  console.error('Ejemplo válido:');
  console.error('refactor: simplificar la función que valida el correo electrónico');
}

if (fs.existsSync(stateFilePath)) {
  habilitacionCommits = fs.readFileSync(stateFilePath, 'utf-8').trim();
}


if (args[0] === 'enable' || args[0] === 'disabled') {
  habilitacionCommits = args[0];
  fs.writeFileSync(stateFilePath, habilitacionCommits, 'utf-8');
  console.log(`🔄 Validación de commits ${habilitacionCommits === 'enable' ? 'habilitada' : 'deshabilitada'}.`);
  if (habilitacionCommits === 'enable') {
    printCommitGuide();
  }
  process.exit(0);
}


if (habilitacionCommits === 'enable') {
  try {
    const commitMessagePath = args[0]; 
    const commitMessage = fs.readFileSync(commitMessagePath, 'utf-8').trim();

  
    const semanticRegex = /^(feat|fix|docs|style|refactor|test|chore|perf)(\(\w+\))?: .{1,150}$/;

    if (!semanticRegex.test(commitMessage)) {
      printCommitError();
      process.exit(1); 
    }

    console.log('✅ Mensaje de commit válido.');
    process.exit(0); 
  } catch (err) {
    console.error('❌ Error durante la validación del mensaje del commit:', err);
    process.exit(1); 
  }
} else {
  console.log('🔄 Validación de commits deshabilitada.');
  process.exit(0); 
}
