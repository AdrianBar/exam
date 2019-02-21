console.log("choinka.js");

function choinka() {
    const height =+ document.getElementById('poziomy').value;
    const level =+ document.getElementById('pojemnosc_pietra').value;
    console.log(height);
    console.log(level);
    const number_levels = Math.ceil(height / level);
    console.log(number_levels);
    document.getElementById('result').innerText = number_levels;
    var tree = "";
    for (i = 0; i < height; i++) {
        if(i===0)
        {
            tree += "*<br>"   
        }
        else
        {
            var str1 = "/";
            var str2 = "&nbsp";
            var poziom = Math.ceil((i+1) / level);
            var zmienna = i - poziom;
            console.log(poziom);
            for(j=0; j<zmienna;j++)
            {
                str2 = str2.concat('&nbsp;&nbsp;');
            }
            var str3 = "\\";
            str1 += str2;
            str1 += str3;
            tree += str1;
            tree += '<br>';
        }
    }
    console.log(tree);
    document.getElementById('tree').innerHTML = tree;
}