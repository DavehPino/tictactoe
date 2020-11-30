$(document).ready(function(){
    //setTimeout(function(){alert('Para jugar presiona Play')},500);
    const play = $('#play');
    const restart = $('#restart');
    const draw = $('#draw');
    const grid = $('.grilla');
    const grid2 = $('.grilla2');
    const grid3 = $('.grilla3');
    const grid4 = $('.grilla4');
    const grid5 = $('.grilla5');
    const grid6 = $('.grilla6');
    const grid7 = $('.grilla7');
    const grid8 = $('.grilla8');
    const grid9 = $('.grilla9');
    const gridArr = [grid, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9]
    let point1a = false;
    let point2a = false;
    let point3a = false;
    let point4a = false;
    let point5a = false;
    let point6a = false;
    let point7a = false;
    let point8a = false;
    let point9a = false;
    let point1b = false;
    let point2b = false;
    let point3b = false;
    let point4b = false;
    let point5b = false;
    let point6b = false;
    let point7b = false;
    let point8b = false;
    let point9b = false;
    let playing = false;
    const mark = [$('#picture'), $('#picture2'), $('#picture3'), $('#picture4'), $('#picture5'), $('#picture6'), $('#picture7'), $('#picture8'), $('#picture9'), $('#picture10'), $('#picture11'), $('#picture12'), $('#picture13'), $('#picture14'), $('#picture15'), $('#picture16'), $('#picture17'), $('#picture18')];

    draw.click(function(){
        let conf = confirm('Está seguro que desea finalizar la partida en empate?');
        if(conf == true)
        {
            draw.attr('disabled','');
            alert('La partida ha terminado en empate');
            gridArr.forEach((e)=>{
                e.removeClass('square');
            })
            let rest = confirm('Desea reiniciar el juego?');
            if(rest == true)
            {
                alert('El juego se reiniciará');
                mark.forEach((e)=>{
                    if(e.css('display') != 'none')
                    {
                        e.addClass('d-none');
                    }
                });
                gridArr.forEach((e)=>{
                    e.addClass('square');
                })
                draw.removeAttr('disabled');
                playing = true;
                point1a = false;
                point2a = false;
                point3a = false;
                point4a = false;
                point5a = false;
                point6a = false;
                point7a = false;
                point8a = false;
                point9a = false;
                point1b = false;
                point2b = false;
                point3b = false;
                point4b = false;
                point5b = false;
                point6b = false;
                point7b = false;
                point8b = false;
                point9b = false;
            }   
        }
    });

    restart.click(function(){
        let conf = confirm('Está seguro que desea reiniciar el juego?');
        if(conf == true)
        {
            alert('El juego se reiniciará');
            mark.forEach((e)=>{
                if(e.css('display') != 'none')
                {
                    e.addClass('d-none');
                }
            });
            gridArr.forEach((e)=>{
                if(e.css('cursor') != 'pointer')
                {
                    e.addClass('square');
                }
            })
            draw.removeAttr('disabled');
            playing = true;
            point1a = false;
            point2a = false;
            point3a = false;
            point4a = false;
            point5a = false;
            point6a = false;
            point7a = false;
            point8a = false;
            point9a = false;
            point1b = false;
            point2b = false;
            point3b = false;
            point4b = false;
            point5b = false;
            point6b = false;
            point7b = false;
            point8b = false;
            point9b = false;
        }
    });

    play.click(function(){
        playing = true;
        restart.removeAttr('disabled');
        draw.removeAttr('disabled');
        play.attr('disabled','');
        alert('JUEGO INICIADO\nNORMAS: EMPIEZA EL CIRCULO\nEL PRIMER JUGADOR EN COMPLETAR UNA LINEA GANA\n\n                                             EMPEZAMOS!!');
        gridArr.forEach((e)=>{
                e.addClass('square');
        });
        let prev = 0;
        grid.click(function(){
            if(grid.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[0].css('display') == 'none' && mark[1].css('display') == 'none')
                {
                    mark[0].removeClass('d-none')
                    prev = 1;
                    point1a = true;
                }
                else if(mark[0].css('display') != 'none' || mark[1].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[0].css('display') == 'none' && mark[1].css('display') == 'none')
                {
                    mark[1].removeClass('d-none')
                    prev = 2;
                    point1b = true;
                }
                else if(prev == 2 && mark[0].css('display') == 'none' && mark[1].css('display') == 'none')
                {
                    mark[0].removeClass('d-none')
                    prev = 1;
                    point1a = true;
                }
            }
        });
        grid2.click(function(){
            if(grid2.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[2].css('display') == 'none' && mark[3].css('display') == 'none')
                {
                    mark[2].removeClass('d-none');
                    prev = 1;
                    point2a = true;
                }
                else if(mark[2].css('display') != 'none' || mark[3].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[2].css('display') == 'none' && mark[3].css('display') == 'none')
                {
                    mark[3].removeClass('d-none');
                    prev = 2; 
                    point2b = true;
                }
                else if(prev == 2 && mark[2].css('display') == 'none' && mark[3].css('display') == 'none')
                {
                    mark[2].removeClass('d-none');
                    prev = 1; 
                    point2a = true;
                }
            } 
        });
        grid3.click(function(){
            if(grid3.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[4].css('display') == 'none' && mark[5].css('display') == 'none')
                {
                    mark[4].removeClass('d-none');
                    prev = 1;
                    point3a = true;
                }
                else if(mark[4].css('display') != 'none' || mark[5].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[4].css('display') == 'none' && mark[5].css('display') == 'none')
                {
                    mark[5].removeClass('d-none');
                    prev = 2;
                    point3b = true;
                }
                else if(prev == 2 && mark[4].css('display') == 'none' && mark[5].css('display') == 'none')
                {
                    mark[4].removeClass('d-none');
                    prev = 1;
                    point3a = true;
                }
            }
        });
        grid4.click(function(){
            if(grid4.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[6].css('display') == 'none' && mark[7].css('display') == 'none')
                {
                    mark[6].removeClass('d-none');
                    prev = 1;
                    point4a = true;
                }
                else if(mark[6].css('display') != 'none' || mark[7].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[6].css('display') == 'none' && mark[7].css('display') == 'none')
                {
                    mark[7].removeClass('d-none');
                    prev = 2;
                    point4b = true;
                }
                else if(prev == 2 && mark[6].css('display') == 'none' && mark[7].css('display') == 'none')
                {
                    mark[6].removeClass('d-none');
                    prev = 1; 
                    point4a = true;          
                }
            }
        });
        grid5.click(function(){
            if(grid5.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[8].css('display') == 'none' && mark[9].css('display') == 'none')
                {
                    mark[8].removeClass('d-none');
                    prev = 1;
                    point5a = true;           
                }
                else if(mark[8].css('display') != 'none' || mark[9].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[8].css('display') == 'none' && mark[9].css('display') == 'none')
                {
                    mark[9].removeClass('d-none');
                    prev = 2;
                    point5b = true;        
                }
                else if(prev == 2 && mark[8].css('display') == 'none' && mark[9].css('display') == 'none')
                {
                    mark[8].removeClass('d-none');
                    prev = 1;
                    point5a = true;           
                }
            }
            
        });
        grid6.click(function(){
            if(grid6.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[10].css('display') == 'none' && mark[11].css('display') == 'none')
                {
                    mark[10].removeClass('d-none');
                    prev = 1;
                    point6a = true;
                }
                else if(mark[10].css('display') != 'none' || mark[11].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[10].css('display') == 'none' && mark[11].css('display') == 'none')
                {
                    mark[11].removeClass('d-none');
                    prev = 2;
                    point6b = true;
                }
                else if(prev == 2 && mark[10].css('display') == 'none' && mark[11].css('display') == 'none')
                {
                    mark[10].removeClass('d-none');
                    prev = 1; 
                    point6a = true;            
                }
            }
        });
        grid7.click(function(){
            if(grid7.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[12].css('display') == 'none' && mark[13].css('display') == 'none')
                {
                    mark[12].removeClass('d-none');
                    prev = 1;
                    point7a = true; 
                }
                else if(mark[12].css('display') != 'none' || mark[13].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[12].css('display') == 'none' && mark[13].css('display') == 'none')
                {
                    mark[13].removeClass('d-none');
                    prev = 2; 
                    point7b = true;             
                }
                else if(prev == 2 && mark[12].css('display') == 'none' && mark[13].css('display') == 'none')
                {
                    mark[12].removeClass('d-none');
                    prev = 1;  
                    point7a = true;              
                }
            }    
        });
        grid8.click(function(){
            if(grid8.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[14].css('display') == 'none' && mark[15].css('display') == 'none')
                {
                    mark[14].removeClass('d-none');
                    prev = 1;
                    point8a = true;                  
                }
                else if(mark[14].css('display') != 'none' || mark[15].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[14].css('display') == 'none' && mark[15].css('display') == 'none')
                {
                    mark[15].removeClass('d-none');
                    prev = 2;
                    point8b = true;                   
                }
                else if(prev == 2 && mark[14].css('display') == 'none' && mark[15].css('display') == 'none')
                {
                    mark[14].removeClass('d-none');
                    prev = 1;
                    point8a = true;                  
                }
            } 
        });
        grid9.click(function(){
            if(grid9.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[16].css('display') == 'none' && mark[17].css('display') == 'none')
                {
                    mark[16].removeClass('d-none');
                    prev = 1;
                    point9a = true;             
                }
                else if(mark[16].css('display') != 'none' || mark[17].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[16].css('display') == 'none' && mark[17].css('display') == 'none')
                {
                    mark[17].removeClass('d-none');
                    prev = 2;     
                    point9b = true;              
                }
                else if(prev == 2 && mark[16].css('display') == 'none' && mark[17].css('display') == 'none')
                {
                    mark[16].removeClass('d-none');
                    prev = 1;
                    point9a = true;
                }
            }
        });
        gridArr.forEach((e)=>{
            e.click(function(){
                if(playing == true){
                    if(point1a == true && point4a == true && point7a == true)
                    {
                        setTimeout(function(){alert('GANA EL CIRCULO')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point2a == true && point5a == true && point8a ==true)
                    {
                        setTimeout(function(){alert('GANA EL CIRCULO')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point3a == true && point6a == true && point9a ==true)
                    {
                        setTimeout(function(){alert('GANA EL CIRCULO')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point4a == true && point5a == true && point6a ==true)
                    {
                        setTimeout(function(){alert('GANA EL CIRCULO')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point7a == true && point8a == true && point9a ==true)
                    {
                        setTimeout(function(){alert('GANA EL CIRCULO')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point1a == true && point2a == true && point3a ==true)
                    {
                        setTimeout(function(){alert('GANA EL CIRCULO')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point1a == true && point5a == true && point9a ==true)
                    {
                        setTimeout(function(){alert('GANA EL CIRCULO')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point3a == true && point5a == true && point7a ==true)
                    {
                        setTimeout(function(){alert('GANA EL CIRCULO')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point1b == true && point4b == true && point7b == true)
                    {
                        setTimeout(function(){alert('GANA LA EQUIS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point2b == true && point5b == true && point8b ==true)
                    {
                        setTimeout(function(){alert('GANA LA EQUIS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point3b == true && point6b == true && point9b ==true)
                    {
                        setTimeout(function(){alert('GANA LA EQUIS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point4b == true && point5b == true && point6b ==true)
                    {
                        setTimeout(function(){alert('GANA LA EQUIS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point7b == true && point8b == true && point9b ==true)
                    {
                        setTimeout(function(){alert('GANA LA EQUIS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point1b == true && point2b == true && point3b ==true)
                    {
                        setTimeout(function(){alert('GANA LA EQUIS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point1b == true && point5b == true && point9b ==true)
                    {
                        setTimeout(function(){alert('GANA LA EQUIS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                    else if(point3b == true && point5b == true && point7b ==true)
                    {
                        setTimeout(function(){alert('GANA LA EQUIS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        playing = false;
                    }
                }
            })
        })
    });
    
});
