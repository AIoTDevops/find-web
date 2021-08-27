console.log($(".tb-thumb img")[0].currentSrc)


$('body').click(function() {
    console.log($(".tb-thumb img")[0].currentSrc)

    var alink = document.createElement("a");
    alink.href = $(".tb-thumb img")[0].currentSrc;
    alink.download = "testImg.jpg";
    alink.click();
})


// each(function() {

//     console.log($(this).currentSrc)
//         $(this).click(function(e) {
//             e.stopPropagation();
//             var img = $(this).attr("src").replace('60x60', '430x430').replace('50x50.jpg_.webp', '430x430.jpg')
//             console.log(img)

//             var alink = document.createElement("a");
//             alink.href = img;
//             alink.download = "testImg.jpg";
//             alink.click();
//     })
// })
$("#J_UlThumb").css('background', '#eeeeee')