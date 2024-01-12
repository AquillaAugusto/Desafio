//Individuo em Classificação
let Heroi = 'Felipão'

//Experiencia do Heroi
let Xp = 5000

//Classificação do Heroi
let Nivel = ''

//Separando a quantidade de Xp para a Classificação
   
    if(Xp<1001){
        Nivel = 1
    }
    else if(Xp<2001){
        Nivel = 2
    }
    else if(Xp<5001){
        Nivel = 3
    }
    else if(Xp<7001){
        Nivel = 4
    }
    else if(Xp<8001){
        Nivel = 5
    }
    else if(Xp<9001){
        Nivel = 6
    }
    else if(Xp<10001){
        Nivel = 7
    }
    else{
        Nivel = 8
    }

//Escolhendo a Classificação de Acordo com a Quantidade de Xp
    
    switch(Nivel){
        
        case 1:
            Nivel = 'Ferro'
            break
        
        case 2:
            Nivel = 'Bronze'
            break

        case 3:
            Nivel = 'Prata'
            break
            
        case 4:
            Nivel = 'Ouro'
            break

        case 5:
            Nivel = 'Platina'
            break

        case 6:
            Nivel = 'Ascendente'
            break

        case 7:
            Nivel = 'Imortal'
            break

        case 8:
            Nivel = 'Radiante'
            break

        //Mensagem de Error para imprevisto na classificação
        default:
        console.log('Erro na Classificação')

    }

    console.log('O Herói de nome '+Heroi+' está no nível '+Nivel)