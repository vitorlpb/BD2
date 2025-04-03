import fs from 'fs';
import Papa from 'papaparse';
import Person from './models/personModel.mjs';

export const importCsvData = async (filePath) => {
  try {
    // Define o caminho do arquivo limpo
    const cleanedFilePath = filePath;

    // Lê o arquivo CSV limpo como uma string
    const fileContent = fs.readFileSync(cleanedFilePath, 'utf8');

    // Faz o parsing do conteúdo do CSV
    const results = Papa.parse(fileContent, {
      header: true, // Garante que a primeira linha seja tratada como cabeçalho
      skipEmptyLines: true, // Ignora linhas vazias
      delimiter: ',', // Define a vírgula como delimitador
      transformHeader: (header) => header.trim(), // Remove espaços extras no cabeçalho
    });

    const rows = results.data;

    // Insere os dados no banco de dados
    for (const row of rows) {
      console.log('Inserindo dados:', row); // Loga os dados antes de inserir
      await Person.create({
        user_id: row['User Id'],
        first_name: row['First Name'],
        last_name: row['Last Name'],
        sex: row['Sex'],
        email: row['Email'],
        phone: row['Phone'],
        date_of_birth: row['Date of birth'],
        job_title: row['Job Title'],
      });
    }

    console.log('Dados importados com sucesso!');
  } catch (error) {
    console.error('Erro ao importar dados:', error);
  }
};

/*
export const cleanCsvFile = (inputFilePath, outputFilePath) => {
  try {
    // Lê o conteúdo do arquivo CSV
    const fileContent = fs.readFileSync(inputFilePath, 'utf8');

    // Processa cada linha do arquivo
    const cleanedContent = fileContent
      .split('\n') // Divide o conteúdo em linhas
      .map((line) => {
        // Remove todas as aspas
        line = line.replace(/"/g, '');

        // Divide a linha em campos
        const parts = line.split(',');

        // Se houver mais de 8 colunas, junta as colunas extras na última
        if (parts.length > 9) {
          parts[8] = parts.slice(8).join(','); // Junta tudo a partir da 8ª coluna
          parts.length = 9; // Garante que a linha tenha exatamente 8 colunas
        }

        // Remove vírgulas do campo "Job Title" (8ª coluna)
        if (parts.length === 9) {
          parts[8] = parts[8].replace(/,/g, '');
        }

        // Junta os campos novamente
        return parts.join(',');
      })
      .join('\n'); // Junta as linhas novamente

    // Salva o conteúdo limpo em um novo arquivo
    fs.writeFileSync(outputFilePath, cleanedContent, 'utf8');
    console.log(`Arquivo CSV limpo salvo em: ${outputFilePath}`);
  } catch (error) {
    console.error('Erro ao limpar o arquivo CSV:', error);
  }
};

const inputFilePath = '/BD2/people-100000.csv';
const outputFilePath = '/BD2/people-100000_cleaned.csv';

cleanCsvFile(inputFilePath, outputFilePath);
*/