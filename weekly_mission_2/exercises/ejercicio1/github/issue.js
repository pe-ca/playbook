const issue = {
    title: "06 Live 3 Semana 2 [Jueves 14 de Abril]",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open",
    numberOfComments: 32,
    labels: ["FINALIZADO", "LIVE 3", "Semana-2"],
    author: "carlogilmar",
    dateCreated : "Jueves 14 de Abril",
    lastUpdate: "",
    getTitleAndAuthor: function(){
        return "Issue: " + this.title + " Author: " + this.author
    },
    getGeneralInfo: function(){
        return `Issue: ${this.title}, Status: ${this.status}`
    }
}

console.log("Nombre de Issue" + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
