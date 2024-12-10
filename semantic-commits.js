import fs from 'fs';

const args = process.argv.slice(2); 
const stateFilePath = './.husky/.commit-state'; 


let habilitacionCommits = 'disabled';
if (fs.existsSync(stateFilePath)) {
  habilitacionCommits = fs.readFileSync(stateFilePath, 'utf-8').trim();
}


if (args[0] === 'enable' || args[0] === 'disabled') {
  habilitacionCommits = args[0];
  fs.writeFileSync(stateFilePath, habilitacionCommits, 'utf-8');
  console.log(`🔄 Validación de commits ${habilitacionCommits === 'enable' ? 'habilitada' : 'deshabilitada'}.`);
  process.exit(0);
}


if (habilitacionCommits === 'enable') {
  try {
    const commitMessagePath = args[0]; 
    const commitMessage = fs.readFileSync(commitMessagePath, 'utf-8').trim();

  
    const semanticRegex = /^(feat|fix|docs|style|refactor|test|chore|perf)(\(\w+\))?: .{1,50}$/;

    if (!semanticRegex.test(commitMessage)) {
      console.error('⛔️ Error: El mensaje del commit debe seguir las convenciones semánticas.');
      console.error('Ejemplo: refactor(login): simplificar la función que valida el correo electrónico ');
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
