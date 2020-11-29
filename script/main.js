$(document).ready(function(){
    setTimeout(function(){alert('Para jugar presiona Play')},500);
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
        }
    });

    play.click(function(){
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
                    mark[0].removeClass('d-none');
                    grid.removeClass('py-5');
                    prev = 1
                }
                else if(mark[0].css('display') != 'none' || mark[1].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[0].css('display') == 'none' && mark[1].css('display') == 'none')
                {
                    mark[1].removeClass('d-none');
                    grid.removeClass('py-5');
                    prev = 2;
                }
                else if(prev == 2 && mark[0].css('display') == 'none' && mark[1].css('display') == 'none')
                {
                    mark[0].removeClass('d-none');
                    grid.removeClass('py-5');
                    prev = 1;
                
                }
            }
        });
        grid2.click(function(){
            if(grid2.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[2].css('display') == 'none' && mark[3].css('display') == 'none')
                {
                    mark[2].removeClass('d-none');
                    grid2.removeClass('py-5');
                    prev = 1 
                }
                else if(mark[2].css('display') != 'none' || mark[3].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[2].css('display') == 'none' && mark[3].css('display') == 'none')
                {
                    mark[3].removeClass('d-none');
                    grid2.removeClass('py-5');
                    prev = 2; 
                }
                else if(prev == 2 && mark[2].css('display') == 'none' && mark[3].css('display') == 'none')
                {
                    mark[2].removeClass('d-none');
                    grid2.removeClass('py-5');
                    prev = 1; 
                }
            } 
        });
        grid3.click(function(){
            if(grid3.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[4].css('display') == 'none' && mark[5].css('display') == 'none')
                {
                    mark[4].removeClass('d-none');
                    grid3.removeClass('py-5');
                    prev = 1
                }
                else if(mark[4].css('display') != 'none' || mark[5].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[4].css('display') == 'none' && mark[5].css('display') == 'none')
                {
                    mark[5].removeClass('d-none');
                    grid3.removeClass('py-5');
                    prev = 2;
                }
                else if(prev == 2 && mark[4].css('display') == 'none' && mark[5].css('display') == 'none')
                {
                    mark[4].removeClass('d-none');
                    grid3.removeClass('py-5');
                    prev = 1;
                }
            }
        });
        grid4.click(function(){
            if(grid4.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[6].css('display') == 'none' && mark[7].css('display') == 'none')
                {
                    mark[6].removeClass('d-none');
                    grid4.removeClass('py-5');
                    prev = 1
                }
                else if(mark[6].css('display') != 'none' || mark[7].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[6].css('display') == 'none' && mark[7].css('display') == 'none')
                {
                    mark[7].removeClass('d-none');
                    grid4.removeClass('py-5');
                    prev = 2;
                }
                else if(prev == 2 && mark[6].css('display') == 'none' && mark[7].css('display') == 'none')
                {
                    mark[6].removeClass('d-none');
                    grid4.removeClass('py-5');
                    prev = 1;             
                }
            }
        });
        grid5.click(function(){
            if(grid5.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[8].css('display') == 'none' && mark[9].css('display') == 'none')
                {
                    mark[8].removeClass('d-none');
                    grid5.removeClass('py-5');
                    prev = 1              
                }
                else if(mark[8].css('display') != 'none' || mark[9].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[8].css('display') == 'none' && mark[9].css('display') == 'none')
                {
                    mark[9].removeClass('d-none');
                    grid5.removeClass('py-5');
                    prev = 2;               
                }
                else if(prev == 2 && mark[8].css('display') == 'none' && mark[9].css('display') == 'none')
                {
                    mark[8].removeClass('d-none');
                    grid5.removeClass('py-5');
                    prev = 1;                
                }
            }
            
        });
        grid6.click(function(){
            if(grid6.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[10].css('display') == 'none' && mark[11].css('display') == 'none')
                {
                    mark[10].removeClass('d-none');
                    grid6.removeClass('py-5');
                    prev = 1
                }
                else if(mark[10].css('display') != 'none' || mark[11].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[10].css('display') == 'none' && mark[11].css('display') == 'none')
                {
                    mark[11].removeClass('d-none');
                    grid6.removeClass('py-5');
                    prev = 2;
                }
                else if(prev == 2 && mark[10].css('display') == 'none' && mark[11].css('display') == 'none')
                {
                    mark[10].removeClass('d-none');
                    grid6.removeClass('py-5');
                    prev = 1;             
                }
            }
        });
        grid7.click(function(){
            if(grid7.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[12].css('display') == 'none' && mark[13].css('display') == 'none')
                {
                    mark[12].removeClass('d-none');
                    grid7.removeClass('py-5');
                    prev = 1  
                }
                else if(mark[12].css('display') != 'none' || mark[13].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[12].css('display') == 'none' && mark[13].css('display') == 'none')
                {
                    mark[13].removeClass('d-none');
                    grid7.removeClass('py-5');
                    prev = 2;              
                }
                else if(prev == 2 && mark[12].css('display') == 'none' && mark[13].css('display') == 'none')
                {
                    mark[12].removeClass('d-none');
                    grid7.removeClass('py-5');
                    prev = 1;                
                }
            }    
        });
        grid8.click(function(){
            if(grid8.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[14].css('display') == 'none' && mark[15].css('display') == 'none')
                {
                    mark[14].removeClass('d-none');
                    grid8.removeClass('py-5');
                    prev = 1                  
                }
                else if(mark[14].css('display') != 'none' || mark[15].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[14].css('display') == 'none' && mark[15].css('display') == 'none')
                {
                    mark[15].removeClass('d-none');
                    grid8.removeClass('py-5');
                    prev = 2;                   
                }
                else if(prev == 2 && mark[14].css('display') == 'none' && mark[15].css('display') == 'none')
                {
                    mark[14].removeClass('d-none');
                    grid8.removeClass('py-5');
                    prev = 1;                    
                }
            } 
        });
        grid9.click(function(){
            if(grid9.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[16].css('display') == 'none' && mark[17].css('display') == 'none')
                {
                    mark[16].removeClass('d-none');
                    grid9.removeClass('py-5');
                    prev = 1                    
                }
                else if(mark[16].css('display') != 'none' || mark[17].css('display') != 'none')
                {
                    alert('Ya jugaste en esta casilla');
                }
                else if(prev == 1 && mark[16].css('display') == 'none' && mark[17].css('display') == 'none')
                {
                    mark[17].removeClass('d-none');
                    grid9.removeClass('py-5');
                    prev = 2;                   
                }
                else if(prev == 2 && mark[16].css('display') == 'none' && mark[17].css('display') == 'none')
                {
                    mark[16].removeClass('d-none');
                    grid9.removeClass('py-5');
                    prev = 1;
                }
            }
        });
    });
    
});
