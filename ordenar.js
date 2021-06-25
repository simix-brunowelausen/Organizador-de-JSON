let propriedades = {
    "Menu:Command": "Comandos",
    "Menu:Customer": "Clientes",
    "Menu:Home": "Principal",
    "Menu:Product": "Produtos",
    "Menu:LayoutStyle": "Estilos de layouts",
    "Menu:Departament": "Departamentos",
    "Menu:DeviceSetting": "Config. de dispositivo",
    "Menu:ERPConnection": "Conexões com ERPs",
    "Menu:Entity": "Entidades",
    "Menu:FileLayout": "Layout de arquivos",
    "Menu:Group": "Grupos",
    "Menu:ImportFile": "Arquivos de importação",
    "Menu:Playlist": "Playlist",
    "Menu:Schedule": "Agendamentos",
    "Menu:AccessToken": "Tokens de Acesso",
    "Menu:Video": "Vídeos",
    "Menu:EtlFileImp": "Processamento da Importação",
};

function organizar(desordenado){
    let propriedades_ordenadas = Object.keys(desordenado).sort().reduce(
        (obj, key) => { 
        obj[key] = desordenado[key]; 
        return obj;
        }, 
        {}
    );
    return propriedades_ordenadas;
}

console.log(organizar(propriedades));