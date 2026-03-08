// ============================================
// ARQUIVO DE CREDENCIAIS - USUÁRIOS DO SISTEMA
// ============================================
// Para adicionar novos usuários, copie o modelo abaixo:
// { usuario: 'XXXX', senha: 'XXXX', nome: 'NOME DO OPERADOR' },
//
// IMPORTANTE:
// - Usuário: 4 dígitos numéricos
// - Senha: 4 dígitos numéricos
// - Nome: Nome que será exibido após login
// ============================================

const USUARIOS_SISTEMA = [
  { usuario: '4321', senha: '4321', nome: 'ADMINISTRADOR' },
  { usuario: '0391', senha: '0391', nome: 'Adrielia' },
  { usuario: '4308', senha: '4308', nome: 'Alessandra' },
  { usuario: '8248', senha: '8248', nome: 'Alisson' },
  { usuario: '9011', senha: '9011', nome: 'Anderson' },
  { usuario: '4276', senha: '4276', nome: 'Antônio' },
  { usuario: '4848', senha: '4848', nome: 'Aparecida' },
  { usuario: '1206', senha: '1206', nome: 'Augusto' },
  { usuario: '8867', senha: '8867', nome: 'Benedito' },
  { usuario: '2156', senha: '2156', nome: 'Breno' },
  { usuario: '3123', senha: '3123', nome: 'Brenda' },
  { usuario: '5661', senha: '5661', nome: 'C. Henrique' },
  { usuario: '5920', senha: '5920', nome: 'Carlos' },
  { usuario: '0236', senha: '0236', nome: 'Caroline' },
  { usuario: '8079', senha: '8079', nome: 'Clayrtiano' },
  { usuario: '6303', senha: '6303', nome: 'Cleitom' },
  { usuario: '8987', senha: '8987', nome: 'Cynthia' },
  { usuario: '6373', senha: '6373', nome: 'Daniele' },
  { usuario: '0262', senha: '0262', nome: 'Diana' },
  { usuario: '7927', senha: '7927', nome: 'Edenio' },
  { usuario: '2067', senha: '2067', nome: 'Edivan' },
  { usuario: '8990', senha: '8990', nome: 'Emanuel' },
  { usuario: '9342', senha: '9342', nome: 'Essan' },
  { usuario: '7742', senha: '7742', nome: 'Fernando' },
  { usuario: '7064', senha: '7064', nome: 'Francisca' },
  { usuario: '9308', senha: '9308', nome: 'Francivanda' },
  { usuario: '3152', senha: '3152', nome: 'Gerfson' },
  { usuario: '3179', senha: '3179', nome: 'Geovani' },
  { usuario: '8998', senha: '8998', nome: 'Ingrid' },
  { usuario: '7014', senha: '7014', nome: 'Jacome' },
  { usuario: '2044', senha: '2044', nome: 'Jose' },
  { usuario: '9001', senha: '9001', nome: 'Kellyo' },
  { usuario: '0457', senha: '0457', nome: 'Lucas' },
  { usuario: '4059', senha: '4059', nome: 'Letycia' },
  { usuario: '0214', senha: '0214', nome: 'Matheus' },
  { usuario: '9020', senha: '9020', nome: 'Medeiros' },
  { usuario: '7019', senha: '7019', nome: 'Muniz' },
  { usuario: '3040', senha: '3040', nome: 'Patricia' },
  { usuario: '5751', senha: '5751', nome: 'Patricio' },
  { usuario: '9440', senha: '9440', nome: 'Raymison' },
  { usuario: '4296', senha: '4296', nome: 'Roger' },
  { usuario: '3499', senha: '3499', nome: 'Rogerio' },
  { usuario: '8018', senha: '8018', nome: 'Severino' },
  { usuario: '2671', senha: '2671', nome: 'Sergio' },
  { usuario: '4310', senha: '4310', nome: 'Socorro' },
  { usuario: '9009', senha: '9009', nome: 'Tainara' },
  { usuario: '9438', senha: '9438', nome: 'Thaynara' },
  { usuario: '9344', senha: '9344', nome: 'Thais' },
  { usuario: '8342', senha: '8342', nome: 'Valter' },
  { usuario: '9131', senha: '9131', nome: 'Viana' },
  { usuario: '1888', senha: '1888', nome: 'Vinicius' },
  { usuario: '6713', senha: '6713', nome: 'Vitorino' },
  { usuario: '3991', senha: '3991', nome: 'Willian' },
  { usuario: '9354', senha: '9354', nome: 'Yasmin' },
  { usuario: '0515', senha: '0515', nome: 'Zildência'}
  ];

// Função para validar login (não modificar)
function validarLogin(usuario, senha) {
  const usuarioEncontrado = USUARIOS_SISTEMA.find(
    u => u.usuario === usuario && u.senha === senha
  );
  return usuarioEncontrado || null;
}
