/***********************************************************************************
 * objetivo: arquivo de configuracao para padronizar mensagens e status code da API
 * data: 18/02/2025
 * autor: sofia
 * versão: 1.0
 ***********************************************************************************/

/************************************STATUS CODE DE MENSAGENS DE ERRO*********************************** */
const ERROR_REQUIRED_FIELDS={
    status: false,
    status_code: 400,
    message: 'Não foi possível realizar a requisição, pois existem campos obrigatórios que não foram preenchidos ou não atendem a quantidade de caracteres!!!'
}




module.exports={
    ERROR_REQUIRED_FIELDS
}