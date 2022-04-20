const pr={
    title: "Correccion de bug",
    branchName: "main",
    dateCreated: "19-04-2012",
    status: "Open",
    repositoryNameAssociated: "UnNuevoRepo",
    author: "Ricardo",
    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return `Nombre PR ${this.title}, Autor ${this.author}`
    }
}

console.log(pr.getStatus())
console.log(pr.getTitleAndAuthor())
console.log(pr)