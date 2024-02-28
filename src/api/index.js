

function getRecipesFromFile(filePath) {
    try {
        // Lê o conteúdo do arquivo JSON
        const recipes = require(filePath)

        // Verifica se o objeto é um array de receitas
        if (Array.isArray(recipes)) {
            return recipes;
        } else {
            return "O arquivo JSON não contém um array de receitas.";
        }
    } catch (error) {
        return "Erro ao ler o arquivo: " + error.message;
    }
}

// Exemplo de uso:
const filePath = './receitas.json'; // Substitua com o caminho real do seu arquivo
const result = getRecipesFromFile(filePath);
console.log(result);

export default getRecipesFromFile;