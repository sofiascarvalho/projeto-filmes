/**********************************************************************************
* objetivo: criar a comunicacao com o banco de dados para fazer o CRUD de filmes
* data: 11/02/2025
* autor: sofia
* versao: 1.0
***********************************************************************************/

//import da biblioteca do prisma/client para executar os scripts SQL
const {PrismaClient}=require('@prisma/client')



//funcao para inserir um novo filme
const insertFilme= async function(filme){
    //instancia (criar objeto a ser utilizado) a biblioteca do prisma/client
    const prisma=new PrismaClient()

    let sql=`insert into tbl_filme  (nome,
                                    duracao,
                                    sinopse,
                                    data_lancamento,
                                    foto_capa,
                                    link_trailer
                                    )
                                    values
                                    (
                                    ${filme.nome}, 
                                    ${filme.duracao},
                                    ${filme.sinopse}, 
                                    ${filme.data_lancamento},
                                    ${filme.foto_capa}, 
                                    ${filme.link_trailer}
                                    )`

    //executa o scriptSQL no banco de dados e aguarda o retorno do BD para saber se deu certo
    let result=await prisma.$executeRawUnsafe(sql)

    if(result)
        return true
    else
        return false
}

//funcao para atualizar um filme existente
const updateFilme= async function(){

}

//funcao para excluir um filme existente
const deleteFilme=async function () {
    
}

//funcao para retornar todos os filmes existentes
const selectAllFilme=async function () {
    
}

//funco para buscar um filme pelo id
const selectByIdFilme=async function () {
    
}

module.exports={
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilme,
    selectByIdFilme
}