export default function Generator (flavors, spirits, cocktails, themes, containers){
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
    let isSuper=Math.random()<0.1; //50% bool statement

    while(true){ //loops to make sure there are no flavor duplicates
        if(intFlavorChoice!=intFlavorChoice2){
            break;
        }
        intFlavorChoice=Math.floor(Math.random()*(flavors.length-1));
        intFlavorChoice2=Math.floor(Math.random()*(flavors.length-1));
    }

    while(true){ //loops to make sure there are no theme duplicates and 2 colors
        if((intThemeChoice!=intThemeChoice2)&&!(themes[intThemeChoice].color&&themes[intThemeChoice2].color)){
            break;
        }
        intThemeChoice=Math.floor(Math.random()*(themes.length-1));
        intThemeChoice2=Math.floor(Math.random()*(themes.length-1));
    }


    switch(intDrinkChoice){
        case 0: //flavor spirit cocktail
            output=flavors[intFlavorChoice].title+" "+spirits[intSpiritChoice].title+" "+cocktails[intCocktailChoice].title;
            break;
        case 1: //theme spirit cocktail
            output=themes[intThemeChoice].title+" "+spirits[intSpiritChoice].title+" "+cocktails[intCocktailChoice].title;
            break;
        case 2: //flavor flavor cocktail
            output=flavors[intFlavorChoice].title+" "+flavors[intFlavorChoice2].title+" "+cocktails[intCocktailChoice].title;
            break;
        case 3: //theme theme cocktail
            output=themes[intThemeChoice].title+" "+themes[intThemeChoice2].title+" "+cocktails[intCocktailChoice].title;
            break;
        case 4: //flavor theme cocktail
            output=flavors[intFlavorChoice].title+" "+themes[intThemeChoice].title+" "+cocktails[intCocktailChoice].title;
            break;
        case 5: //theme jj
            if (isContainer){
                output=themes[intThemeChoice].title+" "+containers[intContainerChoice].title+" Jungle Juice";
            }
            else{
                output=themes[intThemeChoice].title+" Jungle Juice";
            }
            if (isSuper) output="Super "+output;
            break;
        case 6: //theme theme jj
            if (isContainer){
                output=themes[intThemeChoice].title+" "+themes[intThemeChoice2].title+" "+containers[intContainerChoice].title+" Jungle Juice";
            }
            else{
                output=themes[intThemeChoice].title+" "+themes[intThemeChoice2].title+" Jungle Juice";
            }
            if (isSuper) output="Super "+output;
            break;
        case 7: //flavor jj
            if (isContainer){
                output=flavors[intFlavorChoice].title+" "+containers[intContainerChoice].title+" Jungle Juice";
            }
            else{
                output=flavors[intFlavorChoice].title+" Jungle Juice";
            }
            if (isSuper) output="Super "+output;
            break;
        case 8: //flavor theme jj
            if (isContainer){
                output=flavors[intFlavorChoice].title+" "+themes[intThemeChoice].title+" "+containers[intContainerChoice].title+" Jungle Juice";
            }
            else{
                output=flavors[intFlavorChoice].title+" "+themes[intThemeChoice].title+" Jungle Juice";
            }
            if (isSuper) output="Super "+output;
            break;
    }
    // output=intDrinkChoice;
    // console.log(intFlavorChoice);
    // console.log(intCocktailChoice);
    // output=flavors[intFlavorChoice].title+" "+cocktails[intCocktailChoice].title;
    // output="hi there";
    return output;

}