$(document).ready(function(){
    //setTimeout(function(){alert('Para jugar presiona Play')},500);
    const play = $('#play');
    const restart = $('#restart');
    const draw = $('#draw');
    const p = $('#historial');
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
    let pointa = [false, false, false, false, false, false, false, false, false];
    let pointb = [false, false, false, false, false, false, false, false, false];
    let gridOn = [false, false, false, false, false, false, false, false, false];
    let prev = 0;
    let acc = 0;
    function points(){
        for(let i = 0; i < 9; i++)
        {
            pointa[i] = false;
        }
        for(let i = 0; i < 9; i++)
        {
            pointb[i] = false;
        }
        for(let i = 0; i < 9; i++)
        {
            gridOn[i] = false;
        }
    }

    draw.click(function(){
        let conf = confirm('Are you sure you want to end the game in a draw?');
        if(conf == true)
        {
            draw.attr('disabled','');
            alert('The game has ended in a draw');
            gridArr.forEach((e)=>{
                e.removeClass('square');
            })
            p.append(`<b>TIED MATCH</b><br>`);
            let rest = confirm('Do you want to restart the game?');
            if(rest == true)
            {
                alert('The game will restart');
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
                points();
                prev = 0;
            }   
        }
    });

    restart.click(function(){
        let conf = confirm('Are you sure you want to restart the game?');
        if(conf == true)
        {
            alert('The game will restart');
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
            points();
            prev = 0;
        }
    });

    play.click(function(){
        playing = true;
        restart.removeAttr('disabled');
        draw.removeAttr('disabled');
        play.attr('disabled','');
        let player = '';
        let player2 = '';
        while(player == '' || player == null)
        {
            player = prompt('Name player 1');
        }
        while(player2 == '' || player2 == null || player2 == player)
        {
            player2 = prompt('Name player 2');
        }
        alert('GAME INITIATING\nBEGINS '+player+' \n\n                                             GAME STARTED!!');
        gridArr.forEach((e)=>{
                e.addClass('square');
        });
        grid.click(function(){
            if(grid.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[0].css('display') == 'none' && mark[1].css('display') == 'none')
                {
                    mark[0].removeClass('d-none')
                    prev = 1;
                    pointa[0] = true;
                    gridOn[0] = true;
                }
                else if(mark[0].css('display') != 'none' || mark[1].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[0].css('display') == 'none' && mark[1].css('display') == 'none')
                {
                    mark[1].removeClass('d-none')
                    prev = 2;
                    pointb[0] = true;
                    gridOn[0] = true;
                }
                else if(prev == 2 && mark[0].css('display') == 'none' && mark[1].css('display') == 'none')
                {
                    mark[0].removeClass('d-none')
                    prev = 1;
                    pointa[0] = true;
                    gridOn[0] = true;
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
                    pointa[1] = true;
                    gridOn[1] = true;
                }
                else if(mark[2].css('display') != 'none' || mark[3].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[2].css('display') == 'none' && mark[3].css('display') == 'none')
                {
                    mark[3].removeClass('d-none');
                    prev = 2; 
                    pointb[1] = true;
                    gridOn[1] = true;
                }
                else if(prev == 2 && mark[2].css('display') == 'none' && mark[3].css('display') == 'none')
                {
                    mark[2].removeClass('d-none');
                    prev = 1; 
                    pointa[1] = true;
                    gridOn[1] = true;
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
                    pointa[2] = true;
                    gridOn[2] = true;
                }
                else if(mark[4].css('display') != 'none' || mark[5].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[4].css('display') == 'none' && mark[5].css('display') == 'none')
                {
                    mark[5].removeClass('d-none');
                    prev = 2;
                    pointb[2] = true;
                    gridOn[2] = true;
                }
                else if(prev == 2 && mark[4].css('display') == 'none' && mark[5].css('display') == 'none')
                {
                    mark[4].removeClass('d-none');
                    prev = 1;
                    pointa[2] = true;
                    gridOn[2] = true;
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
                    pointa[3] = true;
                    gridOn[3] = true;
                }
                else if(mark[6].css('display') != 'none' || mark[7].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[6].css('display') == 'none' && mark[7].css('display') == 'none')
                {
                    mark[7].removeClass('d-none');
                    prev = 2;
                    pointb[3] = true;
                    gridOn[3] = true;
                }
                else if(prev == 2 && mark[6].css('display') == 'none' && mark[7].css('display') == 'none')
                {
                    mark[6].removeClass('d-none');
                    prev = 1; 
                    pointa[3] = true;
                    gridOn[3] = true;          
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
                    pointa[4] = true; 
                    gridOn[4] = true;          
                }
                else if(mark[8].css('display') != 'none' || mark[9].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[8].css('display') == 'none' && mark[9].css('display') == 'none')
                {
                    mark[9].removeClass('d-none');
                    prev = 2;
                    pointb[4] = true;
                    gridOn[4] = true;   
                }
                else if(prev == 2 && mark[8].css('display') == 'none' && mark[9].css('display') == 'none')
                {
                    mark[8].removeClass('d-none');
                    prev = 1;
                    pointa[4] = true;
                    gridOn[4] = true;          
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
                    pointa[5] = true;
                    gridOn[5] = true;
                }
                else if(mark[10].css('display') != 'none' || mark[11].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[10].css('display') == 'none' && mark[11].css('display') == 'none')
                {
                    mark[11].removeClass('d-none');
                    prev = 2;
                    pointb[5] = true;
                    gridOn[5] = true;
                }
                else if(prev == 2 && mark[10].css('display') == 'none' && mark[11].css('display') == 'none')
                {
                    mark[10].removeClass('d-none');
                    prev = 1; 
                    pointa[5] = true;
                    gridOn[5] = true;            
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
                    pointa[6] = true;
                    gridOn[6] = true; 
                }
                else if(mark[12].css('display') != 'none' || mark[13].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[12].css('display') == 'none' && mark[13].css('display') == 'none')
                {
                    mark[13].removeClass('d-none');
                    prev = 2; 
                    pointb[6] = true;
                    gridOn[6] = true;           
                }
                else if(prev == 2 && mark[12].css('display') == 'none' && mark[13].css('display') == 'none')
                {
                    mark[12].removeClass('d-none');
                    prev = 1;  
                    pointa[6] = true;
                    gridOn[6] = true;              
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
                    pointa[7] = true;
                    gridOn[7] = true;                  
                }
                else if(mark[14].css('display') != 'none' || mark[15].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[14].css('display') == 'none' && mark[15].css('display') == 'none')
                {
                    mark[15].removeClass('d-none');
                    prev = 2;
                    pointb[7] = true;
                    gridOn[7] = true;                   
                }
                else if(prev == 2 && mark[14].css('display') == 'none' && mark[15].css('display') == 'none')
                {
                    mark[14].removeClass('d-none');
                    prev = 1;
                    pointa[7] = true;
                    gridOn[7] = true;                  
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
                    pointa[8] = true;
                    gridOn[8] = true;            
                }
                else if(mark[16].css('display') != 'none' || mark[17].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[16].css('display') == 'none' && mark[17].css('display') == 'none')
                {
                    mark[17].removeClass('d-none');
                    prev = 2;     
                    pointb[8] = true;
                    gridOn[8] = true;             
                }
                else if(prev == 2 && mark[16].css('display') == 'none' && mark[17].css('display') == 'none')
                {
                    mark[16].removeClass('d-none');
                    prev = 1;
                    pointa[8] = true;
                    gridOn[8] = true;
                }
            }
        });
        gridArr.forEach((e)=>{
            e.click(function(){
                if(playing == true)
                {   
                    acc = 0;
                    gridOn.forEach((e)=>{
                        if(e == true)
                        {
                            acc = acc + 1;
                        }
                    })
                    if(acc == 9)
                    {
                        p.append(`<b>TIED MATCH</b><br>`);
                        setTimeout(function()
                        {
                            draw.attr('disabled','');
                            alert('The game has ended in a draw');
                            gridArr.forEach((e)=>{
                                e.removeClass('square');
                            })
                            let rest = confirm('Do you want to restart the game?');
                            if(rest == true)
                            {
                                alert('The game will restart');
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
                                points();
                                prev = 0;
                            }
                        },100)   
                    }
                    else if(pointa[0] == true && pointa[3] == true && pointa[6] == true)
                    {
                        setTimeout(function(){alert(player+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointa[1] == true && pointa[4] == true && pointa[7] ==true)
                    {
                        setTimeout(function(){alert(player+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointa[2] == true && pointa[5] == true && pointa[8] ==true)
                    {
                        setTimeout(function(){alert(player+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointa[3] == true && pointa[4] == true && pointa[5] ==true)
                    {
                        setTimeout(function(){alert(player+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointa[6] == true && pointa[7] == true && pointa[8] ==true)
                    {
                        setTimeout(function(){alert(player+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointa[0] == true && pointa[1] == true && pointa[2] ==true)
                    {
                        setTimeout(function(){alert(player+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointa[0] == true && pointa[4] == true && pointa[8] ==true)
                    {
                        setTimeout(function(){alert(player+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointa[2] == true && pointa[4] == true && pointa[6] ==true)
                    {
                        setTimeout(function(){alert(player+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointb[0] == true && pointb[3] == true && pointb[6] == true)
                    {
                        setTimeout(function(){alert(player2+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player2}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointb[1] == true && pointb[4] == true && pointb[7] ==true)
                    {
                        setTimeout(function(){alert(player2+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player2}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointb[2] == true && pointb[5] == true && pointb[8] ==true)
                    {
                        setTimeout(function(){alert(player2+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player2}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointb[3] == true && pointb[4] == true && pointb[5] ==true)
                    {
                        setTimeout(function(){alert(player2+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player2}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointb[6] == true && pointb[7] == true && pointb[8] ==true)
                    {
                        setTimeout(function(){alert(player2+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player2}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointb[0] == true && pointb[1] == true && pointb[2] ==true)
                    {
                        setTimeout(function(){alert(player2+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player2}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointb[0] == true && pointb[4] == true && pointb[8] ==true)
                    {
                        setTimeout(function(){alert(player2+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player2}</b> Won<br>`);
                        playing = false;
                    }
                    else if(pointb[2] == true && pointb[4] == true && pointb[6] ==true)
                    {
                        setTimeout(function(){alert(player2+' WINS')},200);
                        draw.attr('disabled','');
                        gridArr.forEach((e)=>{
                            e.removeClass('square');
                        })
                        p.append(`<b>${player2}</b> Won<br>`);
                        playing = false;
                    }
                }
            })
        })
    });
    
});
