$(document).ready(function() {

  var defs = ["js", "op", "var", "fun", "met", "arg", "par", "ret", "chain", "str", "bo", "und", "nan", "es", "al", "com", "jq", "att"];


/*
  defs.forEach(function(def) {


    $("p" + "." + def).click(function() {

    $("." + def + "-showing").toggle();
      $("." + def + "-hidden").toggle();

    });

  });
*/

// debugger;
for (i = 0; i < defs.length; i++){
  $("p." + defs[i]).click(function() {
    // console.log(event)
    $("." + event.target.className + "-showing").toggle();
    $("." + event.target.className + "-hidden").toggle();
  });
};

  // $("p.js").click(function() {
  //   $(".js-showing").toggle();
  //   $(".js-hidden").toggle();
  // });
  // $("p.op").click(function() {
  //   $(".op-showing").toggle();
  //   $(".op-hidden").toggle();
  // });
  // $("p.var").click(function() {
  //   $(".var-showing").toggle();
  //   $(".var-hidden").toggle();
  // });
  // $("p.fun").click(function() {
  //   $(".fun-showing").toggle();
  //   $(".fun-hidden").toggle();
  // });
  // $("p.met").click(function() {
  //   $(".met-showing").toggle();
  //   $(".met-hidden").toggle();
  // });
  // $("p.arg").click(function() {
  //   $(".arg-showing").toggle();
  //   $(".arg-hidden").toggle();
  // });
  // $("p.par").click(function() {
  //   $(".par-showing").toggle();
  //   $(".par-hidden").toggle();
  // });
  // $("p.ret").click(function() {
  //   $(".ret-showing").toggle();
  //   $(".ret-hidden").toggle();
  // });
  // $("p.chain").click(function() {
  //   $(".chain-showing").toggle();
  //   $(".chain-hidden").toggle();
  // });
  // $("p.str").click(function() {
  //   $(".str-showing").toggle();
  //   $(".str-hidden").toggle();
  // });
  // $("p.bo").click(function() {
  //   $(".bo-showing").toggle();
  //   $(".bo-hidden").toggle();
  // });
  // $("p.und").click(function() {
  //   $(".und-showing").toggle();
  //   $(".und-hidden").toggle();
  // });
  // $("p.nan").click(function() {
  //   $(".nan-showing").toggle();
  //   $(".nan-hidden").toggle();
  // });
  // $("p.es").click(function() {
  //   $(".es-showing").toggle();
  //   $(".es-hidden").toggle();
  // });
  // $("p.al").click(function() {
  //   $(".al-showing").toggle();
  //   $(".al-hidden").toggle();
  // });
  // $("p.com").click(function() {
  //   $(".com-showing").toggle();
  //   $(".com-hidden").toggle();
  // });
  // $("p.jq").click(function() {
  //   $(".jq-showing").toggle();
  //   $(".jq-hidden").toggle();
  // });
  // $("p.att").click(function() {
  //   $(".att-showing").toggle();
  //   $(".att-hidden").toggle();
  // });
});
