export default function Generator (flavors, spirits, cocktails, themes, containers){
    let int_to_hex = (num) =>{
        var hex = Math.round(num).toString(16);
        if (hex.length === 1)
            hex = '0' + hex;
        return hex;
    }
    let blend_colors = (color1, color2) => {
        let percentage=0.5;
         if (color1.length === 4)
            color1 = color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3];
        else
            color1 = color1.substring(1);
        if (color2.length === 4)
            color2 = color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3];
        else
            color2 = color2.substring(1);   
        color1 = [parseInt(color1[0] + color1[1], 16), parseInt(color1[2] + color1[3], 16), parseInt(color1[4] + color1[5], 16)];
        color2 = [parseInt(color2[0] + color2[1], 16), parseInt(color2[2] + color2[3], 16), parseInt(color2[4] + color2[5], 16)];
            let color3 = [ 
            (1 - percentage) * color1[0] + percentage * color2[0], 
            (1 - percentage) * color1[1] + percentage * color2[1], 
            (1 - percentage) * color1[2] + percentage * color2[2]
        ];
        color3 = '#' + int_to_hex(color3[0]) + int_to_hex(color3[1]) + int_to_hex(color3[2]);
    
        return color3
    }

    let color="#c0c0c0";
    let output="";
    let intDrinkChoice=Math.floor(Math.random()*9);
    //chooses the numbers ahead of time to save lines on the switch statements
    let intFlavorChoice=Math.floor(Math.random()*(flavors.length-1));
    let intFlavorChoice2=Math.floor(Math.random()*(flavors.length-1));
    let intCocktailChoice=Math.floor(Math.random()*(cocktails.length-1));
    let intSpiritChoice=Math.floor(Math.random()*(spirits.length-1));
    let intThemeChoice=Math.floor(Math.random()*(themes.length-1));
    let intThemeChoice2=Math.floor(Math.random()*(themes.length-1));
    let intContainerChoice=Math.floor(Math.random()*(containers.length-1));
    let isContainer=Math.random()<0.5; //50% bool statement
    let isSuper=Math.random()<0.1; //10% bool statement
    while(true){ //loops to make sure there are no flavor duplicates
        if(intFlavorChoice!==intFlavorChoice2){
            break;
        }
        intFlavorChoice=Math.floor(Math.random()*(flavors.length-1));
        intFlavorChoice2=Math.floor(Math.random()*(flavors.length-1));
    }

    while(true){ //loops to make sure there are no theme duplicates and 2 colors
        if((intThemeChoice!==intThemeChoice2)&&!(themes[intThemeChoice].color&&themes[intThemeChoice2].color)){
            break;
        }
        intThemeChoice=Math.floor(Math.random()*(themes.length-1));
        intThemeChoice2=Math.floor(Math.random()*(themes.length-1));
    }


    switch(intDrinkChoice){
        case 0: //flavor spirit cocktail
            output=flavors[intFlavorChoice].title+" "+spirits[intSpiritChoice].title+" "+cocktails[intCocktailChoice].title;
            color=flavors[intFlavorChoice].gradient;
            break;
        case 1: //theme spirit cocktail
            output=themes[intThemeChoice].title+" "+spirits[intSpiritChoice].title+" "+cocktails[intCocktailChoice].title;
            color=themes[intThemeChoice].gradient;
            break;
        case 2: //flavor flavor cocktail
            output=flavors[intFlavorChoice].title+" "+flavors[intFlavorChoice2].title+" "+cocktails[intCocktailChoice].title;
            color=blend_colors(flavors[intFlavorChoice].gradient, flavors[intFlavorChoice2].gradient);
            break;
        case 3: //theme theme cocktail
            output=themes[intThemeChoice].title+" "+themes[intThemeChoice2].title+" "+cocktails[intCocktailChoice].title;
            if (themes[intThemeChoice].color) color=themes[intThemeChoice].gradient;
            else if (themes[intThemeChoice2].color) color=themes[intThemeChoice2].gradient;
            else color=blend_colors(themes[intThemeChoice].gradient, themes[intThemeChoice2].gradient);
            break;
            
        case 4: //flavor theme cocktail
            output=flavors[intFlavorChoice].title+" "+themes[intThemeChoice].title+" "+cocktails[intCocktailChoice].title;
            if (themes[intThemeChoice].color) color=themes[intThemeChoice].gradient;
            else color=blend_colors(themes[intThemeChoice].gradient, flavors[intFlavorChoice].gradient);
            break;
        case 5: //theme jj
            if (isContainer){
                output=themes[intThemeChoice].title+" "+containers[intContainerChoice].title+" Jungle Juice";
            }
            else{
                output=themes[intThemeChoice].title+" Jungle Juice";
            }
            if (isSuper) output="Super "+output;
            color=themes[intThemeChoice].gradient;
            break;
        case 6: //theme theme jj
            if (isContainer){
                output=themes[intThemeChoice].title+" "+themes[intThemeChoice2].title+" "+containers[intContainerChoice].title+" Jungle Juice";
            }
            else{
                output=themes[intThemeChoice].title+" "+themes[intThemeChoice2].title+" Jungle Juice";
            }
            if (isSuper) output="Super "+output;
            if (themes[intThemeChoice].color) color=themes[intThemeChoice].gradient;
            else if (themes[intThemeChoice2].color) color=themes[intThemeChoice2].gradient;
            else color=blend_colors(themes[intThemeChoice].gradient, themes[intThemeChoice2].gradient);
            break;
        case 7: //flavor jj
            if (isContainer){
                output=flavors[intFlavorChoice].title+" "+containers[intContainerChoice].title+" Jungle Juice";
            }
            else{
                output=flavors[intFlavorChoice].title+" Jungle Juice";
            }
            if (isSuper) output="Super "+output;
            color=flavors[intFlavorChoice].gradient;
            break;
        case 8: //flavor theme jj
            if (isContainer){
                output=flavors[intFlavorChoice].title+" "+themes[intThemeChoice].title+" "+containers[intContainerChoice].title+" Jungle Juice";
            }
            else{
                output=flavors[intFlavorChoice].title+" "+themes[intThemeChoice].title+" Jungle Juice";
            }
            if (isSuper) output="Super "+output;
            if (themes[intThemeChoice].color) color=themes[intThemeChoice].gradient;
            else color=blend_colors(themes[intThemeChoice].gradient, flavors[intFlavorChoice].gradient);
            break;
    }
    return [color,output];

}