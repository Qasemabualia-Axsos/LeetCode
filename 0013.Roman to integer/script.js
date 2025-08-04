var romanToInt = function(s) {
    const rom={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let num=0
    for(let i=0;i<s.length;i++){
        if((i>0 &&(s[i]==='V' || s[i]==='X')&& s[i-1]==='I')||
        (i>0 &&(s[i]==='L' || s[i]==='C')&& s[i-1]==='X') ||
        (i>0 &&(s[i]==='D' || s[i]==='M')&& s[i-1]==='C')){
            num+=(rom[s[i]]-2*rom[s[i-1]]);
        }
        else{
            num+=rom[s[i]];
        }
    }
        return num;
};