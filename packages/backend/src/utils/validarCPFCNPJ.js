export const validarCPF = (cpf) =>  {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(.)\1{10}$/.test(cpf)) return false; // Verifica se o CPF tem 11 dígitos e não são todos iguais
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    remainder = (remainder >= 10) ? 0 : remainder;
    if (parseInt(cpf.charAt(9)) !== remainder) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    remainder = (remainder >= 10) ? 0 : remainder;
    if (parseInt(cpf.charAt(10)) !== remainder) return false;
  
    return true;
  }
  
 export const  validarCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cnpj.length !== 14 || /^(.)\1{13}$/.test(cnpj)) return false; // Verifica se o CNPJ tem 14 dígitos e não são todos iguais
    
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = (weight === 2) ? 9 : weight - 1;
    }
    let remainder = 11 - (sum % 11);
    remainder = (remainder >= 10) ? 0 : remainder;
    if (parseInt(cnpj.charAt(12)) !== remainder) return false;
  
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = (weight === 2) ? 9 : weight - 1;
    }
    remainder = 11 - (sum % 11);
    remainder = (remainder >= 10) ? 0 : remainder;
    if (parseInt(cnpj.charAt(13)) !== remainder) return false;
  
    return true;
  }
  
  export const  validarCPFCNPJ = (documento) =>{
    documento = documento.replace(/[^\d]/g, '');
    
    if (documento.length === 11 && !/^(.)\1{10}$/.test(documento)) {
      return validarCPF(documento);
    }
    
    if (documento.length === 14 && !/^(.)\1{13}$/.test(documento)) {
      return validarCNPJ(documento);
    }
    
    return false;
  }
  
  function convertToDate(dateString) {
    const regex = /^(\d{4})(\d{2})(\d{2})$/;
  
    const match = regex.exec(dateString);
    if (!match) {
        throw new Error("Formato de data inválido. Use o formato YYYYMMDD.");
    }
  
    const date = new Date(parseInt(match[1]), parseInt(match[2]) -1, parseInt(match[3]));
  
    return date.toISOString();
  }