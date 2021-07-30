$(document).ready(function(){
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
    let player = '';
    let player2 = '';

    // POINTS RESET FUNCTION
    const pointsReset = ()=>{
        for(let i = 0; i < 9; i++)
        {
            pointa[i] = false;
            pointb[i] = false;
            gridOn[i] = false;
        }
    }

    
    // RESTART GAME FUNCTION
    const restarting = (started)=>{

        let conf = Boolean;

        if(started)
        {
            conf = confirm('Do you want to restart the game?');
        }
        else
        {
            conf = confirm('Are you sure you want to restart the game?');
        }
        if(conf)
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
            pointsReset();
            prev = 0;
        }
    }   

    // DRAW GAME FUNCTION
    draw.click(function(){
        let conf = confirm('Are you sure you want to end the game in a draw?');
        if(conf)
        {
            draw.attr('disabled','');
            alert('The game has ended in a draw');
            gridArr.forEach((e)=>{
                e.removeClass('square');
            })
            p.append(`TIED MATCH<br>`);
            setTimeout(function()
            {
                restarting(true);
            },100)
        }
    });

    // RESTART BUTTON FUNCTION
    restart.click(function(){
        if(playing){  restarting(false)}
        else{restarting(true)}
        ;
    });
    
    // PLAY BUTTON FUNCTION
    play.click(function(){
        playing = true;
        restart.removeAttr('disabled');
        draw.removeAttr('disabled');
        play.attr('disabled','');

        // POINTING GRIDS FUNCTION
        const handlerPoints = (casilla, i, j, k)=>{
            if(casilla.css('cursor') == 'pointer')
            {
                if(prev == 0 && mark[i].css('display') == 'none' && mark[j].css('display') == 'none')
                {
                    mark[i].removeClass('d-none')
                    prev = 1;
                    pointa[k] = true;
                    gridOn[k] = true;
                }
                else if(mark[i].css('display') != 'none' || mark[j].css('display') != 'none')
                {
                    alert('You already played here!');
                }
                else if(prev == 1 && mark[i].css('display') == 'none' && mark[j].css('display') == 'none')
                {
                    mark[j].removeClass('d-none')
                    prev = 2;
                    pointb[k] = true;
                    gridOn[k] = true;
                }
                else if(prev == 2 && mark[i].css('display') == 'none' && mark[j].css('display') == 'none')
                {
                    mark[i].removeClass('d-none')
                    prev = 1;
                    pointa[k] = true;
                    gridOn[k] = true;
                }
            }
        }
        //NAME PLAYER FUNCTION
        const playerName = (pName, n)=>{
            while(pName == '' || pName == null)
            {
                pName = prompt('Name player ' + n);
            }
            return pName;
        }
        player = playerName(player, '1');
        player2 = playerName(player2, '2');
        console.log('jugador: ' + player2); 

        alert('GAME INITIATING\nBEGINS '+player+' \n\n                                             GAME STARTED!!');

        gridArr.forEach((e)=>{
                e.addClass('square');
        });
        

        grid.click(function(){
            handlerPoints(grid, 0, 1, 0);
        });
        grid2.click(function(){
            handlerPoints(grid2, 2, 3, 1);
        });
        grid3.click(function(){
            handlerPoints(grid3, 4, 5, 2);
        });
        grid4.click(function(){
            handlerPoints(grid4, 6, 7, 3);
        });
        grid5.click(function(){
            handlerPoints(grid4, 8, 9, 4);            
        });
        grid6.click(function(){
            handlerPoints(grid6, 10, 11, 5);
        });
        grid7.click(function(){
            handlerPoints(grid7, 12, 13, 6);
        });
        grid8.click(function(){
            handlerPoints(grid8, 14, 15, 7);
        });
        grid9.click(function(){
            handlerPoints(grid9, 16, 17, 8);
        });

        // FUNCTION TO CHECK POINTS, IT WILL STOP THE GAME ONCE IT'S OVER 
        gridArr.forEach(e=>{
            e.click(function(){
            
                if(playing)
                {   

                    // ADDING VICTORY FOR PLAYER 1 FUNCTION
                    const winnerA = ( i, j, k, pName)=>{
                        if(pointa[i] == true && pointa[j] == true && pointa[k] == true)
                        {
                            setTimeout(function(){alert(pName+' WINS')},200);
                            draw.attr('disabled','');
                            gridArr.forEach((e)=>{
                                e.removeClass('square');
                            })
                            p.append(`<b>${pName}</b> Won<br>`);
                            playing = false;
                        }
                    }  

                    // ADDING POINTS FOR PLAYER 2 FUNCTION  
                    const winnerB = ( i, j, k, pName)=>{
                        if(pointb[i] == true && pointb[j] == true && pointb[k] == true)
                        {
                            setTimeout(function(){alert(pName+' WINS')},200);
                            draw.attr('disabled','');
                            gridArr.forEach((e)=>{
                                e.removeClass('square');
                            })
                            p.append(`<b>${pName}</b> Won<br>`);
                            playing = false;
                        }
                    }
                    acc = 0;
                    gridOn.forEach(e=>{
                        if(e)
                        {
                            acc = acc + 1;
                        }
                    })
         
                    winnerA(0, 3, 6, player);
                    winnerA(1, 4, 7, player);
                    winnerA(2, 5, 8, player);
                    winnerA(3, 4, 5, player);
                    winnerA(6, 7, 8, player);
                    winnerA(0, 1, 2, player);
                    winnerA(0, 4, 8, player);
                    winnerA(2, 4, 6, player);
                    winnerB(0, 3, 6, player2);
                    winnerB(1, 4, 7, player2);
                    winnerB(2, 5, 8, player2);
                    winnerB(3, 4, 5, player2);
                    winnerB(6, 7, 8, player2);
                    winnerB(0, 1, 2, player2);
                    winnerB(0, 4, 8, player2);
                    winnerB(2, 4, 6, player2);
                
                    if(acc == 9 && playing)
                    {
                        p.append(`TIED MATCH<br>`);
                        setTimeout(function()
                        {
                            draw.attr('disabled','');
                            alert('The game has ended in a draw');
                            gridArr.forEach((e)=>{
                                e.removeClass('square');
                            })
                            restarting(true);
                            playing = false;
                        },100)   
                    }
                }
            });
        });
    });
    
});
