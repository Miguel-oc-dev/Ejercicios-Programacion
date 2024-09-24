function nbYear(p0, percent, aug, p) {
    percent = percent / 100;
    let years = 0
    while(p0<p){
        p0 = Math.floor(p0 + p0 * percent + aug);
        years++;
    }
    return years;
}